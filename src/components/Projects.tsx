import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Bot, LayoutGrid, Server, Laptop, MessageSquare, Database, BrainCircuit, Terminal, ArrowUpRight, ExternalLink, GitFork, FileOutput, Eye } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { filterProjects } from '../utils/projectFilters';
import { useLanguage } from '../contexts/LanguageContext'; 

interface ProjectsProps {
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  // funcion traductura tomada del context
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 'lazyteams',
      category: 'applications',
      summary: t('projects.items.lazyteams.summary'),
      title: t('projects.items.lazyteams.title'),
      description: t('projects.items.lazyteams.description'),
      tags: ["Go", "Bubble Tea", "Microsoft Graph API", "TUI"],
      icon: MessageSquare,
      links: { code: "https://github.com/agmonetti/lazyteams", demo: "https://lazyteams.agmonetti.workers.dev" },
      color: "from-indigo-500/40"
    },
    {
      id: 'picklock',
      category: 'developer',
      summary: t('projects.items.picklock.summary'),
      title: t('projects.items.picklock.title'),
      description: t('projects.items.picklock.description'),
      tags: ["Go", "Bubble Tea", "TUI", "Multi-Paradigm"],
      icon: Database,
      links: { code: "https://github.com/agmonetti/picklock" },
      color: "from-teal-900/40"
    },
    {
      id: 'disambiguator',
      category: 'ai',
      summary: t('projects.items.disambiguator.summary'),
      title: t('projects.items.disambiguator.title'),
      description: t('projects.items.disambiguator.description'),
      tags: ["TypeScript", "AI Agents", "Prompt Engineering", "Developer Tools"],
      icon: GitFork,
      links: { code: "https://github.com/agmonetti/disambiguator" },
      color: "from-amber-900/40"
    },
    {
      id: 'subteBot',
      category: 'applications',
      summary: t('projects.items.subteBot.summary'),
      title: t('projects.items.subteBot.title'),
      description: t('projects.items.subteBot.description'),
      tags: ["Python", "SignalR", "Telegram Bot API", "Docker"],
      icon: Bot,
      links: { code: "https://github.com/agmonetti/bot-subte-argentina" },
      color: "from-blue-900/40"
    },
    {
      id: 'planExport',
      category: 'ai',
      summary: t('projects.items.planExport.summary'),
      title: t('projects.items.planExport.title'),
      description: t('projects.items.planExport.description'),
      tags: ["TypeScript", "MCP Server", "Puppeteer", "Shiki", "Mermaid"],
      icon: FileOutput,
      links: { code: "https://github.com/agmonetti/plan-export-mcp" },
      color: "from-emerald-900/40"
    },
    {
      id: 'mdview',
      category: 'developer',
      summary: t('projects.items.mdview.summary'),
      title: t('projects.items.mdview.title'),
      description: t('projects.items.mdview.description'),
      tags: ["Neovim", "Lua", "C++", "Cairo / Pango", "Kitty Protocol"],
      icon: Eye,
      links: { code: "https://github.com/agmonetti/mdview.nvim" },
      color: "from-sky-900/40"
    },
    {
      id: 'mathMcp',
      category: 'ai',
      summary: t('projects.items.mathMcp.summary'),
      title: t('projects.items.mathMcp.title'),
      description: t('projects.items.mathMcp.description'),
      tags: ["Python", "FastMCP", "SymPy", "IA / MCP"],
      icon: BrainCircuit,
      links: { code: "https://github.com/agmonetti/mathmethods-mcp" },
      color: "from-fuchsia-900/40"
    },
    {
      id: 'homelab',
      category: 'infrastructure',
      summary: t('projects.items.homelab.summary'),
      title: t('projects.items.homelab.title'),
      description: t('projects.items.homelab.description'),
      tags: ["Google Cloud", "Docker", "Linux", "DevOps"],
      icon: Server,
      links: { code: "https://github.com/agmonetti/gcp-free-tier-linux-server" },
      color: "from-indigo-500/40"
    },
    {
      id: 'dotfiles',
      category: 'infrastructure',
      summary: t('projects.items.dotfiles.summary'),
      title: t('projects.items.dotfiles.title'),
      description: t('projects.items.dotfiles.description'),
      tags: ["Arch Linux", "Hyprland", "Shell", "GNU Stow"],
      icon: Terminal,
      links: { code: "https://github.com/agmonetti/dotfiles" },
      color: "from-cyan-900/40"
    },
    {
      id: 'hackintosh',
      category: 'infrastructure',
      summary: t('projects.items.hackintosh.summary'),
      title: t('projects.items.hackintosh.title'),
      description: t('projects.items.hackintosh.description'),
      tags: ["OpenCore", "ACPI/ASL", "Systems Engineering"],
      icon: Laptop,
      links: { code: "https://github.com/agmonetti/Hackintosh-Dell-Latitude-7480" },
      color: "from-purple-900/40"
    },
    {
      id: 'polyglot',
      category: 'applications',
      summary: t('projects.items.polyglot.summary'),
      title: t('projects.items.polyglot.title'),
      description: t('projects.items.polyglot.description'),
      tags: ["Java", "MongoDB", "Redis", "Neo4j"],
      icon: LayoutGrid,
      links: { code: "https://github.com/agmonetti/Sistema-Clima_TUI" },
      color: "from-pink-900/40"
    }
  ];
  if (typeof limit !== 'number') return <ProjectCatalog projects={projects} />;
  const visibleProjects = projects.slice(0, limit);

  return (
    <section id="projects" className="w-full">
      <div className="mx-auto max-w-4xl px-6 py-5 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-diagonal">
        <h2 className="text-4xl heading-display text-darker dark:text-text-dark">
          {t('projects.title')}
        </h2>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
        <div className="space-y-5">
          <div className="border-t border-neutral-300/70 dark:border-neutral-800">
          {visibleProjects.map((project, idx) => (
            <article key={project.id} className="grid gap-6 py-6 lg:grid-cols-[220px_1fr] lg:gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <project.icon className="h-4 w-4" />
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-text/60 dark:text-text-dark/60">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-darker dark:text-text-dark" title={project.title}>
                  {project.title}
                </h3>
              </div>

              <div className="space-y-4">
                <p className="max-w-3xl text-sm leading-7 text-text/85 dark:text-text-dark/85 sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-text/65 dark:text-text-dark/65">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs text-text/60 dark:text-text-dark/60">{tag}</span>
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

                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-5 inline-flex items-center gap-2 text-sm font-medium text-text dark:text-text-dark transition-colors hover:text-primary"
                    title="Docs"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Docs
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
          </div>

          {typeof limit === 'number' && projects.length > limit && (
            <div className="pt-2">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 dark:border-neutral-700 bg-white/55 dark:bg-surface-dark/55 px-4 py-2 text-sm font-medium text-text dark:text-text-dark transition-colors hover:border-primary/30 hover:text-primary">
                Ver todos los proyectos
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const categories: ('all' | ProjectCategory)[] = ['all', 'developer', 'ai', 'infrastructure', 'applications'];
const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600';

const ProjectCatalog: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | ProjectCategory>('all');
  const results = filterProjects<Project>(projects, query, category);
  const reset = () => { setQuery(''); setCategory('all'); };

  return (
    <section id="projects" aria-labelledby="catalog-title" className="mx-auto w-full max-w-4xl border-x border-b border-neutral-300/70 bg-white dark:border-neutral-800 dark:bg-[#0a0a0a]">
      <div className="bg-diagonal border-b border-neutral-300/70 px-6 py-5 dark:border-neutral-800 lg:px-10">
        <h1 id="catalog-title" className="heading-display text-4xl text-darker dark:text-text-dark">{t('projects.catalog.title')}</h1>
      </div>
      <div className="space-y-6 px-6 py-8 lg:px-10">
        <div className="space-y-4">
          <label htmlFor="project-search" className="block text-sm font-medium text-darker dark:text-text-dark">{t('projects.catalog.search')}</label>
          <input
            id="project-search" type="search" value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder={t('projects.catalog.placeholder')}
            aria-controls="project-results"
            className={`w-full rounded border border-neutral-300 bg-transparent px-3 py-2 text-sm text-darker placeholder:text-neutral-500 dark:border-neutral-700 dark:text-text-dark ${focusRing}`}
          />
          <fieldset>
            <legend className="mb-2 text-sm text-text dark:text-text-dark">{t('projects.catalog.category')}</legend>
            <div className="flex flex-wrap gap-2">
              {categories.map(value => (
                <button key={value} type="button" aria-pressed={category === value} aria-controls="project-results" onClick={() => setCategory(value)}
                  className={`rounded-full border px-3 py-1.5 text-xs ${focusRing} ${category === value ? 'border-emerald-700 bg-emerald-50 text-emerald-800 dark:border-emerald-400 dark:bg-emerald-950 dark:text-emerald-300' : 'border-neutral-300 text-text hover:border-emerald-600 dark:border-neutral-700 dark:text-text-dark'}`}>
                  {t(`projects.catalog.categories.${value}`)}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <p role="status" aria-live="polite" aria-atomic="true" className="text-text/75 dark:text-text-dark/75">
              {t('projects.catalog.count').replace('{count}', String(results.length)).replace('{total}', String(projects.length))}
            </p>
            <button type="button" onClick={reset} disabled={!query && category === 'all'} className={`text-emerald-700 underline underline-offset-4 disabled:opacity-40 dark:text-emerald-400 ${focusRing}`}>
              {t('projects.catalog.reset')}
            </button>
          </div>
        </div>
        <div id="project-results" className="grid items-start gap-4 md:grid-cols-2">
          {results.map(project => (
            <article key={project.id} aria-labelledby={`project-${project.id}`} className="min-w-0 space-y-4 border border-neutral-300/70 p-5 dark:border-neutral-800">
              <div className="flex items-start gap-3">
                <project.icon aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <h2 id={`project-${project.id}`} className="break-words text-lg font-semibold text-darker dark:text-text-dark">{project.title}</h2>
              </div>
              <p className="text-sm leading-6 text-text/85 dark:text-text-dark/85">{project.summary}</p>
              <ul aria-label={t('projects.catalog.tags')} className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-text/70 dark:text-text-dark/70">
                {project.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
              <details className="text-sm text-text/85 dark:text-text-dark/85">
                <summary className={`cursor-pointer text-emerald-700 dark:text-emerald-400 ${focusRing}`}>
                  {t('projects.catalog.details')}<span className="sr-only">: {project.title}</span>
                </summary>
                <p className="mt-3 leading-7">{project.description}</p>
              </details>
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-neutral-300/70 pt-3 dark:border-neutral-800">
                {project.links.code && (
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-sm text-text hover:text-emerald-700 dark:text-text-dark dark:hover:text-emerald-400 ${focusRing}`}>
                    <Code aria-hidden="true" className="h-4 w-4" />{t('projects.catalog.source')}
                    <span className="sr-only">: {project.title} — {t('projects.catalog.newTab')}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-sm text-text hover:text-emerald-700 dark:text-text-dark dark:hover:text-emerald-400 ${focusRing}`}>
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />{t('projects.catalog.docs')}
                    <span className="sr-only">: {project.title} — {t('projects.catalog.newTab')}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
          {results.length === 0 && (
            <p className="border border-dashed border-neutral-300 px-5 py-8 text-sm text-text dark:border-neutral-700 dark:text-text-dark md:col-span-2">{t('projects.catalog.empty')}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
