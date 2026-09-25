-- Pixel Academy database — the complete schema for a fresh Supabase project.
-- Run once in Supabase Dashboard → SQL Editor. (The live project already has it.)
--
--   profiles  one row per account (name, phone, email, is_admin)
--   orders    bKash/Nagad payments students submit; admins approve or reject
--   modules   course sections, in order
--   lessons   videos inside a module; only visible with an approved order
--   legacy_students  buyers imported from the old WordPress site (admin only)
--
-- Helper functions live in the `private` schema, which the API doesn't expose.

create schema if not exists private;
grant usage on schema private to authenticated;


-- 1. Admin accounts ----------------------------------------------------------
-- An address listed here becomes admin once it's verified (confirmation link
-- or Google), so nobody can claim admin by signing up with it first.

create table private.admin_emails (
  email text primary key check (email = lower(email))
);

insert into private.admin_emails (email) values ('pixelacademyit@gmail.com');

create function private.qualifies_as_admin(p_email text, p_confirmed_at timestamptz)
returns boolean
language sql stable
security definer set search_path = ''
as $$
  select p_confirmed_at is not null
     and exists (select 1 from private.admin_emails where email = lower(p_email));
$$;


-- 2. Profiles ------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  phone text,
  email text,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create function private.is_admin()
returns boolean
language sql stable
security definer set search_path = ''
as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

-- Students can read (not edit) their own profile; admins can read all.
create policy "profiles: read own or admin" on public.profiles
  for select to authenticated
  using (id = (select auth.uid()) or (select private.is_admin()));

-- Name/phone come from sign-up data (Google sends `name`); is_admin never does.
create function private.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, phone, email, is_admin)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'phone',
    new.email,
    private.qualifies_as_admin(new.email, new.email_confirmed_at)
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function private.handle_new_user();

-- Keeps the email in sync and grants admin once a listed address is verified.
create function private.handle_user_updated()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  update public.profiles
  set email = new.email,
      is_admin = is_admin or private.qualifies_as_admin(new.email, new.email_confirmed_at)
  where id = new.id;
  return new;
end;
$$;

create trigger on_auth_user_updated
  after update of email, email_confirmed_at on auth.users
  for each row execute function private.handle_user_updated();


-- 3. Orders --------------------------------------------------------------------

create table public.orders (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  full_name text not null,
  phone text not null,
  payment_method text not null check (payment_method in ('bkash', 'nagad', 'manual')),
  sender_number text not null,
  trx_id text not null unique,
  amount integer not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  note text, -- shown to the student, e.g. why a payment was rejected
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references auth.users on delete set null
);

create index orders_user_id_idx on public.orders (user_id);
create index orders_status_idx on public.orders (status, created_at desc);
create index orders_reviewed_by_idx on public.orders (reviewed_by);

alter table public.orders enable row level security;

-- Students create their own pending order; admins can also grant access
-- directly ('manual' orders, e.g. for buyers from the old site).
create policy "orders: students order, admins grant" on public.orders
  for insert to authenticated
  with check (
    (user_id = (select auth.uid()) and status = 'pending' and reviewed_at is null)
    or (select private.is_admin())
  );

create policy "orders: read own or admin" on public.orders
  for select to authenticated
  using (user_id = (select auth.uid()) or (select private.is_admin()));

create policy "orders: admin reviews" on public.orders
  for update to authenticated
  using ((select private.is_admin()))
  with check ((select private.is_admin()));

-- Records who approved/rejected and when, whenever the status changes.
create function private.stamp_order_review()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.status is distinct from old.status then
    new.reviewed_at := now();
    new.reviewed_by := auth.uid();
  end if;
  return new;
end;
$$;

create trigger orders_stamp_review
  before update on public.orders
  for each row execute function private.stamp_order_review();

create function private.has_course_access()
returns boolean
language sql stable
security definer set search_path = ''
as $$
  select exists (
    select 1 from public.orders where user_id = auth.uid() and status = 'approved'
  );
$$;


-- 4. Course content ------------------------------------------------------------

create table public.modules (
  id bigint generated always as identity primary key,
  position integer not null,
  title text not null,
  created_at timestamptz not null default now()
);

