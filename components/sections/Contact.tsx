"use client";
import { Github, Linkedin, ExternalLink, Mail, Download, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/data";

const CONTACT_ITEMS = [
  {
    icon: Github,
    label: "GitHub",
    sub: "YasirAwan4831",
    href: SOCIAL_LINKS.github,
    color: "hover:bg-gray-900 hover:text-white hover:border-gray-900",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "yasirawan4831",
    href: SOCIAL_LINKS.linkedin,
    color: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
  },
  {
    icon: ExternalLink,
    label: "Portfolio",
    sub: "yasirawaninfo.vercel.app",
    href: SOCIAL_LINKS.portfolio,
    color: "hover:bg-primary-600 hover:text-white hover:border-primary-600",
  },
  {
    icon: Mail,
    label: "Email",
    sub: "my3154831409@gmail.com",
    href: `mailto:${SOCIAL_LINKS.email}`,
    color: "hover:bg-red-600 hover:text-white hover:border-red-600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-primary-600 tracking-widest uppercase mb-3 block">
            Let's Connect
          </span>
          <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-4">Contact</h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Open to Web Full Stack Web Development roles, Social Media Management, data analyst roles, freelance projects and collaborations.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CONTACT_ITEMS.map(({ icon: Icon, label, sub, href, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`flex flex-col items-center text-center bg-white rounded-2xl border-2 border-gray-100 p-6 transition-all duration-200 card-hover ${color} group`}
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-white/20 flex items-center justify-center mb-3 transition-colors">
                <Icon size={22} />
              </div>
              <p className="font-display font-bold text-sm mb-0.5">{label}</p>
              <p className="text-xs opacity-70 truncate max-w-full">{sub}</p>
            </a>
          ))}
        </div>

        {/* Location + resume strip */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-primary-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Based in Pakistan</p>
              <p className="text-gray-400 text-xs">Available for remote opportunities worldwide</p>
            </div>
          </div>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-200 text-sm flex-shrink-0"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
