export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  status: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  skillCategories: {
    category: string;
    skills: { name: string; level?: string; icon?: string }[];
  }[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  languages: string[];
}

export const profile: ProfileData = {
  name: "Nadeem Alam",
  title: "Data Analyst & Full-Stack Automation Engineer",
  headline: "Transforming complex operational and political datasets into fluid, high-impact analytical dashboards and web systems.",
  bio: "Data Analyst and MIS specialist with comprehensive hands-on experience developing enterprise dashboards, automated data validation pipelines, and modern web applications. Proficient in SQL, Python, TypeScript, Next.js, Looker Studio, and Google Apps Script, bridging the gap between rigorous mathematical data modeling and intuitive user interfaces.",
  location: "Patna, Bihar, India",
  email: "alamnadeem178@gmail.com",
  phone: "+91 9113770860",
  github: "https://github.com/nadeemalam178",
  linkedin: "https://www.linkedin.com/in/nadeem-alam-2853b9232",
  status: "Open for High-Impact Roles & Consulting",
  stats: [
    { label: "Public Repositories", value: "20+", subtext: "Full-Stack, Data & Tools" },
    { label: "Data Records Processed", value: "250K+", subtext: "Constituency & MIS Data" },
    { label: "Interactive Dashboards", value: "15+", subtext: "Looker & Web-based BI" },
    { label: "Automation Workflows", value: "40+", subtext: "Apps Script & Python" },
  ],
  skillCategories: [
    {
      category: "Data Analytics & Business Intelligence",
      skills: [
        { name: "SQL (MySQL / PostgreSQL)" },
        { name: "Looker Studio" },
        { name: "Advanced Excel & Google Sheets" },
        { name: "KPI Dashboards" },
        { name: "MIS Architecture" },
        { name: "Data Cleaning & Validation" },
      ],
    },
    {
      category: "Full-Stack & Web Engineering",
      skills: [
        { name: "TypeScript" },
        { name: "Next.js & React" },
        { name: "Tailwind CSS" },
        { name: "Python (FastAPI / Flask)" },
        { name: "RESTful APIs" },
        { name: "Modern JavaScript (ESNext)" },
      ],
    },
    {
      category: "UI/UX & Spatial Interface Design",
      skills: [
        { name: "Antigravity 3D & Spatial UI" },
        { name: "Responsive & Mobile-First Design" },
        { name: "Bento Grid Architecture" },
        { name: "Framer Motion & GSAP Animations" },
        { name: "Glassmorphism & Micro-Interactions" },
        { name: "Information Architecture & a11y" },
      ],
    },
    {
      category: "Automation, Tools & DevOps",
      skills: [
        { name: "Google Apps Script" },
        { name: "Web Scraping & OCR" },
        { name: "Git & GitHub CLI" },
        { name: "Java Scripting" },
        { name: "Tally ERP 9" },
        { name: "Turbopack & Vite" },
      ],
    },
  ],
  experience: [
    {
      role: "Data Analyst",
      organization: "JSPT Consultants Pvt. Ltd.",
      period: "Apr 2025 – Present",
      location: "Patna, Bihar",
      type: "Full-Time",
      description: [
        "Engineered constituency-level dynamic dashboards and data analytics pipelines enabling strategic leadership decision-making.",
        "Architected automated reporting workflows using Google Apps Script and Google Workspace, slashing weekly report generation turnaround time by 75%.",
        "Streamlined raw voter data ingestion, rigorous cross-tabulation, and statistical hygiene across municipal and assembly constituencies.",
        "Formulated key performance indicator (KPI) models and ad-hoc analytical briefs for ground operational strategy.",
      ],
      skills: ["SQL", "Google Apps Script", "Looker Studio", "Data Modeling", "Excel Automation", "KPI Tracking"],
    },
    {
      role: "Executive Officer (EO)",
      organization: "JOGGF",
      period: "Apr 2024 – Mar 2025",
      location: "Patna, Bihar",
      type: "Full-Time",
      description: [
        "Maintained and validated core operational datasets across multi-tier field teams, guaranteeing high data fidelity.",
        "Constructed organizational MIS tracking engines to supervise field team velocity, task completions, and daily metrics.",
        "Designed executive-level BI dashboards in Looker Studio for programmatic review by directors.",
        "Spearheaded migration of legacy fragmented records into structured, high-integrity relational spreadsheet databases.",
      ],
      skills: ["MIS Reporting", "Looker Studio", "Data Validation", "Team Leadership", "Spreadsheet Systems"],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sikkim Manipal University (SMU)",
      period: "2026 – 2028",
      details: "Advanced software engineering, distributed systems, and modern database management systems.",
    },
    {
      degree: "Bachelor of Education (B.Ed)",
      institution: "F.S University",
      period: "2022 – 2024",
      details: "Educational psychology, pedagogy, and curriculum instructional design.",
    },
    {
      degree: "B.Sc. Mathematics (Honours)",
      institution: "Magadh University",
      period: "2017 – 2020",
      details: "Discrete mathematics, statistics, probability, linear algebra, and quantitative analysis.",
    },
    {
      degree: "Intermediate in Science (I.Sc.)",
      institution: "Patna Muslim High School",
      period: "2016 – 2017",
      details: "Physics, Chemistry, Mathematics.",
    },
    {
      degree: "Matriculation (10th Standard)",
      institution: "Nezamia Public School",
      period: "2014 – 2015",
    },
  ],
  certifications: [
    "STET Qualified (Secondary Teacher Eligibility Test)",
    "CTET Qualified (Central Teacher Eligibility Test)",
    "TCS NQT – Performance Recognized",
  ],
  languages: ["English (Professional)", "Hindi (Native)", "Urdu (Native)"],
};