create table public.lessons (
  id bigint generated always as identity primary key,
  module_id bigint not null references public.modules on delete cascade,
  position integer not null,
  title text not null,
  video_url text,
  duration text, -- e.g. '20:24'
  created_at timestamptz not null default now()
);

create index lessons_module_id_idx on public.lessons (module_id, position);

alter table public.modules enable row level security;
alter table public.lessons enable row level security;

-- Module titles are the public curriculum.
create policy "modules: anyone can read" on public.modules
  for select to anon, authenticated using (true);
create policy "modules: admin inserts" on public.modules
  for insert to authenticated with check ((select private.is_admin()));
create policy "modules: admin updates" on public.modules
  for update to authenticated using ((select private.is_admin())) with check ((select private.is_admin()));
create policy "modules: admin deletes" on public.modules
  for delete to authenticated using ((select private.is_admin()));

-- Video links are only visible to students with an approved order (and admins).
create policy "lessons: paid students and admins" on public.lessons
  for select to authenticated
  using ((select private.has_course_access()) or (select private.is_admin()));
create policy "lessons: admin inserts" on public.lessons
  for insert to authenticated with check ((select private.is_admin()));
create policy "lessons: admin updates" on public.lessons
  for update to authenticated using ((select private.is_admin())) with check ((select private.is_admin()));
create policy "lessons: admin deletes" on public.lessons
  for delete to authenticated using ((select private.is_admin()));


-- 5. Buyers from the old WordPress site ------------------------------------------
-- Imported by the admin; when one signs up, the admin panel flags them for
-- one-click access.

create table public.legacy_students (
  email text primary key check (email = lower(email)),
  full_name text,
  phone text,
  imported_at timestamptz not null default now()
);

alter table public.legacy_students enable row level security;

create policy "legacy_students: admin reads" on public.legacy_students
  for select to authenticated using ((select private.is_admin()));
create policy "legacy_students: admin inserts" on public.legacy_students
  for insert to authenticated with check ((select private.is_admin()));
create policy "legacy_students: admin updates" on public.legacy_students
  for update to authenticated using ((select private.is_admin())) with check ((select private.is_admin()));
create policy "legacy_students: admin deletes" on public.legacy_students
  for delete to authenticated using ((select private.is_admin()));


-- 6. Function permissions --------------------------------------------------------
-- Policies need is_admin / has_course_access; nothing else is callable.

revoke execute on all functions in schema private from public, anon, authenticated;
grant execute on function private.is_admin(), private.has_course_access() to authenticated;


-- 7. Curriculum: Lightroom Mastery (13 lessons, 8 h 20 min) -----------------------
-- Add video links from the site: /admin/content.

with m as (
  insert into public.modules (position, title) values
    (1, 'লাইটরুম বেসিক'),
    (2, 'প্রফেশনাল এডিটিং ওয়ার্কফ্লো'),
    (3, 'রিয়েল ওয়েডিং প্রজেক্ট'),
    (4, 'ফ্রিল্যান্সিং ও ফাইভার')
  returning id, position
)
insert into public.lessons (module_id, position, title, duration)
select m.id, l.position, l.title, l.duration
from m
join (values
  (1, 1, 'Lightroom Download & Installation', '2:53'),
  (1, 2, 'Lightroom Interface', '20:24'),
  (1, 3, 'Lightroom Basic Tool', '10:44'),
  (1, 4, 'Lightroom Other Tools', '24:22'),
  (2, 1, 'Culling / Filtering Images', '55:02'),
  (2, 2, 'Cropping', '29:54'),
  (2, 3, 'Color Correction', '35:04'),
  (2, 4, 'Preset Creation & Import', '6:07'),
  (2, 5, 'Export Settings', '7:13'),
  (3, 1, 'Wedding / Real Project', '19:55'),
  (4, 1, 'Price / Delivery / Payment', '8:27'),
  (4, 2, 'Fiverr Account Creation', '9:12'),
  (4, 3, 'Fiverr Gig Publishing', '42:32')
) as l (module_position, position, title, duration) on l.module_position = m.position;
