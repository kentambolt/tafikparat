# Café Provence – launch guide (cafeprovence.dk)

## What's in the file
`index.html` is a complete one-page website. No build tools needed – upload it to any web host and point cafeprovence.dk at it.

## Before you go live

1. **Photos** – The site currently loads 3 photos directly from restaurant-provence.dk. Before the old site is shut down, download them and upload to your new host, then update the 3 URLs in `index.html`:
   - Hero: `.../2025/06/RS-forside-1.jpg`
   - About: `.../2025/06/maned-menu-1.jpg`
   - Booking background: `.../2024/11/iStock-500466008-min-scaled-2.jpg`

2. **Booking widget** – Find the comment `BOOKING-WIDGET` in `index.html` and paste your existing booking system's embed code there. Until then the button links to your current booking page.

3. **Opening hours** – Closing times are not shown on your current website, so the new site says "fra kl. 12 / fra kl. 11" like the old one. Add closing times in the "Åbningstider" table if you want them shown.

4. **Email** – Contact email is kept as kontakt@restaurant-provence.dk and booking@restaurant-provence.dk. If you create @cafeprovence.dk addresses, update them in the booking and contact sections + footer.

## Content
All menus, prices, wines, contact details and serving times were taken 1:1 from restaurant-provence.dk (July 2026). Nothing was invented. Remember to update "Månedens menu" (currently Sommermenu, 295 kr) when it changes.

## New branding
- Name: Café Provence, with a lavender-sprig logo (inline SVG – no image file needed)
- Colors: cream, lavender, olive, terracotta
- Fonts: Cormorant Garamond + Jost (Google Fonts)
