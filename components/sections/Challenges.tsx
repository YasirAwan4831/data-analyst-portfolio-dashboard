"use client";
import { useRef, useEffect, useState } from "react";
import { CHALLENGES } from "@/config/data";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function ChallengeCard({ challenge, index }: { challenge: typeof CHALLENGES[0]; index: number }) {
  const { ref, visible } = useInView();
  const isLeft = index % 2 === 0;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`flex items-start gap-4 md:gap-8 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 card-hover
          ${isLeft ? "md:ml-0 md:mr-4" : "md:ml-4 md:mr-0"}`}>
          <div className={`flex items-center gap-2 mb-3 ${isLeft ? "md:flex-row-reverse md:justify-start" : ""} flex-wrap`}>
            <span className="text-xs font-bold bg-primary-50 text-primary-700 px-3 py-1 rounded-full border border-primary-100">
              {challenge.week}
            </span>
          </div>
          <div className="mb-1">
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">⚠️ Challenge</span>
            <p className="font-display font-bold text-gray-900 text-sm mt-1 leading-snug">{challenge.challenge}</p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">✅ Solution</span>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">{challenge.solution}</p>
          </div>
        </div>
      </div>

      {/* Center icon */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center text-xl shadow-lg shadow-primary-200 z-10">
          {challenge.icon}
        </div>
        {index < CHALLENGES.length - 1 && (
          <div className="w-0.5 h-16 bg-gradient-to-b from-primary-300 to-transparent mt-2" />
        )}
      </div>

      {/* Spacer on opposite side */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function Challenges() {
  return (
    <section id="challenges" className="py-24 bg-gray-50/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary-600 tracking-widest uppercase mb-3 block">
            Real Problems. Real Solutions.
          </span>
          <h2 className="text-4xl font-display font-extrabold text-gray-900 mb-4">Challenges Solved</h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Every obstacle encountered during the internship — from environment setup to complex SQL queries —
            was systematically identified, researched and resolved.
          </p>
        </div>

        <div className="space-y-6">
          {CHALLENGES.map((c, i) => (
            <ChallengeCard key={i} challenge={c} index={i} />
          ))}
        </div>

        <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-center text-white">
          <p className="text-3xl mb-2">🏆</p>
          <h3 className="font-display font-bold text-xl mb-2">All Challenges Successfully Resolved</h3>
          <p className="text-primary-100 text-sm leading-relaxed max-w-md mx-auto">
            Every technical obstacle faced during this internship was independently researched and solved —
            building both hard skills and the problem-solving mindset of a real data analyst.
          </p>
        </div>
      </div>
    </section>
  );
}
