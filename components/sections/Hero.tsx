"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Download, ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";
import { TYPING_ROLES, STATS, SOCIAL_LINKS } from "@/config/data";

/* ── Typing animation hook ─────────────────────────────────────────────── */
function useTyping(roles: string[]) {
  const [text,       setText]       = useState("");
  const [roleIdx,    setRoleIdx]    = useState(0);
  const [charIdx,    setCharIdx]    = useState(0);
  const [deleting,   setDeleting]   = useState(false);
  const [pausing,    setPausing]    = useState(false);

  useEffect(() => {
    if (pausing) {
      const t = setTimeout(() => { setPausing(false); setDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }
    const speed = deleting ? 45 : 95;
    const t = setTimeout(() => {
      const current = roles[roleIdx];
      if (!deleting) {
        if (charIdx < current.length) {
          setText(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setPausing(true);
        }
      } else {
        if (charIdx > 0) {
          setText(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, charIdx, deleting, pausing, roleIdx, roles]);

  return text;
}

/* ── Animated counter hook ─────────────────────────────────────────────── */
function useCounter(target: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const frames = 60;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.min(Math.round((frame / frames) * target), target));
      if (frame >= frames) clearInterval(timer);
    }, 1400 / frames);
    return () => clearInterval(timer);
  }, [started, target]);
  return count;
}

/* ── Single stat card ──────────────────────────────────────────────────── */
function StatCard({ value, label, suffix, started }: {
  value: number; label: string; suffix: string; started: boolean;
}) {
  const count = useCounter(value, started);
  return (
    <div className="bg-white rounded-2xl px-5 py-4 text-center shadow-sm border border-gray-100 card-hover">
      <p className="text-2xl font-display font-bold text-primary-600">
        {count}{suffix}
      </p>
      <p className="text-xs text-gray-500 mt-0.5 font-medium">{label}</p>
    </div>
  );
}

export default function Hero() {
  const typedText = useTyping(TYPING_ROLES);
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-white"
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Emerald glow blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* ── Left: text ─────────────────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary-100">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow" />
              Data Analyst Intern @ Logic Stack — 2026
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 leading-tight mb-4">
              Muhammad
              <br />
              <span className="gradient-text">Yasir</span>
            </h1>

            {/* Typing animation */}
            <p className="text-xl sm:text-2xl font-medium text-gray-600 mb-6 h-9 typing-cursor">
              {typedText}
            </p>

            <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              I successfully completed a one-month Data Analyst Internship at{" "}
              <span className="text-primary-600 font-semibold">Logic Stack</span>,
              working across Excel, Python EDA, SQL analytics and Power BI
              dashboards — building real solutions for real business problems.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 border-2 border-gray-200 hover:border-primary-400 text-gray-700 hover:text-primary-600 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Download Resume <Download size={16} />
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-sm text-gray-400">Connect:</span>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-900 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200">
                <Github size={16} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200">
                <Linkedin size={16} />
              </a>
              <a href={SOCIAL_LINKS.portfolio} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* ── Right: image + stats ────────────────────────────────────── */}
          <div className="flex-1 flex flex-col items-center gap-6">
            {/* Profile image */}
            <div className="relative">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-2xl shadow-primary-200 animate-float">
  <Image
    src="/profile.jpeg"
    alt="Muhammad Yasir"
    fill
    className="object-cover"
    priority
  />
</div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100">
                <p className="text-xs font-semibold text-gray-800">✅ Internship</p>
                <p className="text-xs text-primary-600 font-bold">Completed</p>
              </div>
              <div className="absolute -top-3 -left-3 bg-primary-600 rounded-xl px-3 py-2 shadow-lg">
                <p className="text-xs font-bold text-white">Logic Stack</p>
                <p className="text-xs text-primary-200">2026</p>
              </div>
            </div>

            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {STATS.map((s) => (
                <StatCard key={s.label} {...s} started={countersStarted} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
