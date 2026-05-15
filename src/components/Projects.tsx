import React from 'react';
import { Code, Bot, LayoutGrid, ShieldCheck, Server, Laptop, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext'; 

interface ProjectsProps {
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  // funcion traductura tomada del context
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: t('projects.items.homelab.title'),
      description: t('projects.items.homelab.description'),
      tags: ["Google Cloud", "Docker", "Linux", "DevOps"],
      icon: Server,
      links: { code: "https://github.com/agmonetti/gcp-free-tier-linux-server" },
      color: "from-indigo-500/40"
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
      title: t('projects.items.cookieAnalyzer.title'),
      description: t('projects.items.cookieAnalyzer.description'),
      tags: ["JavaScript", "Privacy", "API"],
      icon: ShieldCheck,
      links: { code: "https://github.com/agmonetti/cookie_analyzer"},
      color: "from-emerald-900/40"
    }
  ];
  const visibleProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="w-full">
      <div className="mx-auto max-w-4xl px-6 py-5 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-diagonal">
        <h2 className="text-4xl heading-sketch text-darker dark:text-text-dark">
          {t('projects.title')}
        </h2>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
        <div className="space-y-5">
          <div className="border-t border-neutral-300/70 dark:border-neutral-800">
          {visibleProjects.map((project, idx) => (
            <article key={idx} className="grid gap-6 py-6 lg:grid-cols-[220px_1fr] lg:gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <project.icon className="h-4 w-4" />
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-text/55 dark:text-text-dark/55">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-darker dark:text-text-dark" title={project.title}>
                  {project.title}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="max-w-3xl text-sm leading-7 text-text/85 dark:text-text-dark/85 sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-text/65">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs text-text/60">{tag}</span>
                  ))}
                </div>

                {project.links.code && (
                  <a 
                    href={project.links.code} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-text dark:text-text-dark transition-colors hover:text-primary"
                    title="View Source"
                  >
                    <Code className="h-4 w-4" />
                    Ver código
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
          </div>

          {typeof limit === 'number' && projects.length > limit && (
            <div className="pt-2">
              <a href="/projects" className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 dark:border-neutral-700 bg-white/55 dark:bg-surface-dark/55 px-4 py-2 text-sm font-medium text-text dark:text-text-dark transition-colors hover:border-primary/30 hover:text-primary">
                Ver todos los proyectos
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;