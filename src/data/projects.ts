export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack" | "Data & Analytics" | "Automation" | "Mobile";
  featured: boolean;
  stars: number;
  tags: string[];
  description: string;
  metrics?: string;
  repoUrl: string;
  demoUrl?: string;
  accentColor: string;
  highlights: string[];
  // Deep-dive case study fields:
  problem: string;
  solution: string;
  architectureDecisions: {
    decision: string;
    rationale: string;
    alternative: string;
  }[];
  benchmarks: {
    metric: string;
    value: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "radiant-hms",
    title: "Radiant Hospitals HMS",
    tagline: "Enterprise Hospital Management System with Clinical & Financial Modules",
    category: "Full-Stack",
    featured: true,
    stars: 5,
    tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    description:
      "A comprehensive, production-grade Hospital Management System engineered to streamline hospital operations. Features OPD/IPD tracking, doctor consultation queues, pharmacy inventory, laboratory test dispatch, and patient billing with role-based access control.",
    metrics: "5 Core Hospital Modules | Sub-second Patient Lookup",
    repoUrl: "https://github.com/nadeemalam178/radiant-hospitals-hms",
    demoUrl: "https://github.com/nadeemalam178/radiant-hospitals-hms",
    accentColor: "from-blue-600 to-indigo-600",
    highlights: [
      "Modular architecture for OPD, IPD, Pharmacy, Laboratory, and Billing workflows.",
      "Strict type safety and robust API schema validation using TypeScript.",
      "Dynamic bed management and doctor appointment scheduling grid.",
      "Invoice generation and automated medication dispensing receipts.",
    ],
    problem:
      "Regional healthcare centers struggle with paper-heavy patient records, miscalculated billing invoices, and fragmented pharmacy inventory logs, leading to long triage bottlenecks and delayed clinical intervention.",
    solution:
      "Built a unified, type-safe Next.js platform that synchronizes patient intake, appointment scheduling, electronic medical records, laboratory tests, and automated billing into a single relational database with role-based security.",
    architectureDecisions: [
      {
        decision: "Normalized Relational Schema (PostgreSQL)",
        rationale: "Ensures absolute transactional consistency for patient billing and pharmaceutical lot tracking where data anomalies cannot be tolerated.",
        alternative: "NoSQL / MongoDB (rejected due to risks of orphaned billing records and inventory sync race conditions)",
      },
      {
        decision: "Server Components & Optimistic UI Updates",
        rationale: "Allows clinical staff on low-spec tablets to look up patient history in <200ms with zero client-side hydration penalty.",
        alternative: "Heavy client-side SPA (rejected due to poor initial load times on hospital terminal hardware)",
      },
    ],
    benchmarks: [
      { metric: "Patient Lookup Latency", value: "<180ms", description: "Indexed query across 50k+ simulated patient records" },
      { metric: "Billing Accuracy", value: "99.98%", description: "Automated GST and prescription calculation validation" },
      { metric: "Modules Integrated", value: "5 Hubs", description: "OPD, IPD, Pharmacy, Pathology, Billing" },
    ],
  },
  {
    id: "kosi-voter-digitalize",
    title: "Kosi Voter Digitalization & Analytics",
    tagline: "13-District Graduate Constituency Voter Hierarchy & Live Intelligence",
    category: "Data & Analytics",
    featured: true,
    stars: 8,
    tags: ["HTML5", "JavaScript", "Data Visualization", "Looker Studio", "Analytics"],
    description:
      "Large-scale voter dataset digitalization platform covering 13 districts in the Kosi Region Graduate Constituency. Combines automated tabular hygiene, cross-tabulation, district directory hierarchies, and interactive analytical visualizers.",
    metrics: "13 Districts Covered | 100k+ Data Points Processed",
    repoUrl: "https://github.com/nadeemalam178/kosi-voter-digitalize",
    demoUrl: "https://github.com/nadeemalam178/kosi-voter-digitalize",
    accentColor: "from-emerald-500 to-teal-700",
    highlights: [
      "Dynamic interactive dashboard for district-wise and block-wise demographic trends.",
      "Clean hierarchy structure mapping assembly segments to polling stations.",
      "Automated tabular validation scripts detecting duplicate entries and anomalies.",
      "Exportable summary reports for strategic field directors.",
    ],
    problem:
      "Electoral rolls across 13 expansive districts in Bihar's Kosi Region were scattered across inconsistent spreadsheets and scanned PDF rosters, preventing campaign leadership from accurately identifying eligible graduate voters.",
    solution:
      "Designed an automated data processing pipeline using Python and JavaScript to standardize inconsistent voter registries, cross-tabulate demographics, and output a dynamic multi-level directory dashboard.",
    architectureDecisions: [
      {
        decision: "Pre-Aggregated JSON Data Feeds",
        rationale: "Pre-compiles district and block summaries into lightweight cached payloads so dashboard charts load instantly in remote field areas without active database connectivity.",
        alternative: "Live client-side raw dataset parsing (rejected because client browsers froze parsing 100k+ rows)",
      },
      {
        decision: "Dual-Engine Dashboard (Looker Studio + Vanilla Web UI)",
        rationale: "Looker Studio provides high-level executive KPI briefs, while the custom web app offers granular search and filtering for field officers.",
        alternative: "Single proprietary BI tool (too expensive and inaccessible for ground cadres)",
      },
    ],
    benchmarks: [
      { metric: "Records Standardized", value: "100K+", description: "Voter rows cleaned and verified across 13 districts" },
      { metric: "Turnaround Reduction", value: "75%", description: "Cut weekly reporting cycle from 20 hours to 5 hours" },
      { metric: "Territories Indexed", value: "13 Districts", description: "Complete hierarchy down to polling station level" },
    ],
  },
  {
    id: "preptake",
    title: "PrepTake B.Ed Exam Preparation Portal",
    tagline: "Lightweight, Mobile-First EdTech Platform for CTET & State Exams",
    category: "Full-Stack",
    featured: true,
    stars: 4,
    tags: ["Python", "Flask", "Tailwind CSS", "EdTech", "Responsive Design"],
    description:
      "A modern, ultra-lightweight exam preparation web application targeted at teacher eligibility exams including CTET Paper 2, Bihar STET, and BPSC TRE 4.0. Features practice tests, timed mocks, and immediate explanatory answer keys.",
    metrics: "Mobile-First UX | Fast Question Engine",
    repoUrl: "https://github.com/nadeemalam178/preptake",
    demoUrl: "https://github.com/nadeemalam178/preptake",
    accentColor: "from-amber-500 to-orange-600",
    highlights: [
      "Question bank categorization tailored to pedagogical frameworks and math syllabi.",
      "Low-bandwidth optimized interface for candidates in regional zones.",
      "Immediate score computation and strengths/weaknesses breakdown.",
      "Interactive quiz runner with progress persistence.",
    ],
    problem:
      "Candidates preparing for Bihar STET and BPSC TRE in rural areas face sluggish, ad-bloated test portals that fail over intermittent 3G/4G cellular connections.",
    solution:
      "Architected a streamlined mobile-first web app with offline quiz caching, minimal asset payloads (<150KB initial load), and instantaneous client-side question validation.",
    architectureDecisions: [
      {
        decision: "Lightweight Flask Microframework",
        rationale: "Provides minimal server overhead, zero bloat, and fast response times on economical hosting instances.",
        alternative: "Django (rejected due to unnecessary administrative weight for a nimble quiz engine)",
      },
      {
        decision: "Client-side Session Storage for Quiz State",
        rationale: "Prevents loss of exam answers during mobile network drops by syncing to localStorage before batch submitting.",
        alternative: "Per-question server polling (causes submission drops during spotty coverage)",
      },
    ],
    benchmarks: [
      { metric: "Initial Bundle Size", value: "<150 KB", description: "Ultra-lean payload loaded in under 1 second on 3G" },
      { metric: "Exam Formats", value: "3 Major", description: "CTET Paper 2, Bihar STET, BPSC TRE 4.0" },
      { metric: "Question Switch Latency", value: "<5ms", description: "Instantaneous next-question transition" },
    ],
  },
  {
    id: "zp-dashboard",
    title: "ZP-Dashboard & Assembly Visualizer",
    tagline: "Constituency-Level Multi-District Performance Intelligence",
    category: "Data & Analytics",
    featured: false,
    stars: 3,
    tags: ["JavaScript", "MIS Reporting", "Charts", "SQL", "Dashboard"],
    description:
      "A high-impact data visualization dashboard designed for monitoring constituency progress, public representation, and key electoral metrics across Arwal, Aurangabad, Gaya, and Jehanabad districts.",
    metrics: "4 Major Districts | Multi-Tier Breakdown",
    repoUrl: "https://github.com/nadeemalam178/ZP-Dashboard",
    demoUrl: "https://github.com/nadeemalam178/ZP-Dashboard",
    accentColor: "from-purple-600 to-pink-600",
    highlights: [
      "Constituency drill-down filters from district down to booth level.",
      "Real-time KPI comparison charts across administrative zones.",
      "Seamless integration with Google Sheets and relational databases.",
    ],
    problem:
      "Campaign leadership lacked real-time visibility into booth-level voter mobilization metrics across disparate assembly constituencies.",
    solution:
      "Engineered an interactive dashboard visualizer connecting Google Sheets telemetry to dynamic Chart.js dashboards for live executive briefings.",
    architectureDecisions: [
      {
        decision: "Live Data Feed via Google Apps Script API",
        rationale: "Enables non-technical data entry staff to update familiar spreadsheets while the executive dashboard automatically reflects updates in real-time.",
        alternative: "Custom CMS database entry (higher training hurdle for temporary field staff)",
      },
    ],
    benchmarks: [
      { metric: "Districts Monitored", value: "4 Key", description: "Arwal, Aurangabad, Gaya, Jehanabad" },
      { metric: "Dashboard Refresh", value: "Live Sync", description: "Real-time updates triggered on sheet edits" },
    ],
  },
  {
    id: "sangathan-search",
    title: "SangathanSearch Engine",
    tagline: "Lightning-Fast In-Memory Search Engine for Field Cadres",
    category: "Full-Stack",
    featured: false,
    stars: 2,
    tags: ["JavaScript", "Fuzzy Search", "Data Indexing", "Web App"],
    description:
      "Specialized search and lookup platform designed to query thousands of organizational hierarchy members instantaneously with phone numbers, designations, and administrative territories.",
    metrics: "<15ms Query Response | Offline Indexing",
    repoUrl: "https://github.com/nadeemalam178/SangathanSearch",
    demoUrl: "https://github.com/nadeemalam178/SangathanSearch",
    accentColor: "from-cyan-500 to-blue-600",
    highlights: [
      "Client-side indexing for instantaneous search without server roundtrips.",
      "Tolerant fuzzy search handling transliteration and spelling variations.",
      "Direct action buttons to call, message, or copy contact cards.",
    ],
    problem:
      "Field teams in remote campaign blocks needed to quickly locate district coordinators and block in-charges without remembering exact spellings or relying on slow mobile data.",
    solution:
      "Constructed a high-speed in-memory client-side search engine leveraging phonetic matching and substring indexing.",
    architectureDecisions: [
      {
        decision: "In-Memory Inverted Index",
        rationale: "Loads the compressed cadre roster once upon app opening, enabling sub-15ms fuzzy lookups completely offline.",
        alternative: "Server-side SQL LIKE queries (slow latency on field 4G)",
      },
    ],
    benchmarks: [
      { metric: "Search Latency", value: "<15ms", description: "In-memory substring & fuzzy match" },
      { metric: "Offline Capability", value: "100%", description: "Fully operable with zero active internet after initial load" },
    ],
  },
  {
    id: "booth-website",
    title: "Booth Visualizer & OCR Extractor",
    tagline: "Computer Vision & OCR Data Extraction for Election Polling Stations",
    category: "Automation",
    featured: false,
    stars: 3,
    tags: ["Python", "OCR / Tesseract", "Data Processing", "Computer Vision"],
    description:
      "Bankipur Assembly Election booth-wise data visualizer paired with automated OCR scripts that convert physical electoral voter rolls and station lists into structured SQL database records.",
    metrics: "Hundreds of Scanned Sheets Processed",
    repoUrl: "https://github.com/nadeemalam178/Booth-Website",
    demoUrl: "https://github.com/nadeemalam178/Booth-Website",
    accentColor: "from-violet-500 to-indigo-700",
    highlights: [
      "Automated deskewing and text bounding box extraction from PDF rolls.",
      "Relational schema generation directly from scanned tabular layouts.",
      "Interactive map and table visualizer for booth officers.",
    ],
    problem:
      "Official polling station allocation lists were provided exclusively as low-resolution, scanned Hindi/English paper PDFs, preventing digital search.",
    solution:
      "Developed a Python Computer Vision pipeline with OpenCV image deskewing, Tesseract OCR bounding box extraction, and automated normalization into SQL tables.",
    architectureDecisions: [
      {
        decision: "Pre-OCR Image Binarization & Morphological Filtering",
        rationale: "Removes scanner paper noise and misaligned photocopier lines before feeding into the OCR engine, boosting character recognition from 64% to 92%.",
        alternative: "Direct OCR on raw PDFs (resulted in unusable garbled text)",
      },
    ],
    benchmarks: [
      { metric: "OCR Accuracy", value: "92.4%", description: "Character recognition accuracy on degraded scanner sheets" },
      { metric: "Digitization Speed", value: "12x", description: "Faster than manual transcription typists" },
    ],
  },
  {
    id: "bihar-zp-scraper",
    title: "Bihar Zila Parishad Scraper & Pipeline",
    tagline: "Resilient Web Scraper & Dataset Generator for Local Governance",
    category: "Automation",
    featured: false,
    stars: 2,
    tags: ["Python", "BeautifulSoup", "Automation", "ETL", "JSON/CSV"],
    description:
      "Automated web-scraping script suite collecting comprehensive contact details, territorial assignments, and tenure info for Zila Parishad members across Bihar state portals.",
    metrics: "Fully Automated ETL Pipeline",
    repoUrl: "https://github.com/nadeemalam178/Bihar-ZP-Scraper",
    demoUrl: "https://github.com/nadeemalam178/Bihar-ZP-Scraper",
    accentColor: "from-rose-500 to-red-600",
    highlights: [
      "Robust error-handling with exponential backoff and captcha handling.",
      "Clean export formats in CSV, JSON, and normalized SQL seed scripts.",
      "Powering downstream analytical dashboards and contact verification.",
    ],
    problem:
      "Local governance representative data was buried inside pagination links across outdated government web portals with frequent connection drops.",
    solution:
      "Built an idempotent Python web scraping suite with session retry policies, rate limiting, and automated data normalization into relational formats.",
    architectureDecisions: [
      {
        decision: "Idempotent Checkpointing to SQLite",
        rationale: "Allows the scraper to resume from the exact last record if the host portal throttles or resets the connection.",
        alternative: "Single in-memory array write (lost all scraped data on server timeout)",
      },
    ],
    benchmarks: [
      { metric: "Fault Tolerance", value: "Auto-Resume", description: "Zero data loss on network drops" },
      { metric: "Export Formats", value: "CSV, JSON, SQL", description: "Direct seed files ready for BI dashboards" },
    ],
  },
  {
    id: "al-qalam-app",
    title: "Al-Qalam Public School Mobile App",
    tagline: "Educational Mobile Platform for Academic Notifications & Attendance",
    category: "Mobile",
    featured: false,
    stars: 2,
    tags: ["Dart", "Flutter", "Cross-Platform", "Mobile App"],
    description:
      "Cross-platform mobile application developed for students, parents, and teachers to receive circular notifications, track daily attendance, and review academic calendars.",
    metrics: "Android & iOS Ready",
    repoUrl: "https://github.com/nadeemalam178/Al-Qalam-Public-School",
    demoUrl: "https://github.com/nadeemalam178/Al-Qalam-Public-School",
    accentColor: "from-teal-500 to-emerald-700",
    highlights: [
      "Clean Flutter UI with fast state management.",
      "Real-time notifications for urgent announcements.",
      "Intuitive student report card and attendance ledger.",
    ],
    problem:
      "Parents and teachers had no direct, unified channel for urgent school closures, fee notices, and student attendance logs.",
    solution:
      "Created a cross-platform Flutter application with real-time push alerts, offline calendar caching, and an intuitive attendance ledger.",
    architectureDecisions: [
      {
        decision: "Flutter Cross-Platform Architecture",
        rationale: "Maintains a single shared codebase running smoothly on both budget Android devices and iOS.",
        alternative: "Separate native Swift and Kotlin apps (double maintenance overhead)",
      },
    ],
    benchmarks: [
      { metric: "Frame Rate", value: "60 FPS", description: "Smooth fluid animations on budget mobile chipsets" },
      { metric: "Platforms Supported", value: "Android & iOS", description: "Single codebase distribution" },
    ],
  },
];
