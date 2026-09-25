# Pixel Academy

Landing page + checkout + student area for a single recorded Lightroom course.
React 19, Tailwind CSS v4, React Router, Supabase (auth + database).

```bash
npm install
npm run dev
```

## How buying works

1. Student clicks **কোর্সটি কিনুন** → `/checkout` (or opens an account first at `/login?mode=signup`, or with Google)
2. Sends money by bKash/Nagad **Send Money** and enters the TrxID
3. The order is saved as **pending**; the student sees "যাচাই করা হচ্ছে" on `/my-course`
4. You approve it in the admin panel; the student's `/my-course` page now shows the videos

Until Supabase is configured, checkout still works: the order is sent to WhatsApp instead.

## Admin panel (`/admin`)

Sign in with **pixelacademyit@gmail.com** — that address becomes admin automatically once it's
verified (by the confirmation email or by signing in with Google). To add another admin:

```sql
insert into private.admin_emails (email) values ('someone@example.com');
```

| Page | What it's for |
| --- | --- |
| ওভারভিউ | Pending orders, buyers, revenue, today's orders, and a setup checklist |
| অর্ডার | Search by TrxID / phone / name; approve, or reject with a reason the student sees |
| শিক্ষার্থী | Everyone who signed up, filter by bought / not bought, WhatsApp reminders, CSV export |
| কোর্স কনটেন্ট | Add, rename, reorder and delete modules and lessons; paste video links |

## Database

[`supabase/schema.sql`](supabase/schema.sql) is the complete schema (tables, row-level security,
triggers, starter curriculum). The live project already has it; run it only on a fresh project.

- `profiles` — one per account; `is_admin` can't be set from the site
- `orders` — students can only create their own *pending* orders; approvals are stamped with who and when
- `modules` / `lessons` — module titles are public; lesson video links are only returned to
  students with an approved order

## One-time Supabase setup

1. **Authentication → Sign In / Providers → Email**: turn **off** "Confirm email" — *after*
   the admin email has signed up and been verified.
2. **Authentication → URL Configuration**: set **Site URL** to your live domain and add
   `https://your-domain/**` and `http://127.0.0.1:5173/**` to **Redirect URLs**.
3. **Google sign-in** (optional): create an OAuth client in Google Cloud with redirect URI
   `https://<project-ref>.supabase.co/auth/v1/callback`, then enable Google in
   **Authentication → Sign In / Providers**. The button appears on the site by itself.
4. Copy `.env.example` to `.env` with the Project URL and publishable key, and add the same
   variables in your hosting provider.

## Moving from the old WordPress site (pixelacademyit.com)

Do these **before** deleting WordPress:

1. **Video links**: already copied into **/admin/content** (12 on YouTube, lesson 1 on Vimeo).
2. **Photos**: download anything you want to keep (instructor photo, before/after edits) and
   add it under `public/`, then set `INSTRUCTOR.photo` / `HERO_BEFORE_IMAGE` in `homeContent.js`.
3. **Deploy** the new site and point the `pixelacademyit.com` domain at it. Old WordPress URLs
   (`/courses/...`, `/dashboard/`, `/privacy-policy-2/`, …) redirect to the new pages via
   `public/_redirects`.

## Things to edit

All copy, price, bKash/Nagad number and the discount deadline live in
[`src/data/homeContent.js`](src/data/homeContent.js):

- `PRICE.amount` — the Taka amount students must send
- `OFFER_ENDS_AT` — set a real deadline to show countdowns; `null` hides them
- `INSTRUCTOR`, `SOCIAL_PROOF`, `TRUST_METRICS` — keep these numbers true
- `PAYMENT.number`, `PAYMENT.verifyTime`

Optional: set `VITE_META_PIXEL_ID` to track `ViewContent`, `InitiateCheckout` and
`Purchase` (fired when an order is submitted) for Facebook ads.

## Deploying

Hosted on Netlify. `public/_redirects` sends old WordPress links to the new pages and serves
`index.html` for every other path (it's a single-page app).
