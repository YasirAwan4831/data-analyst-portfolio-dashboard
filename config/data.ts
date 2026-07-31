/* ─── Password for Certificate & Offer Letter ─────────────────────────── */
export const CERTIFICATE_PASSWORD = "LogicStack2026";

/* ─── Navigation ───────────────────────────────────────────────────────── */
export const NAV_ITEMS = [
  { label: "Home",        href: "#home" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Challenges", href: "#challenges" },
  { label: "Certificate",href: "#certificate" },
  { label: "Contact",    href: "#contact" },
];

/* ─── Hero Stats ────────────────────────────────────────────────────────── */
export const STATS = [
  { value: 4,   label: "Projects",          suffix: "" },
  { value: 1,   label: "Internship",        suffix: "" },
  { value: 1,   label: "Certificate",       suffix: "" },
  { value: 15,  label: "Skills Learned",    suffix: "+" },
  { value: 100, label: "Tasks Completed",   suffix: "%" },
];

/* ─── Typing Roles ──────────────────────────────────────────────────────── */
export const TYPING_ROLES = [
  "Data Analyst",
  "SQL • Python • Power BI",
  "Excel Specialist",
  "SQLite, Pandas, NumPy, Matplotlib",
  "Dashboard Developer",
];

/* ─── Projects ──────────────────────────────────────────────────────────── */
export interface Project {
  week: string;
  title: string;
  description: string;
  tools: string[];
  github: string;
  youtube: string;
  linkedin: string;
  accent: string;
  emoji: string;
}

export const PROJECTS: Project[] = [
  {
    week: "Week 1",
    title: "Retail Sales Data Cleaning & Excel Analysis",
    description:
      "Performed complete data cleaning, formatting, and exploratory analysis on a 1,000-row retail sales dataset in Microsoft Excel. Built 8 professional sheets including Pivot Tables, KPI Dashboard, Charts and written Observations.",
    tools: ["Microsoft Excel", "CSV", "Data Cleaning", "Pivot Tables", "Charts"],
    github:   "https://github.com/YasirAwan4831/week-1-retail-sales-excel-analysis",
    youtube:  "https://youtube.com/shorts/-vCaOvUj-DA?si=4DzXsE1v3Idt84xs",
    linkedin: "https://www.linkedin.com/posts/yasirawan4831_excel-logicstack-dataanalyst-activity-7476570834262945792-XcJ4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyt-1EB5XKMOcxukQpAzVmx6pIKiXdCz64",
    accent: "from-emerald-500 to-teal-500",
    emoji: "📊",
  },
  {
    week: "Week 2",
    title: "Excel Pivot Tables & Power BI Sales Dashboard",
    description:
      "Extended the Week 1 workbook with advanced Pivot Tables and a KPI Dashboard, then built a fully interactive Power BI dashboard with Funnel Charts, Bar/Pie visuals and 5+ business insights.",
    tools: ["Microsoft Excel", "Power BI", "DAX", "KPI Cards", "Pivot Tables"],
    github:   "https://github.com/YasirAwan4831/week-2-excel-powerbi-sales-dashboard",
    youtube:  "https://youtube.com/shorts/JLg-B-rs0gE?si=kCWG7KHxdxw2d-Pa",
    linkedin: "https://www.linkedin.com/posts/yasirawan4831_weekabr2-excel-powerabrbi-activity-7480188105535209473-ekdu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyt-1EB5XKMOcxukQpAzVmx6pIKiXdCz64",
    accent: "from-blue-500 to-indigo-500",
    emoji: "📈",
  },
  {
    week: "Week 3",
    title: "Supply Chain Analytics using Python & Power BI",
    description:
      "Analysed a 10,324-row SCMS supply chain dataset with Python & Pandas — cleaning messy data, calculating delivery delays, and generating 3 publication-quality charts before building an interactive Power BI dashboard.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Jupyter"],
    github:   "https://github.com/YasirAwan4831/week-3-python-powerbi-supply-chain-analytics",
    youtube:  "https://youtu.be/SQk41XxxpsY?si=ElhxePDt916bh_VJ",
    linkedin: "https://www.linkedin.com/posts/yasirawan4831_eda-dataabranalyst-fullabrstackabrdeveloper-activity-7482280841147006976-YKho?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyt-1EB5XKMOcxukQpAzVmx6pIKiXdCz64",
    accent: "from-violet-500 to-purple-600",
    emoji: "🚚",
  },
  {
    week: "Week 4",
    title: "Funnel & Revenue Analysis using SQL & Power BI",
    description:
      "Imported a 21,409-event client-site dataset into SQLite and wrote 5 SQL task groups covering exploration, funnel analysis, revenue breakdown, business insights, and drop-off analysis — then visualised findings in Power BI.",
    tools: ["SQL", "SQLite", "DB Browser", "Power BI", "DAX", "Funnel Analysis"],
    github:   "https://github.com/YasirAwan4831/week-4-sql-powerbi-funnel-analysis",
    youtube:  "https://youtu.be/sdBYOKqT6YM?si=HfNw1CrgG71dHIzi",
    linkedin: "https://www.linkedin.com/posts/yasirawan4831_sqlite-sqlabrbased-dataabranalyst-activity-7486642277780742144-lXpI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyt-1EB5XKMOcxukQpAzVmx6pIKiXdCz64",
    accent: "from-orange-500 to-rose-500",
    emoji: "🔍",
  },
];

