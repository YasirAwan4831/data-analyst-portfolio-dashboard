"use client";
import { useRef, useEffect, useState } from "react";
import { Github, Youtube, Linkedin, ExternalLink } from "lucide-react";
import { PROJECTS, type Project } from "@/config/data";

function useInView(threshold = 0.1) {
  const ref  = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useInView(0.15);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover shadow-sm
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Card header gradient */}
      <div className={`h-2 w-full bg-gradient-to-r ${project.accent}`} />

      <div className="p-6">
        {/* Week badge + emoji */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.accent} text-white`}>
            {project.week}
          </span>
          <span className="text-2xl">{project.emoji}</span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-gray-900 text-lg leading-snug mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tool badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tools.map((t) => (
            <span
              key={t}
              className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-lg font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-gray-900 hover:bg-gray-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
          >
            <Github size={13} /> GitHub
          </a>
          <a
            href={project.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
          >
            <Youtube size={13} /> YouTube
          </a>
          <a
            href={project.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
          >
            <Linkedin size={13} /> LinkedIn
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-gray-200 hover:border-primary-400 text-gray-600 hover:text-primary-600 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors ml-auto"
          >
            <ExternalLink size={13} /> Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-primary-600 tracking-widest uppercase mb-3 block">
            Logic Stack Internship • Jun – Jul 2026
          </span>
          <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-4">
            Internship Projects
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            A complete 4-week journey from raw data to business dashboards —
            each project building on the last with a new tool and deeper insight.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.week} project={project} index={i} />
          ))}
        </div>

        {/* Bottom info strip */}
        <div className="mt-10 flex items-center justify-center gap-8 flex-wrap text-center">
          {[
            { icon: "📊", label: "Excel Analytics",    sub: "Week 1 & 2" },
            { icon: "🐍", label: "Python EDA",         sub: "Week 3"     },
            { icon: "🗄️", label: "SQL Analytics",      sub: "Week 4"     },
            { icon: "📈", label: "Power BI Dashboards",sub: "Week 2 – 4" },
          ].map(({ icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-2xl">{icon}</span>
              <p className="text-sm font-semibold text-gray-800">{label}</p>
              <p className="text-xs text-gray-400">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
