# Nadeem Alam | Data Analyst, Automation Developer & Full-Stack Application Builder

A high-performance personal portfolio, data workbench, and interactive curriculum vitae built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Engineered to demonstrate operational data management, automated reporting workflows, relational schema design, interactive analytics discovery, and full-stack web applications.

---

## ⚡ Verified Architectural Features

1. **Restrained Editorial Visual Design**:
   - Sophisticated dark-neutral palette (`#08090d`, `#0c0e17`) with cyan and indigo accents.
   - Dual-bezel concentric borders with subtle micro-depth and zero neon clutter.
   - Respects `prefers-reduced-motion` across all interactive surfaces.

2. **Interactive Project Discovery & Micro-App Showcases**:
   - **Radiant Hospitals HMS**: Interactive clinical triage OPD, bed occupancy matrix, and pharmacy dispensing simulation.
   - **Kosi Voter Digitalization**: 13-district selector with aggregated polling booth counts and localized electoral MIS metrics.
   - **PrepTake Exam Engine**: Interactive client-side question testing engine with score tracking.
   - **SangathanSearch**: In-memory multi-attribute search and filtering across simulated organizational units.
   - All interactive sample datasets are synthetically generated and clearly labeled.

3. **In-Browser SQL & Data Workbench**:
   - Interactive SQL query runner with syntax-highlighted statements.
   - Live toggling between structured data tables and analytical visual charts.

4. **Multi-Page Architecture Decision Records (ADR)**:
   - Dedicated deep-dive routes for flagship projects (`/projects/[id]`) statically pre-rendered at build time.
   - Transparent rationale, trade-off analysis, current technical limitations, and engineering roadmaps.

5. **Consolidated ATS-Optimized Curriculum Vitae**:
   - Unified tabbed experience covering verified organizational roles, MCA / B.Ed / B.Sc. academic background, and official certifications (STET, CTET, TCS NQT).
   - Dedicated modal with 1-click standard A4 print/export styles (`@media print` hiding headers, dock, and backdrops).

6. **Precision Navigation & Mobile Dock**:
   - Quick command palette (`⌘K` / `Ctrl+K`) for keyboard-driven site discovery.
   - Fixed mobile dock for thumb-friendly navigation on smaller viewports.
   - Lenis inertial momentum scrolling with top laser progress indicator.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router, Turbopack, Cache Components)
- **UI Library**: React 19 (Strict Mode, Zero synchronous state in effects)
- **Styling**: Tailwind CSS v4 & PostCSS
- **Animation**: Framer Motion & Lenis Momentum Scrolling
- **Icons**: Lucide React & Custom Brand SVGs
- **Type Safety**: TypeScript 5 (Strict mode)
- **Linting**: ESLint 9 (0 errors, 0 warnings)

---

## 🚀 Local Development & Verification

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+`

### Installation & Run
```bash
# Clone the repository
git clone https://github.com/nadeemalam178/nadeem-portfolio.git
cd nadeem-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Verification Commands
```bash
# Verify ESLint (0 errors, 0 warnings)
npm run lint

# Verify full Turbopack production build (all 13 routes prerendered)
npm run build
```

---

## 🌐 Deployment Configuration

The repository is pre-configured with multi-platform deployment manifests:

### 1. Vercel (Recommended)
- Manifest: `vercel.json`
- Zero-config deployment. Connect your GitHub repository to Vercel and it will automatically build using `next build`.
- Environment variable (optional): `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`

### 2. Netlify
- Manifest: `netlify.toml`
- Includes configuration for Next.js runtime plugin (`@netlify/plugin-nextjs`).

### 3. GitHub Actions CI
- Workflow: `.github/workflows/ci.yml`
- Automatically executes linting and production build verification on every push and pull request to `main`.

---

## 👤 Verified Professional Information

- **Name**: Nadeem Alam
- **Title**: Data Analyst, Automation Developer & Full-Stack Application Builder
- **Location**: Patna, Bihar, India
- **Education**: Master of Computer Applications (SMU), B.Ed, B.Sc. (Maths Hons)
- **Email**: [alamnadeem178@gmail.com](mailto:alamnadeem178@gmail.com)
- **LinkedIn**: [nadeem-alam-2853b9232](https://www.linkedin.com/in/nadeem-alam-2853b9232)
- **GitHub**: [@nadeemalam178](https://github.com/nadeemalam178)