/* ─── Skills ────────────────────────────────────────────────────────────── */
export interface Skill {
  name: string;
  color: string;
}

export const SKILLS_ROW_1: Skill[] = [
  { name: "Python",           color: "bg-blue-100   text-blue-700"   },
  { name: "SQL",              color: "bg-orange-100 text-orange-700" },
  { name: "Power BI",        color: "bg-yellow-100 text-yellow-700" },
  { name: "Pandas",           color: "bg-purple-100 text-purple-700" },
  { name: "NumPy",            color: "bg-cyan-100   text-cyan-700"   },
  { name: "Matplotlib",       color: "bg-pink-100   text-pink-700"   },
  { name: "Microsoft Excel",  color: "bg-emerald-100 text-emerald-700"},
  { name: "Data Cleaning",    color: "bg-teal-100   text-teal-700"   },
  { name: "EDA",              color: "bg-indigo-100 text-indigo-700" },
  { name: "SQLite",           color: "bg-slate-100  text-slate-700"  },
];

export const SKILLS_ROW_2: Skill[] = [
  { name: "Dashboard Design", color: "bg-rose-100   text-rose-700"   },
  { name: "Business Analysis",color: "bg-amber-100  text-amber-700"  },
  { name: "Git",              color: "bg-red-100    text-red-700"    },
  { name: "GitHub",           color: "bg-gray-100   text-gray-700"   },
  { name: "VS Code",          color: "bg-blue-100   text-blue-800"   },
  { name: "KPI Analysis",     color: "bg-green-100  text-green-700"  },
  { name: "Funnel Analysis",  color: "bg-violet-100 text-violet-700" },
  { name: "Data Visualization",color:"bg-fuchsia-100 text-fuchsia-700"},
  { name: "Reporting",        color: "bg-lime-100   text-lime-700"   },
  { name: "Seaborn",          color: "bg-sky-100    text-sky-700"    },
];

/* ─── Challenges ────────────────────────────────────────────────────────── */
export interface Challenge {
  week: string;
  challenge: string;
  solution: string;
  icon: string;
}

export const CHALLENGES: Challenge[] = [
  {
    week: "Starting Point",
    challenge: "Started this internship with ZERO practical Data Analytics experience",
    solution:
      "Committed to a one-tool-per-week learning plan, starting from Excel fundamentals and progressively advancing to Python EDA, SQL analytics, and Power BI — building a complete, portfolio-ready skill set in 4 weeks.",
    icon: "🎯",
  },
  {
    week: "Week 1",
    challenge: "Understanding raw data and building a professional multi-sheet Excel workbook from scratch",
    solution:
      "Researched Excel Table features, pivot table design, and professional formatting standards. Delivered 8 well-structured sheets with live formulas, currency formatting, and freeze panes.",
    icon: "📊",
  },
  {
    week: "Week 2",
    challenge: "Connecting Excel analysis to Power BI and creating interactive KPI dashboards",
    solution:
      "Learned DAX calculated columns, KPI card design, and dashboard layout principles. Built a clean dashboard with 4 KPI cards and 3 business-ready charts in Power BI Desktop.",
    icon: "📈",
  },
  {
    week: "Week 3",
    challenge: "Configuring the Python environment — kernel connection failures and library installation errors",
    solution:
      "Systematically debugged the VS Code Python interpreter path, installed Pandas/NumPy/Matplotlib with pip, and resolved version conflicts — gaining critical real-world environment troubleshooting skills.",
    icon: "🐍",
  },
  {
    week: "Week 3",
    challenge: "Cleaning a messy real-world supply chain dataset with 10,000+ rows and missing/text-encoded numeric columns",
    solution:
      "Used pd.to_numeric(errors='coerce') to handle non-numeric freight and weight values, filled missing values using mode and median logic, and validated results with COUNTBLANK checks.",
    icon: "🧹",
  },
  {
    week: "Week 4",
    challenge: "Installing and configuring SQLite and DB Browser for SQLite on Windows",
    solution:
      "Downloaded DB Browser for SQLite which bundles SQLite without manual PATH configuration. Imported the CSV through the GUI import wizard and verified the table structure before writing queries.",
    icon: "🗄️",
  },
  {
    week: "Week 4",
    challenge: "Writing complex SQL queries — aggregate functions, GROUP BY, and conversion rate calculations",
    solution:
      "Built queries progressively from simple SELECT statements to multi-level GROUP BY aggregations, studying each output carefully and documenting all commands in SQL-Command.md for future reference.",
    icon: "🔍",
  },
  {
    week: "All Weeks",
    challenge: "Writing professional GitHub READMEs and maintaining a clean, organised repository structure",
    solution:
      "Developed a consistent README template using capsule-render headers, typing SVG animations, Shields.io badges, and professional section layouts — resulting in portfolio-quality documentation for every project.",
    icon: "📝",
  },
];

/* ─── Social Links ──────────────────────────────────────────────────────── */
export const SOCIAL_LINKS = {
  github:    "https://github.com/YasirAwan4831",
  linkedin:  "https://www.linkedin.com/in/yasirawan4831",
  portfolio: "https://yasirawaninfo.vercel.app",
  email:     "my3154831409@gmail.com",
};
