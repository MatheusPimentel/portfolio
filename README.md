# Portfolio · Matheus Pimentel

Personal portfolio built with Quasar (Vue 3 + Vite), TailwindCSS, and TypeScript, showcasing projects, skills, and a contact form powered by EmailJS.

## Highlights
- Responsive layout with header nav + mobile drawer, hero CTAs (CV / GitHub), featured projects with colored tech badges and optional image background colors, and skills grouped by category.
- Dark mode enabled by default, with a theme toggle and i18n switch (pt-BR / en-US).
- Contact form via EmailJS plus social links colored per brand.

## Stack
- Vue 3, TypeScript, Quasar 2, TailwindCSS 3, Vue Router, Pinia, Vue I18n.
- Tooling: Vite (via @quasar/app-vite), ESLint + Prettier, EmailJS browser SDK.

## Prerequisites
- Node as per `package.json` engines (>=20 recommended).
- pnpm >= 10 (recommended). npm/yarn also work if you prefer.

## Setup
```bash
pnpm install
```

## Run (dev)
```bash
pnpm dev
```

## Lint
```bash
pnpm lint
```

## Format
```bash
pnpm format
```

## Build
```bash
pnpm build
```

## Environment
Create a `.env` in the project root:
```
VITE_EMAILJS_SERVICE_ID=service_am90nq1
VITE_EMAILJS_TEMPLATE_ID=template_5yna38m
VITE_EMAILJS_PUBLIC_KEY=K2aswJNTe4bck9OcC
```
Your EmailJS template should include variables: `{{name}}`, `{{time}}`, `{{message}}`.

## Project Map
- `src/layouts/MainLayout.vue`: layout shell, header/drawer nav, theme + locale toggles, footer.
- `src/components/HeroSection.vue`: intro text and CTA buttons.
- `src/components/AboutSection.vue`, `SkillsSection.vue`, `ProjectsSection.vue`, `ContactSection.vue`: main sections, including EmailJS submit logic and social links.
- `src/i18n/en-US`, `src/i18n/pt-BR`: translations, including tech/social colors.

## Customization Tips
- Update hero CTA links (CV/GitHub), project links, and social URLs to your own profiles.
- Adjust featured project tech badges or colors via the i18n project items.
- Tailor copy in `src/i18n` to your voice.
