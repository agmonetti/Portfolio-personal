import React from 'react';
import { ExternalLink, Code, Bot, LayoutGrid, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Subte Alerta Bot",
      description: "An automated Telegram bot that provides real-time alerts for the Buenos Aires subway system. It scrapes data efficiently to keep commuters informed instantly.",
      tags: ["Python", "Telegram API", "Scraping"],
      icon: Bot,
      links: { code: "#", demo: "#" },
      color: "from-blue-900/40"
    },
    {
      title: "Persistencia Políglota",
      description: "A comprehensive architecture showcase demonstrating data handling across multiple database paradigms simultaneously, ensuring data integrity and optimized query performance.",
      tags: ["Java", "MongoDB", "Redis", "Neo4j"],
      icon: LayoutGrid,
      links: { code: "#" },
      color: "from-purple-900/40"
    },
    {
      title: "Cookie Analyzer",
      description: "A browser-based security tool to analyze tracking cookies, visualizing data flow and privacy risks for end-users in an intuitive interface.",
      tags: ["JavaScript", "Privacy", "DOM API"],
      icon: ShieldCheck,
      links: { code: "#", demo: "#" },
      color: "from-emerald-900/40"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-primary font-mono text-xl">02.</span> Featured Projects
          </h2>
          <p className="text-text/70 max-w-2xl">Selected works demonstrating problem solving and engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <article 
              key={idx}
              className="bg-surface rounded-lg overflow-hidden border border-white/5 hover:border-primary transition-all duration-300 flex flex-col h-full group"
            >
              {/* Visual Header */}
              <div className={`h-48 bg-background relative overflow-hidden border-b border-white/5 flex items-center justify-center`}>
                <div className={`absolute inset-0 bg-gradient-radial ${project.color} via-background to-background`}></div>
                <project.icon className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.links.code && (
                      <a href={project.links.code} className="text-text hover:text-white transition-colors" title="View Source">
                        <Code size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="text-text hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-text/80 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-2 py-1 rounded bg-primary/5 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;