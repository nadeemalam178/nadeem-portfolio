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
  },
];
