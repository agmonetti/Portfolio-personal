import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, Bot, LayoutGrid, ShieldCheck, ChevronLeft, ChevronRight, Server, Laptop } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext'; 

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // logica de items a mostrar del carrousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-primary font-mono text-xl">02.</span> 
              {/* hecho asi para no perder el diseño del titulo */}
              {t('projects.title').replace('02. ', '')}
            </h2>
            <p className="text-text/70 max-w-2xl">
              {t('projects.subtitle')}
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border border-white/10 bg-surface transition-all duration-300 group ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-background hover:border-primary'}`}
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`p-3 rounded-full border border-white/10 bg-surface transition-all duration-300 group ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-background hover:border-primary'}`}
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden -mx-4">
          <div 
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4" 
              >
                <article 
                  className="bg-surface rounded-lg overflow-hidden border border-white/5 hover:border-primary transition-all duration-300 flex flex-col h-[480px] md:h-[450px] group shadow-lg"
                >
                  <div className={`h-40 md:h-48 bg-background relative overflow-hidden border-b border-white/5 flex items-center justify-center shrink-0`}>
                    <div className={`absolute inset-0 bg-gradient-radial ${project.color} via-background to-background opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <project.icon className="w-16 h-16 text-primary/50 group-hover:scale-110 group-hover:text-primary transition-all duration-300 relative z-10" />
                  </div>

                  <div className="p-6 flex flex-col flex-1 h-full">
                  <div className="flex justify-between items-start mb-4 gap-4 shrink-0"> 
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2" title={project.title}>
                      {project.title}
                    </h3>
                    <div className="flex gap-3 shrink-0">
                      {project.links.code && (
                        <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-text hover:text-white transition-colors" title="View Source">
                          <Code size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto pr-2 mb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/50">
                    <p className="text-text/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto shrink-0">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono px-2 py-1 rounded bg-primary/5 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide group ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;