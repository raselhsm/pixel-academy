-- Pixel Academy: run once in Supabase Dashboard → SQL Editor.
-- Students sign up at checkout, submit a bKash/Nagad TrxID as an order,
-- and can watch lessons once an admin approves that order.

-- Helper functions live in `private`, which the API doesn't expose, so they
-- can't be called directly over REST.
create schema if not exists private;
grant usage on schema private to authenticated;

-- Profiles ------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  phone text,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Copies name/phone from sign-up metadata. is_admin is never taken from metadata.
create function private.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, phone)
  values (new.id, new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'phone');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function private.handle_new_user();

revoke execute on function private.handle_new_user() from public, anon, authenticated;

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

-- Orders --------------------------------------------------------------------

create table public.orders (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  full_name text not null,
  phone text not null,
  payment_method text not null check (payment_method in ('bkash', 'nagad')),
  sender_number text not null,
  trx_id text not null unique,
  amount integer not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create index orders_user_id_idx on public.orders (user_id);
create index orders_status_idx on public.orders (status, created_at desc);

alter table public.orders enable row level security;

create policy "orders: student creates own pending order" on public.orders
  for insert to authenticated
  with check (user_id = (select auth.uid()) and status = 'pending' and reviewed_at is null);

create policy "orders: read own or admin" on public.orders
  for select to authenticated
  using (user_id = (select auth.uid()) or (select private.is_admin()));

create policy "orders: admin reviews" on public.orders
  for update to authenticated
  using ((select private.is_admin()))
  with check ((select private.is_admin()));

create function private.has_course_access()
returns boolean
language sql stable
security definer set search_path = ''
as $$
  select exists (
    select 1 from public.orders where user_id = auth.uid() and status = 'approved'
  );
$$;

revoke execute on function private.is_admin(), private.has_course_access() from public, anon;
grant execute on function private.is_admin(), private.has_course_access() to authenticated;

-- Lessons -------------------------------------------------------------------

create table public.lessons (
  id bigint generated always as identity primary key,
  module_no integer not null,
  module_title text not null,
  position integer not null,
  title text not null,
  video_url text,
  unique (module_no, position)
);

alter table public.lessons enable row level security;

-- Video links are only visible to students with an approved order (and admins).
create policy "lessons: paid students and admins" on public.lessons
  for select to authenticated
  using ((select private.has_course_access()) or (select private.is_admin()));

-- Starter lessons from the curriculum. Paste each lesson's video link into
-- video_url (Table Editor → lessons), e.g. an unlisted YouTube URL.
insert into public.lessons (module_no, module_title, position, title) values
  (1, 'লাইটরুম ইন্টারফেস, ক্যাটালগ ও RAW প্রসেসিং', 1, 'ক্যাটালগ সেটআপ ও ফাস্ট ইমপোর্ট মেথড'),
  (1, 'লাইটরুম ইন্টারফেস, ক্যাটালগ ও RAW প্রসেসিং', 2, 'হিস্টোগ্রাম ও বেসিক প্যানেল ব্যালেন্স'),
  (1, 'লাইটরুম ইন্টারফেস, ক্যাটালগ ও RAW প্রসেসিং', 3, 'হোয়াইট ব্যালেন্সের প্রফেশনাল শর্টকাট'),
  (2, 'টোন কার্ভ ও কালার গ্রেডিং ম্যাস্টারি', 1, 'RGB Curve দিয়ে সিনেমাটিক ম্যাট লুক'),
  (2, 'টোন কার্ভ ও কালার গ্রেডিং ম্যাস্টারি', 2, 'HSL প্যানেল ও স্কিন টোন প্রটেকশন'),
  (2, 'টোন কার্ভ ও কালার গ্রেডিং ম্যাস্টারি', 3, 'Color Grading হুইল: শ্যাডো, মিডটোন, হাইলাইটস'),
  (3, 'AI মাস্কিং ও অ্যাডভান্সড স্কিন রিটাচিং', 1, 'AI মাস্কিং: সাবজেক্ট, ব্যাকগ্রাউন্ড ও স্কিন'),
  (3, 'AI মাস্কিং ও অ্যাডভান্সড স্কিন রিটাচিং', 2, 'ন্যাচারাল ডজ অ্যান্ড বার্ন'),
  (3, 'AI মাস্কিং ও অ্যাডভান্সড স্কিন রিটাচিং', 3, 'চোখ, দাঁত ও হেয়ার রিটাচিং'),
  (4, 'ফাইভার, আপওয়ার্ক ও ফ্রিল্যান্সিং রোডম্যাপ', 1, 'ফাইভার গিগ ও কি-ওয়ার্ড অপটিমাইজেশন'),
  (4, 'ফাইভার, আপওয়ার্ক ও ফ্রিল্যান্সিং রোডম্যাপ', 2, 'হাই-পেয়িং ক্লায়েন্টদের জন্য পোর্টফোলিও'),
  (4, 'ফাইভার, আপওয়ার্ক ও ফ্রিল্যান্সিং রোডম্যাপ', 3, 'ব্যাংক ও বিকাশে পেমেন্ট নেওয়ার গাইড');

-- Make yourself admin after signing up once on the site:
--   update public.profiles set is_admin = true
--   where id = (select id from auth.users where email = 'you@example.com');
