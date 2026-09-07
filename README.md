# Pangasinan Heritage Digital Showcase

**Student Name:** Luis Paolo Hong  
**Selected Framework:** React with Next.js 14 (App Router)

## About

A mobile-first, accessible, and high-performing digital platform promoting cultural awareness and tourism for Pangasinan's most iconic heritage sites, including Alaminos' Hundred Islands, Bolinao's Lighthouse, and Balungao's Hot Spring.

## Live Website

[GitHub Pages URL](https://yourusername.github.io/pangasinan-heritage-showcase/)

> Replace the link above with your actual GitHub Pages URL after deployment.

## Tech Stack

- **Framework:** React 18 + Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Architecture:** Atomic Design (Brad Frost)
- **Deployment:** GitHub Pages (Static Export)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

Static files are exported to the `out/` directory.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── sites/              # Heritage Sites listing
│   │   └── [id]/           # Individual site detail pages
│   ├── about/              # About page
│   └── contact/            # Contact page
├── components/
│   ├── atoms/              # Button, Typography, Icon, Image, Animations
│   ├── molecules/          # HeritageCard, SearchForm, NavigationItem
│   └── organisms/          # HeritageGrid, HeaderNavigation, HeroSection
├── data/                   # Heritage site content data
└── lib/                    # Design tokens
```

## Accessibility

Designed to meet WCAG 2.1 AA standards with semantic HTML, ARIA attributes, keyboard navigation, and color contrast compliance.
