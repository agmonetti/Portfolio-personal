import React from 'react';
import { Code, Bot, LayoutGrid, ShieldCheck, Server, Laptop } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext'; 

const Projects: React.FC = () => {
  // funcion traductura tomada del context
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: t('projects.items.homelab.title'),
      description: t('projects.items.homelab.description'),
      tags: ["Google Cloud", "Docker", "Linux Admin", "DevOps"],
      icon: Server,
      links: { code: "https://github.com/agmonetti/gcp-free-tier-linux-server" },
      color: "from-indigo-500/40"
    },
    {
      title: t('projects.items.hackintosh.title'),
      description: t('projects.items.hackintosh.description'),
      tags: ["OpenCore", "ACPI/ASL", "Systems Engineering"],
      icon: Laptop,
      links: { code: "https://github.com/agmonetti/Hackintosh-Dell-Latitude-7480" },
      color: "from-purple-900/40"
    },
    {
      title: t('projects.items.polyglot.title'),
      description: t('projects.items.polyglot.description'),
      tags: ["Java", "MongoDB", "Redis", "Neo4j"],
      icon: LayoutGrid,
      links: { code: "https://github.com/agmonetti/Sistema-Clima_TUI" },
      color: "from-pink-900/40"
    },
    {
      title: t('projects.items.subteBot.title'),
      description: t('projects.items.subteBot.description'),
      tags: ["Python", "Telegram API", "Scraping"],
      icon: Bot,
      links: { code: "https://github.com/agmonetti/Bot-Subte" },
      color: "from-blue-900/40"
    },
    {
      title: t('projects.items.cookieAnalyzer.title'),
      description: t('projects.items.cookieAnalyzer.description'),
      tags: ["JavaScript", "Privacy", "DOM API"],
      icon: ShieldCheck,
      links: { code: "https://github.com/agmonetti/cookie_analyzer"},
      color: "from-emerald-900/40"
    }
  ];
  return (
    <section id="projects" className="pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-darker">{t('projects.title')}</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <article 
              key={idx}
              className="border border-neutral-200 rounded-lg p-6 bg-white shadow-[0_10px_30px_-24px_rgba(0,0,0,0.25)]"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <project.icon className="w-5 h-5" />
                    <span className="text-xs font-mono uppercase tracking-wide">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-darker" title={project.title}>
                    {project.title}
                  </h3>
                  <p className="text-text/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.links.code && (
                  <a 
                    href={project.links.code} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-text hover:text-primary transition-colors" 
                    title="View Source"
                  >
                    <Code size={18} />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono px-3 py-1 rounded-full border border-neutral-200 text-text/80">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;