import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, Bot, LayoutGrid, ShieldCheck, ChevronLeft, ChevronRight, Server, Laptop } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "GCP Free-Tier Home Lab",
      description: "Production-grade microservices infrastructure on a restricted 1GB RAM instance. Hosts a heavy Selenium bot and a custom observability dashboard, optimized via advanced Linux swap management and Docker orchestration.",
      tags: ["Google Cloud", "Docker", "Linux Admin", "DevOps"],
      icon: Server,
      links: { code: "https://github.com/agmonetti/gcp-free-tier-linux-server", demo: "#" },
      color: "from-indigo-500/40"
    },
    {
      title: "Dell Latitude 7480 Hackintosh",
      description: "A highly optimized macOS Ventura environment running on non-Apple hardware. Features a custom OpenCore EFI, ACPI hot-patching, and specific driver tuning for ALPS I2C input devices.",
      tags: ["OpenCore", "ACPI/ASL", "Systems Engineering"],
      icon: Laptop,
      links: { code: "https://github.com/agmonetti/Hackintosh-Dell-Latitude-7480", demo: "#" },
      color: "from-purple-900/40"
    },
    {
      title: "Persistencia Políglota",
      description: "A comprehensive architecture showcase demonstrating data handling across multiple database paradigms simultaneously, ensuring data integrity.",
      tags: ["Java", "MongoDB", "Redis", "Neo4j"],
      icon: LayoutGrid,
      links: { code: "https://github.com/agmonetti/Sistema-Clima_TUI" },
      color: "from-pink-900/40"
    },
    {
      title: "Subte Alerta Bot",
      description: "An automated Telegram bot that provides real-time alerts for the Buenos Aires subway system. It scrapes data efficiently to keep commuters informed instantly.",
      tags: ["Python", "Telegram API", "Scraping"],
      icon: Bot,
      links: { code: "https://github.com/agmonetti/Bot-Subte", demo: "#" },
      color: "from-blue-900/40"
    },
    {
      title: "Cookie Analyzer",
      description: "A browser-based security tool to analyze tracking cookies, visualizing data flow and privacy risks for end-users in an intuitive interface.",
      tags: ["JavaScript", "Privacy", "DOM API"],
      icon: ShieldCheck,
      links: { code: "https://github.com/agmonetti/cookie_analyzer", demo: "#" },
      color: "from-emerald-900/40"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Responsive logic to determine how many items are visible
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

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the maximum index we can scroll to
  // If we have 5 items and show 3, max index is 2 (shows items 2, 3, 4)
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
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-primary font-mono text-xl">02.</span> Featured Projects
            </h2>
            <p className="text-text/70 max-w-2xl">
              Swipe through selected works demonstrating engineering capabilities.
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

        {/* Carousel Window */}
        <div className="relative overflow-hidden -mx-4">
          <div 
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4" 
                // We use padding (px-4) to create the gap effect instead of flex gap, making math easier
              >
                <article 
                  className="bg-surface rounded-lg overflow-hidden border border-white/5 hover:border-primary transition-all duration-300 flex flex-col h-[450px] group shadow-lg"
                >
                  {/* Visual Header */}
                  <div className={`h-48 bg-background relative overflow-hidden border-b border-white/5 flex items-center justify-center shrink-0`}>
                    <div className={`absolute inset-0 bg-gradient-radial ${project.color} via-background to-background opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <project.icon className="w-16 h-16 text-primary/50 group-hover:scale-110 group-hover:text-primary transition-all duration-300 relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors truncate pr-2">{project.title}</h3>
                      <div className="flex gap-3 shrink-0">
                        {project.links.code && (
                          <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-text hover:text-white transition-colors" title="View Source">
                            <Code size={20} />
                          </a>
                        )}
                        {project.links.demo && (
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-text hover:text-white transition-colors" title="Live Demo">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-text/80 text-sm mb-6 flex-1 leading-relaxed overflow-hidden text-ellipsis">
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
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress Indicator */}
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