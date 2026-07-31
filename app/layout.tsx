import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Yasir | Data Analytics Portfolio",
  description:
    "Data Analyst Portfolio showcasing a complete 4-week internship journey at Logic Stack — featuring SQL, Python EDA, Power BI dashboards and Excel analytics.",
  keywords: ["YasirAwan4831" , "Data Analyst", "Portfolio", "SQL", "Power BI", "Python", "Logic Stack"],
  authors: [{ name: "Muhammad Yasir" }],

    icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Muhammad Yasir | Data Analytics Portfolio",
    description: "Complete Data Analyst Internship Portfolio — Logic Stack 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
