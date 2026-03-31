import React from 'react';
import { Server, Cloud, Database } from 'lucide-react';
import { SkillCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Arsenal: React.FC = () => {
  // funcion de traduccion tomada del context
  const { t } = useLanguage();

  const categories: SkillCategory[] = [
    {
      title: t('technologies.backend'),
      icon: Server,
      skills: ["Python", "Java", "Node.js"],
      color: "bg-blue-500"
    },
    {
      title: t('technologies.infrastructure'),
      icon: Cloud,
      skills: ["Docker", "Google Cloud Platform", "Linux"], 
      color: "bg-purple-500"
    },
    {
      title: t('technologies.data'),
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis"], 
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="technologies" className="py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-darker">{t('navbar.technologies')}</h2>
        </div>

        <div className="space-y-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="border-b border-neutral-200 pb-6 last:border-none"
            >
              <div className="flex items-center gap-3">
                <cat.icon className="text-primary w-5 h-5" />
                <h3 className="text-lg font-semibold text-darker">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 rounded-full border border-neutral-200 text-text/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arsenal;