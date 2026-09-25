# Pixel Academy

Landing page + checkout + student area for a single recorded Lightroom course.
React 19, Tailwind CSS v4, React Router, Supabase (auth + database).

```bash
npm install
npm run dev
```

## How buying works

1. Student clicks **কোর্সটি কিনুন** → `/checkout`
2. Creates an account (name, phone, email, password), sends money by bKash/Nagad **Send Money**, enters the TrxID
3. The order is saved as **pending**; the student sees "যাচাই করা হচ্ছে" on `/my-course`
4. You open `/admin`, check the TrxID in your bKash/Nagad app, and click **অনুমোদন দিন**
5. The student's `/my-course` page now shows the videos

Until Supabase is configured, checkout still works: the order is sent to WhatsApp instead.

## One-time Supabase setup

1. Create a free project at [supabase.com](https://supabase.com).
2. **SQL Editor** → paste and run [`supabase/schema.sql`](supabase/schema.sql).
3. **Authentication → Sign In / Providers → Email**: turn **off** "Confirm email"
   (otherwise students must click an email link before their order can be saved).
4. **Authentication → URL Configuration**: set **Site URL** to your live domain and add
   `https://your-domain/login` to **Redirect URLs** (used by password reset).
5. Copy `.env.example` to `.env` and fill in the Project URL and anon/publishable key
   (**Project Settings → API**). Add the same variables in your hosting provider.
6. Sign up once through the site's checkout, then make yourself admin in the SQL Editor:
   ```sql
   update public.profiles set is_admin = true
   where id = (select id from auth.users where email = 'you@example.com');
   ```
7. **Table Editor → lessons**: paste each lesson's video link into `video_url`
   (unlisted YouTube, Vimeo, Bunny Stream embed, or an `.mp4` URL). Add or rename rows freely.

## Things to edit

All copy, price, bKash/Nagad number and the discount deadline live in
[`src/data/homeContent.js`](src/data/homeContent.js):

- `PRICE.amount` — the Taka amount students must send
- `OFFER_ENDS_AT` — the real end of the discount (countdowns hide after it)
- `PAYMENT.number`, `PAYMENT.verifyTime`

Optional: set `VITE_META_PIXEL_ID` to track `ViewContent`, `InitiateCheckout` and
`Purchase` (fired when an order is submitted) for Facebook ads.

## Deploying

It's a single-page app, so every path must serve `index.html`.
`vercel.json` (Vercel) and `public/_redirects` (Netlify) already do this.
