# Trafikparat — website

A modern, accessible, multilingual website for Trafikparat — a driving school in Aalborg, Denmark.

Built as a **frontend-only** site (plain HTML / CSS / JS — no build step). Drop it on any static host.

---

## What's inside

```
Trafikklar/
├── index.html              Home page
├── holdstart.html          Courses & pricing
├── saerlige-behov.html     Inclusive teaching (stress, PTSD, ADHD, autism…)
├── om-os.html              About / philosophy
├── kontakt.html            Contact form + map
├── css/
│   └── style.css           Design system + all components
├── js/
│   ├── i18n.js             7-language translations + language switcher
│   └── main.js             Nav, mobile menu, scroll reveals, form handler
├── assets/
│   ├── logo.svg
│   └── illustrations/
│       └── inclusive.svg
└── README.md
```

---

## Design rationale

**Customer segments analysed**

1. **First-time drivers (17–25)** — main volume. Need clarity, trust, easy enrolment.
2. **Learners with mental-health needs** (stress, PTSD, anxiety, depression, ADHD, autism) — Trafikparat's *unique* differentiator. The whole site treats them as a first-class audience, with a dedicated page that's empathetic, calm and never clinical.
3. **Ukrainian & international residents in Aalborg** — driven by the post-2022 community. Full multilingual support (Ukrainian, Russian + EN/NO/SV/DE).
4. **Adult learners & licence-recovery** — secondary, but visible in courses.
5. **Aspiring driving instructors** — niche, but a real revenue line.

**Visual direction**

- Modernized **green identity** — emerald `#047857` with a fresh mint accent `#10B981`. Keeps the brand soul (the existing site's bold green) but trades the harsh neon for a sophisticated, trustworthy hue that works for both teenagers and a parent-paying-for-the-package.
- **Sora** for display + **Inter** for body — clean, friendly, highly legible.
- Generous white space, soft shadows, rounded radii — calming for the special-needs audience.
- Pricing transparency front and centre (it converts).

**UX choices**

- Pricing is shown on the home-page preview AND the holdstart page so visitors don't have to hunt.
- Special-needs accommodations are surfaced on the home page as a teaser, then unpacked on their own page — visible to those who need it without being the first thing a casual visitor sees.
- Sticky nav with prominent CTA (`Tilmeld dig`) on every page.
- Language switcher is in the nav, persists via `localStorage`, auto-detects browser language on first visit.
- Phone number is a tap-to-call link on every page.

---

## Languages

Switcher in the top-right of every page. Supported:

| Code | Language     |
|------|--------------|
| `da` | Dansk (default) |
| `en` | English      |
| `uk` | Українська   |
| `ru` | Русский      |
| `no` | Norsk        |
| `sv` | Svenska      |
| `de` | Deutsch      |

**Adding / editing strings**: open `js/i18n.js`, find the `T` object — each language is a complete dictionary with the same key structure. Add new keys to all languages.

In HTML, use:
- `data-i18n="key.path"` for text content
- `data-i18n-attr="placeholder:key.path"` for attributes
- `data-i18n-title="key.path"` to set the page `<title>`

---

## Contact form — how it works

The form on `kontakt.html` collects `navn`, `e-mail`, `besked` and a hidden honeypot. Submission logic lives in `js/main.js`.

**Three deployment options:**

### Option 1 — Deploy on one.com next to the existing site
The existing one.com form posts to one.com's internal contact-form endpoint, which is tied to specific page IDs the Web Editor generates. **Plain HTML uploaded to one.com hosting does NOT inherit this**. You have two paths:

- **Easiest:** rebuild this exact form inside the one.com Web Editor as a separate page (its own POST endpoint), then either embed an iframe to it or copy the generated `<form>` markup into `kontakt.html`.
- **Alternative:** point the form at a free third-party endpoint (see Option 2).

### Option 2 — Formspree / Web3Forms / Basin (recommended for portability)
Sign up at e.g. [formspree.io](https://formspree.io) (free tier covers small volumes). Get your endpoint URL, then set it in `kontakt.html` just before the closing `</body>`:

```html
<script>window.TRAFIKPARAT_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_ID';</script>
```

The form will POST `application/x-www-form-urlencoded` to that endpoint. Success and error messages already wire up automatically.

### Option 3 — mailto fallback (zero config)
If no endpoint is set, the form falls back to opening the visitor's email client with the message pre-filled to `info@trafikparat.dk`. Works out of the box.

---

## Deployment

This is a static site — drop the entire `Trafikklar/` folder onto any static host:

- **one.com static hosting:** upload via FTP to your domain's web root.
- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop deploy.
- **GitHub Pages:** push to a repo, enable Pages on the main branch root.

All paths are relative — no rewrites needed.

---

## Accessibility & performance notes

- Semantic HTML, ARIA labels on the nav, `aria-live` on the form status.
- Keyboard support throughout, visible focus rings.
- `prefers-reduced-motion` respected (animations disabled).
- Fonts loaded with `display=swap` to avoid blank text.
- No JS frameworks, no bundler — `< 100 kB` total.
- Lighthouse-friendly: SVG icons inline, lazy-loaded map iframe.

---

## What's preserved from the current site

✓ Company name, address, phone, email, CVR
✓ The hero video from `trafikparat.dk/onewebmedia/Trafik%20-%206454.mp4`
✓ All 6 services with their original prices and lovpakke contents
✓ The "ubegrænset teori" and "max 6 elever pr. hold" claims
✓ The three-pillar methodology (Fokus / Stress / Bevidsthed)
✓ The list of accommodated diagnoses (Stress, PTSD, Angst, Depression, ADHD/ADD, Autisme-Asperger)
✓ Contact form fields + honeypot
✓ Embedded Google Maps with correct ftid
✓ Address link to Google Maps search

Nothing fabricated — only existing copy reworded for readability.
