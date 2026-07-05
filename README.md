# Rohan Devadiga — AI/ML Researcher & Backend Engineer Portfolio

A dark-themed personal portfolio for **Rohan Devadiga** — MCA candidate at KLE Technological University, focused on LLMs, RAG, and AI-powered backend systems.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Designed for one-click deployment on **Vercel**.

## Stack

- React 18 / TypeScript
- Vite (build tool)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations + scroll effects)
- Lucide React (icons)
- Kanit font (Google Fonts, weights 300–900)

## Sections

1. **Hero** — name, tagline, video background
2. **About** — bio + skills grouped by Languages / AI & ML / Backend / Data Science / Standards & Tools
3. **Services** — AI/ML Research, Backend Engineering, Multi-Agent Systems, Healthcare AI, Data Science
4. **Projects** — sticky-stacking cards for MedMentor, SwarmForge, GreenSense, Smart Med
5. **Contact** — Email, WhatsApp, LinkedIn, GitHub

## ⚠️ Before you deploy

The project images in `public/` (`medmentor*.svg`, `swarmforge*.svg`, `greensense*.svg`, `smartmed*.svg`) are **placeholders** — colored gradient cards, not real screenshots. Replace them with actual screenshots of each project:

1. Take 3 screenshots per project (hero view, a feature view, a results/dashboard view work well).
2. Drop them into `public/` as `.png` or `.jpg`.
3. Update the `col1Image1`, `col1Image2`, `col2Image` paths in `src/components/ProjectsSection.tsx` to match.
4. Update `liveUrl` for each project to the actual deployed link (currently pointing at your GitHub for projects without a live demo).

Also swap `public/intro.mp4` for a personal intro clip if you have one, or leave the current background video as-is.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # serve /dist locally
```

## Deploy to Vercel

Push to GitHub → import the repo at [vercel.com/new](https://vercel.com/new) → click Deploy. No environment variables needed.

## Project structure

```
src/
├── App.tsx                    # composes all sections
├── main.tsx                   # React entry
├── index.css                  # global styles + .hero-heading gradient
└── components/
    ├── HeroSection.tsx        # navbar, massive heading, video background
    ├── AboutSection.tsx       # bio, animated text, skills grid
    ├── ServicesSection.tsx    # white section, 5 numbered services
    ├── ProjectsSection.tsx    # sticky-stacking project cards
    ├── ContactSection.tsx     # 4 contact methods with icons
    │
    ├── ContactButton.tsx      # gradient pill CTA
    ├── LiveProjectButton.tsx  # ghost outline pill
    ├── FadeIn.tsx             # whileInView animation wrapper
    ├── Magnet.tsx             # mouse-following magnetic hover
    └── AnimatedText.tsx       # char-by-char scroll-driven reveal
```

## Featured projects

| Project | Stack | Link |
|---|---|---|
| MedMentor | FastAPI, Groq (Llama 3.1), FHIR R4, RxNorm API | github.com/Rohanindia |
| SwarmForge | Groq, LLaMA 3.3, Tavily, Next.js, FastAPI | swarm-forge-web.vercel.app |
| GreenSense | Gemini API, Firebase, Firestore, Google Maps | github.com/Rohanindia |
| Smart Med | Spring Boot, JPA, MySQL | github.com/Rohanindia |

## Customisation

| Want to change | Open this file |
|---|---|
| Name, nav links, hero text | `src/components/HeroSection.tsx` |
| About paragraph, skills list | `src/components/AboutSection.tsx` |
| Services list | `src/components/ServicesSection.tsx` (`SERVICES` array) |
| Projects, screenshots, live URLs | `src/components/ProjectsSection.tsx` (`PROJECTS` array) |
| Contact methods | `src/components/ContactSection.tsx` (`CONTACT_METHODS` array) |
| Project screenshots | drop new images in `public/` and reference as `/filename.png` |
| Brand gradient, font, dark colour | `src/index.css` and `tailwind.config.js` |
| Page title, meta description | `index.html` |

## Credits

Designed & built by **Rohan Devadiga** · [LinkedIn](https://www.linkedin.com/in/rohan-devadiga-2b2341337/) · [GitHub](https://github.com/Rohanindia)
