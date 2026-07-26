# Naman Mathur — Developer Portfolio

A premium, production-quality personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed for a Computer Science / Data Science / AI candidate applying to internships and full-time roles.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool / dev server)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the local URL printed in the terminal (usually http://localhost:5173)
```

Other scripts:

```bash
npm run build      # Production build → dist/
npm run preview    # Preview the production build
npm run typecheck  # TypeScript type checking
npm run lint       # ESLint
```

## Where Portfolio Data Is Stored

All personal content lives in a single, easy-to-edit file:

```
src/data/portfolio.ts
```

This file exports typed objects used across the site:

- `profile` — name, title, headline, subtitle, email, phone, location, social links, resume path, and stat cards
- `skills` — grouped skill categories
- `projects` — project entries (name, description, problem, highlights, tech, category, links)
- `research` — published papers / conference contributions
- `certifications` — certification cards
- `achievements` — awards, competitions, publications
- `education` — academic timeline
- `navLinks` — navbar navigation items

Edit this file to update any text, link, or list on the website — no component changes required.

## Where to Replace the Resume

The resume is served from the `public/` folder. The current file is:

```
public/RESUME_1_(1).pdf
```

To use your own resume:

1. Drop your PDF into `public/` (e.g. `public/resume.pdf`)
2. Update `resumePath` in `src/data/portfolio.ts`:

```ts
resumePath: '/resume.pdf',
```

The "Download Resume" buttons in the navbar, hero, and resume CTA all use this path automatically.

## Where to Replace the Profile Image / Visual

The hero uses an abstract animated visual (rotating rings + glass card with initials) by default — no fake portrait is generated.

To use a real profile photo:

1. Add your image to `public/` (e.g. `public/profile.jpg`)
2. Open `src/components/Hero.tsx` and replace the central glass card block (the `<motion.div>` with the "NM" initials) with an `<img>`:

```tsx
<img src="/profile.jpg" alt="Naman Mathur" className="w-32 h-32 rounded-2xl object-cover" />
```

## How to Add a Project

Open `src/data/portfolio.ts` and add a new entry to the `projects` array:

```ts
{
  id: 10,
  name: 'Your Project Name',
  description: 'One-line description.',
  problem: 'What problem it solves.',
  highlights: ['Key feature 1', 'Key feature 2', 'Key feature 3'],
  tech: ['React', 'Node.js', 'PostgreSQL'],
  category: 'Full-Stack', // one of: 'ML/AI' | 'Full-Stack' | 'Database' | 'Cloud' | 'Analytics'
  date: 'Jan 2026',
  featured: false, // set true to show as a larger featured card
  color: 'from-cyan-500 to-blue-600', // tailwind gradient
  icon: 'Code2', // any lucide-react icon name
  github: 'https://github.com/you/repo', // optional
  demo: 'https://your-demo.com', // optional
}
```

The project filter buttons and project cards update automatically.

## How to Update Certifications

Edit the `certifications` array in `src/data/portfolio.ts`:

```ts
{
  id: 9,
  name: 'Certificate Name',
  issuer: 'Issuing Organization',
  color: 'from-blue-500 to-cyan-500', // gradient
  icon: 'Award', // lucide-react icon
}
```

## How to Connect the Contact Form

The contact form currently has **no email backend** and shows a clear notice instead of faking a successful send. To enable real delivery, pick one:

- **Formspree** — set the form's `action` to your Formspree endpoint in `src/components/Contact.tsx`
- **EmailJS** — call `emailjs.sendForm(serviceID, templateID, formRef, publicKey)` in `handleSubmit`
- **Resend / Supabase Edge Function** — POST the form data to your endpoint and set `status('success')` on a 2xx response

The relevant code is in `src/components/Contact.tsx` → `handleSubmit`.

## Deployment

This is a static Vite app — the `dist/` folder produced by `npm run build` can be hosted anywhere:

- **Vercel / Netlify / Cloudflare Pages** — connect the repo, set build command `npm run build`, output directory `dist`
- **GitHub Pages** — push `dist/` to a `gh-pages` branch or use a CI action
- **Any static host** — upload the contents of `dist/`

## Accessibility & Performance

- Semantic HTML, ARIA labels on interactive elements
- Keyboard-navigable nav, modals, and forms
- `prefers-reduced-motion` respected — animations collapse to instant transitions
- Google Fonts (Inter) preconnected for fast load
- Custom scrollbar and focus states

## License

Personal portfolio for Naman Mathur. Template structure is free to adapt.
