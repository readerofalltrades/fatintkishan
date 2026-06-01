# fatintkishan.com
> A Reader of All Trades. Curious by Default. Known to segfault occasionally.

**Live:** https://fatintkishan.pages.dev  
Personal portfolio of Fatin Tazwar Kishan — CSE student at BRAC University. Built to showcase projects, skills, and document the learning journey through a public blog.

---

## Stack
- React 18 + Vite + JavaScript (no TypeScript)
- Vanilla CSS — no framework, no preprocessor
- CSS custom properties for theming and typography scale
- React Router DOM
- Framer Motion — scroll-based fade-in animations
- MDX via `@mdx-js/rollup` — blog posts with frontmatter
- Cloudflare Pages — hosting and deployment
- Lucide React + React Icons — iconography

---

## Structure
```
src/
├── components/   # Navbar, Footer, PageLayout, FadeIn, Figure, SmoothFollowCursor
├── sections/     # Homepage sections (Hero, About, Projects, Skills, BlogTeaser, Contact)
├── pages/        # Route-level pages (About, Projects, Blog, BlogPost, NotFound)
├── posts/        # MDX blog posts
├── data/         # projects.js, allProjects.js, skills.js
├── hooks/        # useTheme.js
└── styles/       # variables.css, stamp.css
public/           # Static assets — images, favicon, resume, SVGs
```

---

## Design
- Gruvbox dark hard as base theme, Gruvbox light for light mode
- Typography: Fraunces (display), Inter (body), Fira Code (mono), Noto Sans Bengali (Bangla)
- Typography scale defined as CSS custom properties — `--text-caption` through `--text-hero`
- Homepage: minimal and information-dense. Inner pages: creative and expressive.
- Islamic geometric jali pattern in hero background — Bengal Sultanate inspired
- Custom two-part lerp cursor — dot and trailing ring, hidden on touch devices
- Notebook margin lines on wide viewports
- Stamp frame component for image presentation

---

## Versions
| Version | Hosted at |
|---|---|
| v0.0 | local archive |
| v1.0 | local archive |
| v2.0 | https://fatintkishan.vercel.app |
| v3.0 (current) | https://fatintkishan.pages.dev |

---

## Note
This is a personal site. The code is public for transparency, not as a template. Please don't reuse the design or content directly.
