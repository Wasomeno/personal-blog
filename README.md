# persona-blog

A personal blog built with Astro and Tailwind CSS, inspired by pyk.sh.

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (body), JetBrains Mono (code)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro   # Main layout with sidebar
├── pages/
│   ├── index.astro         # Home page
│   ├── blog/
│   │   └── index.astro    # Blog listing
│   └── projects/
│       └── index.astro     # Projects listing
└── styles/
    └── global.css          # Tailwind imports
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
