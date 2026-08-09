# Reusable Hospitality Website Template

A photography-first Next.js template for hotels, riads, boutique properties, guesthouses, and villas. It includes only Home, Rooms, room details, Gallery, Contact, WhatsApp, Google Maps, and a real email contact endpoint.

## Customize a new property

Most client work happens in three files and one image folder:

- `data/site.ts` — name, logo text, SEO description, hero copy/image, colors-adjacent content, phone, WhatsApp, email, address, location copy, map, directions, and social links.
- `data/rooms.ts` — room names, slugs, descriptions, images, capacity, beds, amenities, optional prices, featured status, and display order.
- `data/gallery.ts` — gallery images, categories, titles, captions, and shapes.
- `public/images/` — local property, hero, room, and gallery photography.

Recommended image organization for a new client:

```text
public/images/hero/
public/images/property/
public/images/rooms/
public/images/gallery/
```

To launch a new hotel: change the identity and contact values in `data/site.ts`; replace the logo text or add your logo component; set `heroImage`; adjust the palette in `tailwind.config.ts`; replace room entries and room photos; replace gallery entries; update the address, map embed URL, directions URL, phone, WhatsApp digits, and public email.

WhatsApp is centralized as `site.whatsapp` and must contain international digits only, with no `+`, spaces, or punctuation. All WhatsApp actions use that value.

## Contact email

The form posts to `/api/contact`. The server validates the fields and sends the message through SMTP with Nodemailer. Credentials remain server-side. Failed requests show an error; the interface never fakes success.

Create `.env.local` (do not commit it):

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_EMAIL_FROM=website@yourdomain.com
CONTACT_EMAIL_TO=hotel@yourdomain.com
```

`CONTACT_EMAIL_FROM` is optional when the SMTP username is an accepted sender. `CONTACT_EMAIL_TO` defaults to `site.email`. Use credentials from a transactional provider that supports SMTP, such as Resend SMTP, Postmark, Mailgun, or Brevo.

## Local testing

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

Test the four navigation links, every room URL, gallery lightbox, form success and failure paths, WhatsApp, map, directions, desktop navigation, and mobile menu.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the six SMTP/contact variables under Project Settings → Environment Variables.
4. Deploy and submit a real contact test.
5. Add the client domain in Vercel, update its DNS records as instructed, and change `site.siteUrl` to the production URL.

No database, separate server, container, authentication, payment system, or CMS is required.
