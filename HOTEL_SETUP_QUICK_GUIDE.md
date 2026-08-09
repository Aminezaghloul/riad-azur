# Quick Guide: Adapt and Deploy This Hotel Website

This project is already designed as one reusable template. For each new hotel, copy the project and change only the configuration, room data, gallery data, and images.

## 1. The four places you normally change

### `data/site.ts`

Change the hotel identity and shared information:

- `name` and `logoText`
- `siteUrl`, `tagline`, and `description`
- hero title, text, button label, and image
- property and location descriptions
- phone, public email, and WhatsApp number
- address, city, country, map, and directions links
- Instagram and Facebook links
- currency symbol

Use international digits only for `whatsapp`, for example `212600000000`. Do not include `+`, spaces, or dashes. Every WhatsApp button reads this one value.

### `data/rooms.ts`

Replace the example rooms. Each room contains its name, URL slug, descriptions, capacity, bed, amenities, images, optional price, and display order.

- Set `featured: true` to show a room on the homepage.
- Remove `price` when the hotel does not want to publish rates.
- Keep every slug unique, lowercase, and separated with hyphens, such as `garden-room`.

### `data/gallery.ts`

Replace the gallery entries and their local image paths. Categories used here must also exist in the category list in `app/gallery/GalleryClient.tsx`.

### `public/images/`

Replace the demo photography with client images. A useful structure is:

```text
public/images/hero/
public/images/property/
public/images/rooms/
public/images/gallery/
```

Then reference an image as `/images/rooms/garden-room-1.jpg` in the data files.

## 2. Contact form: no separate backend is needed

The project already includes a small backend inside Next.js:

```text
Visitor -> contact form -> /api/contact -> SMTP email provider -> hotel inbox
```

The backend file is `app/api/contact/route.ts`. When deployed to Vercel, it runs as a Vercel Function. You do not need another server, database, Docker container, authentication system, or VPS.

The simplest setup is to use an SMTP-capable transactional email provider such as Resend, Brevo, Postmark, or Mailgun. Resend is a convenient starting option and supports SMTP. Its free transactional tier currently documents limits of 100 emails per day and 3,000 per month; always check the provider's current limits before promising free service to a client.

Create `.env.local` for local development:

```env
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=YOUR_RESEND_API_KEY
CONTACT_EMAIL_FROM=Website <contact@your-verified-domain.com>
CONTACT_EMAIL_TO=hotel@example.com
```

Important:

- Never add `.env.local` or real credentials to GitHub.
- Verify the sending domain with the email provider.
- `CONTACT_EMAIL_TO` is the hotel inbox that receives messages.
- `CONTACT_EMAIL_FROM` must be an address accepted by the provider.
- The visitor's address is used as `replyTo`, so the hotel can reply normally.

You may switch providers later without changing the frontend. Normally only the SMTP environment variables need to change.

## 3. Test locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`, then test:

- Home, Rooms, every room page, Gallery, and Contact
- desktop and mobile navigation
- WhatsApp and directions links
- a real form submission

Before deployment, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## 4. Free and simple Vercel deployment

1. Create a GitHub repository and push this project.
2. Sign in to Vercel and import the repository.
3. Vercel detects Next.js automatically; keep the default build settings.
4. In **Project Settings > Environment Variables**, add all six contact variables.
5. Add them to Production, Preview, and Development when needed.
6. Deploy.
7. Submit the production contact form and confirm the email arrives.
8. Add the client's domain in **Settings > Domains** and follow Vercel's DNS instructions.
9. Change `siteUrl` in `data/site.ts` to the final HTTPS domain and redeploy.

Vercel's Hobby plan is currently free and suitable for personal and small-scale projects within its usage limits. Confirm that a client's commercial use fits Vercel's current plan terms and limits. A custom domain itself is usually not free: the client must already own one or purchase one.

## 5. Fast workflow for every new hotel

```text
Copy template
-> edit data/site.ts
-> edit data/rooms.ts
-> edit data/gallery.ts
-> replace public/images
-> configure SMTP variables
-> run checks
-> push to GitHub
-> import into Vercel
-> connect domain
```

You should not need to rewrite the navbar, hero, room cards, gallery, contact form, footer, or layouts for each client.
