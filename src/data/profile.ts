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
  availability: string;
  corePillars: {
    title: string;
    description: string;
  }[];
  skillGroups: {
    category: string;
    skills: string[];
  }[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  languages: string[];
}

export const profile: ProfileData = {
  name: "Nadeem Alam",
  title: "Data Analyst, Automation Developer & Full-Stack Application Builder",
  headline:
    "Building operational data pipelines, reporting automation, and web applications that solve practical organizational bottlenecks.",
  bio:
    "Data analyst and full-stack developer with a foundational background in Mathematics (B.Sc. Hons) and currently pursuing MCA. Hands-on experience developing constituency and operational dashboards, automating multi-sheet reporting pipelines using Google Apps Script and Python, and engineering modern full-stack web applications with TypeScript, Next.js, and SQL.",
  location: "Patna, Bihar, India",
  email: "alamnadeem178@gmail.com",
  phone: "+91 9113770860",
  github: "https://github.com/nadeemalam178",
  linkedin: "https://www.linkedin.com/in/nadeem-alam-2853b9232",
  availability: "Available for Data Analytics, Automation & Engineering Roles",
  corePillars: [
    {
      title: "Operational Data Analysis & MIS",
      description:
        "Standardizing fragmented multi-district datasets, constructing executive dashboards, and designing validation pipelines for leadership decision support.",
    },
    {
      title: "Workflow Automation & Scripting",
      description:
        "Automating recurring spreadsheet reporting, cross-tabulation, and notification pipelines using Google Apps Script, Python, and SQL.",
    },
    {
      title: "Full-Stack Application Development",
      description:
        "Building modular web systems, relational database schemas, and responsive user interfaces with TypeScript, Next.js, React, and Tailwind CSS.",
    },
  ],
  skillGroups: [
    {
      category: "Data Analytics & Reporting",
      skills: [
        "Data Validation & Cleaning",
        "Looker Studio",
        "Executive MIS Reporting",
        "Cross-Tabulation Analysis",
        "KPI Dashboard Architecture",
        "Tally ERP 9",
      ],
    },
    {
      category: "Spreadsheet Automation & Scripting",
      skills: [
        "Google Apps Script",
        "Advanced Excel (Formulas, Power Query)",
        "Google Sheets API Integration",
        "Python (Data Processing)",
        "Automated Email & Report Feeds",
      ],
    },
    {
      category: "SQL & Database Design",
      skills: [
        "MySQL",
        "PostgreSQL Schema Design",
        "Relational Data Modeling",
        "Query Optimization & Indexing",
        "ETL Data Ingestion",
      ],
    },
    {
      category: "Frontend & Web Engineering",
      skills: [
        "TypeScript",
        "Next.js (App Router)",
        "React",
        "Tailwind CSS",
        "Responsive & Mobile-First UX",
        "Accessible Semantic HTML",
      ],
    },
    {
      category: "Backend, APIs & Mobile",
      skills: [
        "Node.js",
        "Python (Flask / FastAPI)",
        "RESTful API Architecture",
        "Flutter / Dart (Cross-Platform Mobile)",
        "Web Scraping (BeautifulSoup)",
      ],
    },
    {
      category: "Tools & Deployment",
      skills: [
        "Git & GitHub CLI",
        "Vercel Deployment",
        "Netlify Hosting",
        "Linux / Bash Scripting",
        "Visual Studio Code",
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
        "Develop constituency-level analytical dashboards and daily MIS reports for executive leadership review.",
        "Oversee multi-tier data collection, hygiene verification, and cross-tabulation across municipal and district datasets.",
        "Build automated reporting routines using Google Apps Script and Google Workspace, significantly reducing manual compilation hours.",
        "Produce ad-hoc quantitative briefings and operational KPI tracking models for field teams.",
      ],
      skills: ["SQL", "Google Apps Script", "Looker Studio", "Excel / Google Sheets", "Data Modeling", "MIS"],
    },
    {
      role: "Executive Officer (EO)",
      organization: "JOGGF",
      period: "Apr 2024 – Mar 2025",
      location: "Patna, Bihar",
      type: "Full-Time",
      description: [
        "Maintained operational datasets and implemented systematic validation checkpoints across multi-tier team logs.",
        "Built MIS tracking mechanisms to monitor task progress, field coverage, and weekly deliverables.",
        "Configured management dashboards in Looker Studio for programmatic review by directors.",
        "Migrated legacy disconnected spreadsheet records into structured, standardized operational workbooks.",
      ],
      skills: ["MIS Reporting", "Looker Studio", "Data Validation", "Spreadsheet Systems", "Operations"],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sikkim Manipal University (Distance Learning)",
      period: "2026 – 2028 (In Progress)",
      details: "Focusing on advanced database systems, software engineering, algorithms, and distributed applications.",
    },
    {
      degree: "Bachelor of Education (B.Ed)",
      institution: "F.S University",
      period: "2022 – 2024",
      details: "Pedagogical methodology, instructional design, and educational evaluation frameworks.",
    },
    {
      degree: "B.Sc. Mathematics (Honours)",
      institution: "Magadh University",
      period: "2017 – 2020",
      details: "Rigorous coursework in discrete mathematics, calculus, linear algebra, probability, and quantitative analysis.",
    },
    {
      degree: "Intermediate in Science (I.Sc.)",
      institution: "Patna Muslim High School",
      period: "2016 – 2017",
      details: "Physics, Chemistry, and Mathematics.",
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
    "TCS NQT – Performance Recognized (Cognitive & Analytical)",
  ],
  languages: ["English (Professional Working)", "Hindi (Native)", "Urdu (Native)"],
};
