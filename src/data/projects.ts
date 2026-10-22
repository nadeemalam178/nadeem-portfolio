export type ProjectCategory = "Full-Stack" | "Data & Analytics" | "Automation" | "Mobile";
export type ProjectStatus = "Active Development" | "Functional Application" | "Data Platform" | "Utility / Tool";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  tags: string[];
  summary: string;
  roleAndContribution: string;
  repoUrl?: string;
  demoUrl?: string;
  verifiedFeatures: string[];
  // Deep Case Study Information
  problem: string;
  solution: string;
  architectureDecisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  technicalSpecifications: {
    label: string;
    value: string;
    detail: string;
  }[];
  currentLimitations: string[];
  nextSteps: string[];
}

export const projects: Project[] = [
  {
    id: "radiant-hms",
    title: "Radiant Hospitals HMS",
    tagline: "Modular Hospital Management System Architecture with Clinical & Administrative Workflows",
    category: "Full-Stack",
    status: "Active Development",
    featured: true,
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    summary:
      "A modular Hospital Management System engineered to demonstrate structured clinical triage, bed allocation, pharmacy dispensing, and billing reconciliation workflows with type-safe schemas.",
    roleAndContribution:
      "Sole architect and developer. Designed the relational database entity relationships, structured the Next.js App Router layout hierarchy, implemented TypeScript interfaces for clinical workflows, and created responsive interface views.",
    repoUrl: "https://github.com/nadeemalam178/radiant-hospitals-hms",
    demoUrl: "https://github.com/nadeemalam178/radiant-hospitals-hms",
    verifiedFeatures: [
      "Modular OPD patient triage consultation queue with queue state transitions.",
      "Hospital bed occupancy tracking with ICU and general ward status categorization.",
      "Structured pharmacy inventory catalog with automated dispensing itemization.",
      "Comprehensive TypeScript interfaces guaranteeing type safety across patient records.",
    ],
    problem:
      "Small and medium healthcare centers frequently operate on fragmented paper registers and unconnected spreadsheets, leading to queue misplacement during peak OPD hours and inventory reconciliation delays.",
    solution:
      "Designed a unified web platform that models the lifecycle of a patient visit: initial registration -> OPD doctor queue -> prescription -> pharmacy fulfillment -> invoice generation, backed by a normalized schema.",
    architectureDecisions: [
      {
        decision: "Relational Schema Model with PostgreSQL",
        rationale: "Patient records, bed assignments, and billing transactions require ACID compliance and foreign key integrity to prevent orphaned medical entries.",
        tradeoff: "Requires upfront schema migrations compared to flexible NoSQL documents.",
      },
      {
        decision: "Next.js Server Components with Client Interactivity",
        rationale: "Keeps initial HTML bundle lean for low-bandwidth hospital terminal machines while keeping interactive triage state client-side.",
        tradeoff: "Requires clear separation of server-only and client-interactive component boundaries.",
      },
    ],
    technicalSpecifications: [
      { label: "Core Modules", value: "5 Hubs", detail: "OPD, IPD Beds, Pharmacy, Diagnostics, Invoicing" },
      { label: "Type Safety", value: "Strict TS", detail: "End-to-end interface coverage for all clinical data contracts" },
      { label: "Design System", value: "Tailwind CSS", detail: "High-contrast clinical views optimized for fast scanning" },
    ],
    currentLimitations: [
      "Payment gateway integration is currently mock-based and pending production merchant verification.",
      "HL7 / FHIR protocol interoperability is not yet implemented.",
    ],
    nextSteps: [
      "Implement role-based authorization guards (Receptionist, Doctor, Pharmacist, Administrator).",
      "Connect live PostgreSQL test instance with seeded synthetic hospital data.",
    ],
  },
  {
    id: "kosi-voter-digitalize",
    title: "Kosi Region Voter Digitalization & Analytics",
    tagline: "Multi-District Graduate Constituency Dataset Directory & Analytics Dashboard",
    category: "Data & Analytics",
    status: "Data Platform",
    featured: true,
    tags: ["HTML5", "JavaScript", "Looker Studio", "Data Cleaning", "Analytics"],
    summary:
      "A structured regional data project organizing graduate constituency voter directories across 13 administrative districts, featuring automated data hygiene scripts and interactive analytical dashboards.",
    roleAndContribution:
      "Lead data analyst. Formulated data standardisation rules, consolidated disparate district rosters, created relational cross-tabulations, and designed executive dashboards for operational coordinators.",
    repoUrl: "https://github.com/nadeemalam178/kosi-voter-digitalize",
    demoUrl: "https://github.com/nadeemalam178/kosi-voter-digitalize",
    verifiedFeatures: [
      "Hierarchical district-to-block-to-booth directory taxonomy across 13 regional districts.",
      "Data sanitation routines to identify duplicate entries, missing contact fields, and misspellings.",
      "Interactive analytics dashboard visualizing district-level registration status.",
      "Exportable tabular summaries configured for field coordination teams.",
    ],
    problem:
      "Graduate voter registration records across 13 districts in the Kosi region arrived in inconsistent spreadsheet structures, making it difficult for regional coordinators to assess verification coverage and territory progress.",
    solution:
      "Created a standardized data ingestion protocol that cleans raw spreadsheet files, normalizes district and assembly names, and generates pre-aggregated analytical feeds for Looker Studio and web dashboards.",
    architectureDecisions: [
      {
        decision: "Pre-Aggregated JSON Feeds for Web Views",
        rationale: "Pre-aggregating district summaries avoids transferring massive raw tabular datasets to client browsers in low-connectivity areas.",
        tradeoff: "Requires re-running the aggregation script whenever underlying spreadsheet rows are updated.",
      },
      {
        decision: "Standardized Master Dictionary for Administrative Territories",
        rationale: "Eliminated transcription discrepancies between varying spellings of regional blocks and urban wards.",
        tradeoff: "Required manual curation of the initial territorial lookup dictionary.",
      },
    ],
    technicalSpecifications: [
      { label: "Coverage Scope", value: "13 Districts", detail: "Complete Kosi region graduate constituency coverage" },
      { label: "Hierarchy Depth", value: "3 Levels", detail: "District -> Block / Assembly Segment -> Polling Station" },
      { label: "Reporting Format", value: "Dual Feed", detail: "Looker Studio executive briefs + lightweight client HTML" },
    ],
    currentLimitations: [
      "Dashboard relies on periodic batch updates rather than sub-minute live data streaming.",
    ],
    nextSteps: [
      "Automate Google Drive webhook triggers to re-run compilation scripts upon new file upload.",
      "Add demographic trend visualization comparing enrollment across electoral cycles.",
    ],
  },
  {
    id: "preptake",
    title: "PrepTake Exam Preparation App",
    tagline: "Mobile-First Teacher Eligibility Exam Preparation Application",
    category: "Full-Stack",
    status: "Functional Application",
    featured: true,
    tags: ["Python", "Flask", "Tailwind CSS", "Mobile-First", "EdTech"],
    summary:
      "A lightweight web application designed for teacher eligibility test candidates (CTET, Bihar STET, BPSC TRE) providing timed practice tests, question categorization, and immediate score breakdowns.",
    roleAndContribution:
      "Sole developer and subject-matter researcher. Leveraged my B.Ed academic background to curate pedagogical questions, built the Flask backend routing, and engineered a mobile-first interface optimized for rural internet bandwidth.",
    repoUrl: "https://github.com/nadeemalam178/preptake",
    demoUrl: "https://github.com/nadeemalam178/preptake",
    verifiedFeatures: [
      "Pedagogical and mathematical subject tracks tailored to CTET Paper 2 and Bihar STET curricula.",
      "Client-side quiz state persistence to prevent progress loss during mobile network drops.",
      "Immediate question-by-question explanatory answer feedback.",
      "Lightweight asset bundle loading smoothly on mobile browser viewports.",
    ],
    problem:
      "Rural teacher candidates frequently face ad-saturated exam websites that crash on 3G/4G connections and lose in-progress test attempts when coverage fluctuates.",
    solution:
      "Engineered an ad-free, minimal-weight web application using Python/Flask and Tailwind CSS that caches mock exam questions locally and batches answers cleanly.",
    architectureDecisions: [
      {
        decision: "Lightweight Microframework (Flask)",
        rationale: "Avoids heavy monolithic dependencies and runs with high responsiveness on low-cost server environments.",
        tradeoff: "Requires custom handling for features that full frameworks provide out of the box.",
      },
      {
        decision: "Local Storage Fallback for Test Answers",
        rationale: "Guarantees candidates do not lose exam progress if their connection momentarily drops during a timed mock test.",
        tradeoff: "Requires synchronization checks before finalizing the final submission payload.",
      },
    ],
    technicalSpecifications: [
      { label: "Target Exams", value: "3 Key Tracks", detail: "CTET Paper 2, Bihar STET, BPSC TRE" },
      { label: "Architecture", value: "Flask + HTML5", detail: "Lightweight server-rendered routes with client state" },
      { label: "Bundle Weight", value: "<180 KB", detail: "Minimal initial payload for fast mobile load" },
    ],
    currentLimitations: [
      "Currently supports multiple-choice format only; subjective response evaluation is not supported.",
    ],
    nextSteps: [
      "Add candidate performance analytics tracking historical score improvements over time.",
      "Implement offline PWA service worker caching for complete offline mock completion.",
    ],
  },
  {
    id: "local-land-cordyline",
    title: "Local Land by CORDYLINE",
    tagline: "A buyer-facing Android app and administration dashboard for real-estate workflows",
    category: "Full-Stack",
    status: "Functional Application",
    featured: true,
    tags: ["React Native", "Next.js", "Supabase", "Google Maps"],
    summary:
      "A real-estate product pairing a native Android app for land buyers with a Next.js admin dashboard, powered by a shared Supabase backend.",
    roleAndContribution:
      "Built the Android application and Next.js administration panel for CORDYLINE, and configured the shared Supabase backend.",
    demoUrl: "https://local-land-by-cordyline.vercel.app",
    verifiedFeatures: [
      "Android app with account sign-in and session restoration.",
      "Property discovery with search, filters, and interactive maps.",
      "Buyer interest and saved-property workflows.",
      "Admin dashboard for property, user, and enquiry management.",
      "Shared Supabase backend with database policies and media storage.",
    ],
    problem:
      "The product needed to serve land buyers on Android while giving administrators a separate place to manage properties and buyer activity.",
    solution:
      "Delivered a buyer-facing Android app and a Next.js administration dashboard connected to a shared Supabase backend.",
    architectureDecisions: [
      {
        decision: "Separate buyer and administration experiences",
        rationale: "The mobile app focuses on property discovery, while the dashboard provides the documented administration workflows.",
        tradeoff: "Two frontends require their data contracts and access rules to stay aligned.",
      },
      {
        decision: "Supabase as the shared backend",
        rationale: "The mobile app and dashboard use one backend for shared application data and account sessions.",
        tradeoff: "Client and server access must follow the same database security policies.",
      },
    ],
    technicalSpecifications: [
      { label: "Buyer app", value: "Android", detail: "React Native with Expo" },
      { label: "Admin dashboard", value: "Next.js", detail: "Property, user, and enquiry workflows" },
      { label: "Backend", value: "Supabase", detail: "Shared cloud database and media storage" },
    ],
    currentLimitations: [],
    nextSteps: [],
  },
  {
    id: "sangathan-search",
    title: "SangathanSearch Directory",
    tagline: "In-Memory Client-Side Contact & Hierarchy Lookup Engine",
    category: "Full-Stack",
    status: "Utility / Tool",
    featured: false,
    tags: ["JavaScript", "In-Memory Search", "Data Indexing", "Web Tool"],
    summary:
      "A specialized in-memory lookup utility developed for organizational field personnel to query thousands of member contacts and administrative assignments instantaneously.",
    roleAndContribution:
      "Developer. Structured the pre-indexed data array, wrote the substring matching logic, and designed a responsive contact card layout with direct communication triggers.",
    repoUrl: "https://github.com/nadeemalam178/SangathanSearch",
    demoUrl: "https://github.com/nadeemalam178/SangathanSearch",
    verifiedFeatures: [
      "Instantaneous in-memory filtering by name, district, or organizational designation.",
      "Tolerant substring matching accommodating spelling variations.",
      "One-tap call and clipboard copying actions for field coordinators.",
      "Zero server roundtrips required after initial asset load.",
    ],
    problem:
      "Field teams coordinating across districts frequently needed to look up territory in-charges while traveling, where slow network connectivity made remote API search queries impractical.",
    solution:
      "Built a client-side search utility that bundles a compressed JSON roster into browser memory upon initial visit, enabling immediate local filtering without active internet.",
    architectureDecisions: [
      {
        decision: "Client-Side In-Memory Inverted Index",
        rationale: "Provides sub-20ms search latency regardless of cellular network quality in remote areas.",
        tradeoff: "Dataset must remain under a few megabytes to prevent browser memory pressure.",
      },
    ],
    technicalSpecifications: [
      { label: "Search Mechanism", value: "Client-Side", detail: "Fast array filtering with normalized substring matches" },
      { label: "Dependency", value: "Zero Libs", detail: "Built with vanilla JavaScript DOM APIs" },
    ],
    currentLimitations: [
      "Roster data is statically compiled; updating members requires regenerating the source JSON.",
    ],
    nextSteps: [
      "Implement IndexedDB storage to support rosters with tens of thousands of members.",
    ],
  },
  {
    id: "booth-website",
    title: "Booth Visualizer & OCR Extractor",
    tagline: "Electoral Polling Station Visualizer & Scanned PDF Data Extraction Pipeline",
    category: "Automation",
    status: "Utility / Tool",
    featured: false,
    tags: ["Python", "OCR", "OpenCV", "Data Extraction", "SQL"],
    summary:
      "A data processing and visualizer project developed for Bankipur assembly constituency, utilizing Python OCR to convert scanned PDF electoral rolls into structured tabular datasets.",
    roleAndContribution:
      "Pipeline developer. Implemented image pre-processing scripts with OpenCV (binarization, deskewing), configured Tesseract OCR routines, and built web visualization tables.",
    repoUrl: "https://github.com/nadeemalam178/Booth-Website",
    demoUrl: "https://github.com/nadeemalam178/Booth-Website",
    verifiedFeatures: [
      "Automated image thresholding and noise removal on scanned paper documents.",
      "Extraction of polling station names, booth numbers, and voter counts into structured CSV/SQL formats.",
      "Web interface displaying booth-wise distributions for constituency coordinators.",
    ],
    problem:
      "Official polling station assignments were released exclusively as scanned physical PDF sheets with scanner artifacts and uneven lighting, preventing automated search or mapping.",
    solution:
      "Constructed a multi-step image processing pipeline in Python that cleans scanned sheets, segments text bounding boxes, and parses numbers and names into relational tables.",
    architectureDecisions: [
      {
        decision: "Pre-OCR Morphological Filtering with OpenCV",
        rationale: "Removes scanner skew and dot-matrix paper noise prior to OCR, significantly improving text recognition fidelity.",
        tradeoff: "Adds processing latency per PDF page compared to raw OCR.",
      },
    ],
    technicalSpecifications: [
      { label: "Pipeline Stack", value: "Python + OpenCV", detail: "Tesseract OCR engine with custom preprocessing" },
      { label: "Output Schema", value: "Relational SQL", detail: "Normalized tables ready for database insertion" },
    ],
    currentLimitations: [
      "Extremely degraded or handwritten photocopies still require human-in-the-loop review.",
    ],
    nextSteps: [
      "Train a fine-tuned layout parser model for mixed Hindi and English tabular rosters.",
    ],
  },
  {
    id: "al-qalam-app",
    title: "Al-Qalam Public School App & Portal",
    tagline: "A school web portal and cross-platform app with one cloud-backed foundation",
    category: "Full-Stack",
    status: "Functional Application",
    featured: true,
    tags: ["Next.js", "Flutter", "Supabase", "Education"],
    summary:
      "A school web portal and Flutter app for students, parents, teachers, and administrators, backed by a shared Supabase database.",
    roleAndContribution:
      "Built the school web portal and cross-platform mobile app, and connected the product to its shared Supabase database.",
    verifiedFeatures: [
      "Next.js school portal with academics, admissions, notices, gallery, and contact pages.",
      "Flutter mobile app for Android and iOS with admin, teacher, and parent dashboards.",
      "Shared cloud database with 21 core relational tables, row-level security, and triggers.",
    ],
    problem:
      "Small private schools often rely on unorganized WhatsApp groups for circulars and notices, causing parents to miss critical academic dates and fee announcements.",
    solution:
      "Built a web portal and role-based mobile app around one cloud database, giving families and school staff dedicated access to school information and workflows.",
    architectureDecisions: [
      {
        decision: "Separate web and mobile frontends over one backend",
        rationale: "The project pairs a Next.js portal with a Flutter app while sharing Supabase data and security policies.",
        tradeoff: "The experience and data rules need to remain consistent across both clients.",
      },
    ],
    technicalSpecifications: [
      { label: "Web portal", value: "Next.js 16", detail: "React application for school information and communication" },
      { label: "Mobile app", value: "Flutter", detail: "Android and iOS with role-specific dashboards" },
      { label: "Backend", value: "Supabase", detail: "PostgreSQL database with row-level security" },
    ],
    currentLimitations: [
      "Push notification integration requires Firebase configuration in production deployment.",
    ],
    nextSteps: [
      "Connect cloud database backend for real-time notification broadcasting.",
    ],
  },
];
