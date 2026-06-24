# Portfolio

Full-stack developer portfolio focused on backend architecture with Node.js, TypeScript, and Golang. Built with Next.js 15, Tailwind CSS v4, and shadcn/ui. Dual-language (EN/ES).

## Desing

The website use a Neon Green and Black color palette, you can change this in the globals.css file

## Tech Stack

| Layer                | Choice                  |
| -------------------- | ----------------------- |
| Framework            | Next.js 15 (App Router) |
| Styling              | Tailwind CSS v4         |
| UI Components        | shadcn/ui + custom      |
| Internationalization | next-intl               |
| Email                | React Email + Resend    |
| Animations           | Framer Motion           |
| Deployment           | Vercel                  |

## Quick Start

```bash
pnpm install
pnpm dev
```

Opens at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command      | Action                  |
| ------------ | ----------------------- |
| `pnpm dev`   | Start dev server        |
| `pnpm build` | Production build        |
| `pnpm start` | Start production server |
| `pnpm lint`  | Run ESLint              |

## Project Structure

```
├── app/[locale]/       # Route segments per locale (en, es)
├── components/         # React components
│   ├── ui/             # shadcn/ui primitives
│   └── icons/          # SVG icon components
├── data/               # Profile data (experience, skills, projects)
├── i18n/               # Routing and locale detection config
├── messages/           # Translation files (en.json, es.json)
├── public/             # Static assets
└── styles/             # Global CSS
```

## Internationalization

The site supports English and Spanish. Locale is detected from the browser or URL prefix (`/en`, `/es`).

- Translation files live in `messages/{locale}.json`
- Components use `useTranslations("namespace")` from next-intl
- The email template is currently server-side only and sends in Spanish

To add a new locale:

1. Create `messages/{locale}.json`
2. Add the locale to `i18n/routing.ts`
3. Add it to the locale switcher in `components/locale-switcher.tsx`

## Contact

- GitHub: [fco-gt](https://github.com/fco-gt)
- LinkedIn: [Francisco Gutierrez](https://linkedin.com/in/fco-gt)
