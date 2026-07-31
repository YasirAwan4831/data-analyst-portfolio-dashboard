"use client";
import { Github, Linkedin, ExternalLink, Mail, BarChart3, Heart } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/config/data";

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Upper footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
                <BarChart3 size={18} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">Muhammad Yasir</p>
                <p className="text-primary-400 text-xs">Data Analytics Portfolio</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Full Stack Web Developer • Data Analyst • AI & Automation Enthusiast.
              Completed a 4-week Data Analyst Internship at Logic Stack (Jun – Jul 2026).
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wide">Navigation</p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-slate-400 hover:text-primary-400 text-xs transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-display font-bold text-sm text-white mb-4 uppercase tracking-wide">Connect</p>
            <div className="flex flex-col gap-2">
              {[
                { icon: Github,      label: "GitHub",    href: SOCIAL_LINKS.github    },
                { icon: Linkedin,    label: "LinkedIn",  href: SOCIAL_LINKS.linkedin  },
                { icon: ExternalLink,label: "Portfolio", href: SOCIAL_LINKS.portfolio },
                { icon: Mail,        label: "Email",     href: `mailto:${SOCIAL_LINKS.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-xs group"
                >
                  <Icon size={13} className="flex-shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lower footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-slate-500 text-xs">
            © 2026 Muhammad Yasir. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            Designed & Developed <Heart size={11} className="text-red-400 fill-red-400" /> By{" "}
            <a href={SOCIAL_LINKS.portfolio} target="_blank" rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-semibold transition-colors">
              Muhammad Yasir
            </a>
          </p>
          <p className="text-slate-600 text-xs">
            Full Stack Developer • Data Analyst • AI Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
}
