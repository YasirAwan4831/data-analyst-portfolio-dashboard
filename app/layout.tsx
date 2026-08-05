import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";


const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Muhammad Yasir",

  alternateName: "YasirAwan4831",

  url: "https://yasirawaninfo-data.vercel.app",

  image: "https://yasirawaninfo-data.vercel.app/profile.png",

  jobTitle:
    "Data Analyst | Full Stack Web Developer | AI & Automation Enthusiast",

  description:
    "Professional Data Analyst specializing in SQL, Python, Excel, Power BI and modern dashboard development.",

  email: "mailto:my3154831409@gmail.com",

  sameAs: [
    "https://github.com/YasirAwan4831",
    "https://www.linkedin.com/in/yasirawan4831",
    "https://yasirawaninfo.vercel.app/",
    "https://www.youtube.com/@YasirAwan4831"
  ],

  knowsAbout: [
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Data Analytics",
    "Business Intelligence",
    "Dashboard Development",
    "Next.js",
    "TypeScript",
    "React",
    "MongoDB",
    "Firebase",
    "AI Automation"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yasirawaninfo-data.vercel.app"),

  title: {
    default: "Muhammad Yasir | Data Analytics Portfolio",
    template: "%s | Muhammad Yasir",
  },

  description:
    "Professional Data Analytics Portfolio of Muhammad Yasir featuring SQL, Python, Power BI, Excel, interactive dashboards, internship projects, certificates, GitHub repositories, and technical growth.",

  keywords: [
    "Muhammad Yasir",
    "YasirAwan4831",
    "Data Analyst",
    "Data Analytics Portfolio",
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Business Intelligence",
    "Dashboard",
    "Data Visualization",
    "Logic Stack Internship",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "GitHub",
  ],

  authors: [
    {
      name: "Muhammad Yasir",
      url: "https://yasirawaninfo-data.vercel.app",
    },
  ],

  creator: "Muhammad Yasir",

  publisher: "Muhammad Yasir",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://yasirawaninfo-data.vercel.app",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Muhammad Yasir | Data Analytics Portfolio",
    description:
      "Explore my complete Data Analytics Portfolio featuring SQL, Python, Power BI, Excel projects, dashboards, internship journey, and technical growth.",
    url: "https://yasirawaninfo-data.vercel.app",
    siteName: "Muhammad Yasir Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Yasir Data Analytics Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yasir | Data Analytics Portfolio",
    description:
      "SQL • Python • Power BI • Excel • Interactive Dashboards • Internship Projects",
    images: ["/og-image.png"],
    creator: "@YasirAwan4831",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}