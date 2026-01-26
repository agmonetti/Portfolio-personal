import React from 'react';
import { Server, Cloud, Database } from 'lucide-react';
import { SkillCategory } from '../types';

const Arsenal: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Backend",
      icon: Server,
      skills: ["Python", "Java", "Node.js"],
      color: "bg-blue-500"
    },
    {
      title: "Infrastructure",
      icon: Cloud,
      skills: ["Docker", "Google Cloud Platform", "Linux"],
      color: "bg-purple-500"
    },
    {
      title: "Data",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis"],
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="technologies" className="py-24 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-primary font-mono text-xl">01.</span> Technologies
          </h2>
          <p className="text-text/70 max-w-2xl">My stack is built for performance, scalability, and clean architecture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="group bg-surface border border-white/5 p-6 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-neon relative overflow-hidden"
            >
              {/* Background Icon Watermark */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <cat.icon size={120} />
              </div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <cat.icon className="text-primary w-8 h-8" />
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
              </div>

              <ul className="space-y-3 font-mono text-sm text-text/80 relative z-10">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(102,252,241,0.8)]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arsenal;