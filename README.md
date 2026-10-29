# Dala Naturals

Single-page site built with React, TypeScript and Vite. Responsive from small phones to large desktops, with light and dark themes.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## Where things live

- `public/images/` — trimmed brand images. `logo.png` / `mark.png` are for light mode; `logo-light.png` / `mark-light.png` (beige lettering) are shown automatically in dark mode. `honey.png` and `oil.png` are the product shots.
- `src/data/content.ts` — all copy. The manifesto shows a short version with a "Read the full manifesto" toggle; values keep both a one-line `short` and the original `text`.
- `src/components/` — one component per section, plus `ThemeToggle`, `ThemedImg`, `Reveal` (scroll animation) and `ScrollProgress`.
- `src/styles.css` — theme tokens at the top (`:root` for light, `[data-theme="dark"]` for dark) and the responsive breakpoints at the bottom.

## WhatsApp contact button

A floating WhatsApp button (bottom-right) opens a small chat card with quick replies and a message box. Every option opens WhatsApp with the text pre-filled, using the standard `https://wa.me/<number>?text=...` link. A "Chat on WhatsApp" link is also in the footer.

**Before you publish, set your number** in `src/data/content.ts`:

```ts
export const contact = {
  phone: "254712345678",          // digits only: country code + number, no "+" or leading 0
  displayPhone: "+254 712 345 678", // shown in the footer
  ...
};
```

Edit `greeting`, `status` and `quickReplies` in the same object to change the wording of the chat card. In dev mode the console warns if the placeholder number is still in place.

## Theme

The site follows the visitor's system setting on first visit. The sun/moon button in the nav overrides it and remembers the choice (`localStorage`, key `dala-theme`).

## Motion

Animations respect `prefers-reduced-motion`. Staggered delays are passed to `<Reveal delay={ms}>`.
