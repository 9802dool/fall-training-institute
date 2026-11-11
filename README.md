# F.A.L.L. Training Institute

Private firearms training and Firearm User’s Licence document help for Trinidad and Tobago. The public site is a Next.js app. It does not approve licences, sell firearms, or take uploads.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

The build script uses Webpack. On this computer the native Turbopack binding does not load, and Next.js tells you to build with Webpack instead.

## Environment

Copy `.env.example` to `.env.local` if you want a public site URL in metadata, the sitemap, and JSON-LD.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL, such as `https://your-domain.example`. Defaults to `http://localhost:3000`. |

Do not put secrets in `NEXT_PUBLIC_` variables. There is no database password in this MVP.

Booking, reminder, and enquiry forms log the submission and, when the disk allows, append it to `data/submissions.ndjson`. That folder is gitignored. On a host with a read-only disk, the log line is enough and the file write is skipped.

## Phase 2

These are not built yet:

- Supabase storage for enquiries and client records
- Email delivery for form submissions
- Online card checkout (copy on the site says payment links and bank transfer, details TBD)
- SMS and WhatsApp reminders
- A document vault
- A client portal
- An admin area
- A live class calendar

Search the code for `TODO(phase-2)`.

## Content rules

Do not invent official fees, FALL prices, instructor names, or an address. Official 2026 fees on the site come from Legal Notice 489 of 2025. FALL prices stay TT$ TBD until they are written down. An attorney should review the disclaimer, privacy page, and terms before they are treated as final.
