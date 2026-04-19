# Schuberg's Bar & Grill — Next.js Redesign

A full redesign of schubergsbar.com built with Next.js and Tailwind CSS.

## Setup

1. Create a new Next.js project and replace the contents with this folder:
   ```bash
   npx create-next-app@latest schubergs
   # When prompted: TypeScript=No, ESLint=Yes, Tailwind=Yes, src/=No, App Router=Yes, alias=No
   ```

2. Copy all files from this folder into your new project (replace existing ones).

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the dev server:
   ```bash
   npm run dev
   ```

## Images — what you need to add

Drop these into `/public/images/` (download from Schuberg's existing Wix site or take new photos):

### Hero & general
- `hero.jpg` — full-width background for the homepage hero (use a great food/bar shot)
- `history-hero.jpg` — wide bar interior or vintage photo for history page

### Burger photos (homepage + gallery)
- `classic-schu.jpg`
- `brew-burger.jpg`
- `super-yooper.jpg`
- `bacon-cheddar-schu.jpg`
- `chili.jpg`
- `egg-cellent.jpg`
- `tipsy-dip.jpg`
- `loaded-tots.jpg`
- `house-salad.jpg`
- `sweet-potato-fries.jpg`

### Atmosphere (gallery)
- `bar-interior.jpg`
- `bar-exterior.jpg`
- `vintage-crowd.jpg`

### Vintage / history (history page)
- `vintage-1.jpg` through `vintage-6.jpg`

## Contact form setup

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — copy your Form ID (looks like `xpzgkwrb`)
3. Open `app/contact/page.jsx` and replace `YOUR_FORM_ID` with your actual ID

## Customisation

- **Menu items** — edit `data/menuData.js`
- **History timeline** — edit `data/historyData.js`
- **Colors** — the brand red is `#C0392B` throughout. Change in `tailwind.config.js`
- **Hours** — update in `components/Footer.jsx` and `app/contact/page.jsx`
- **Your name** — update the "Redesigned by" credit in `components/Footer.jsx`

## Deploy to Vercel

```bash
# Push to GitHub first, then:
# vercel.com → New Project → Import repo → Deploy
```
