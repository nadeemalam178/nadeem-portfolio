# Nadeem Alam — Developer & Data Analyst Portfolio

A modern, fluid, production-grade portfolio website built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Engineered to showcase enterprise full-stack systems, constituency-level data analytics, operational automation, and a print-ready interactive Curriculum Vitae.

![Portfolio Preview](public/favicon.ico)

---

## ✨ Features

- **Fluid Ambient Canvas**: Interactive mouse-following liquid gradients and glassmorphism cards.
- **Context-Aware Bento Grid**:
  - Flagship system spotlight (**Radiant Hospitals HMS**)
  - Dynamic query & automation workbench (Interactive SQL & Google Apps Script tabs)
  - Live geographic card (Patna, Bihar, IST live clock)
  - Data analytics in production (**Kosi Region Voter Digitalization**)
  - Interactive Tech Stack tags
- **Curated Projects Showcase**:
  - Filterable by: `All`, `Full-Stack`, `Data & Analytics`, `Automation`, `Mobile`
  - Real-time instant search by tech, title, or keyword
  - Deep-dive case study modal with architecture breakdowns and direct GitHub repository links
- **Integrated Curriculum Vitae & Print Engine**:
  - Formal A4-formatted ATS resume view
  - 1-Click **"Print / Save as PDF"** feature optimized for standard A4 paper dimensions
  - Direct 1-click email and phone clipboard copy
- **Interactive Micro-Interactions**:
  - Confetti particle triggers on CTA clicks
  - Live availability badge with smooth pulsing indicators
  - Mobile-responsive navigation drawer

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Language**: TypeScript (Strict typing)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v20+` or `v24+`
- npm `v10+` or `v11+`

### Installation & Development

```bash
# Navigate to the portfolio folder
cd portfolio

# Install dependencies (already installed)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 🌐 Deploy to GitHub Pages or Vercel

### Deploy to Vercel (Recommended — 1-Click)
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/nadeemalam178/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository. Vercel automatically detects Next.js and deploys it with sub-second speeds.

### Deploy to GitHub Pages
To export static HTML for GitHub Pages:
1. Add `output: 'export'` to `next.config.ts`.
2. Run `npm run build`. The static files will be generated in `out/`.
3. Deploy to the `gh-pages` branch.

---

## 👤 Author

**Nadeem Alam**  
- **Email**: [alamnadeem178@gmail.com](mailto:alamnadeem178@gmail.com)  
- **LinkedIn**: [nadeem-alam-2853b9232](https://www.linkedin.com/in/nadeem-alam-2853b9232)  
- **GitHub**: [@nadeemalam178](https://github.com/nadeemalam178)  
- **Location**: Patna, Bihar, India
