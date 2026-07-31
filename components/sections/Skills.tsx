"use client";
import { SKILLS_ROW_1, SKILLS_ROW_2, type Skill } from "@/config/data";

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap select-none border border-white/20 ${skill.color}`}
    >
      {skill.name}
    </span>
  );
}

function MarqueeRow({
  skills,
  reverse = false,
}: {
  skills: Skill[];
  reverse?: boolean;
}) {
  const doubled = [...skills, ...skills];
  return (
    <div className="overflow-hidden marquee-row py-1.5">
      <div
        className={`flex gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((skill, i) => (
          <SkillBadge key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-primary-400 tracking-widest uppercase mb-3 block">
            Hands-On Expertise
          </span>
          <h2 className="text-4xl font-display font-extrabold text-white mb-4">
            Skills Learned
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Every skill below was applied in at least one real internship project —
            not just studied, but actually used to solve a business problem.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="space-y-4 mb-16">
          <MarqueeRow skills={SKILLS_ROW_1} />
          <MarqueeRow skills={SKILLS_ROW_2} reverse />
          <MarqueeRow skills={[...SKILLS_ROW_1].reverse()} />
        </div>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { icon: "📊", title: "Data Analysis",   items: ["Excel", "Pandas", "SQL", "EDA"] },
            { icon: "📈", title: "Visualization",   items: ["Power BI", "Matplotlib", "Charts", "KPIs"] },
            { icon: "🐍", title: "Programming",     items: ["Python", "NumPy", "Seaborn", "Jupyter"] },
            { icon: "🛠️", title: "Tools & DevOps",  items: ["Git", "GitHub", "VS Code", "SQLite"] },
          ].map(({ icon, title, items }) => (
            <div
              key={title}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 hover:border-primary-500/40 transition-colors"
            >
              <span className="text-2xl mb-3 block">{icon}</span>
              <h3 className="font-display font-bold text-white text-sm mb-3">{title}</h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
