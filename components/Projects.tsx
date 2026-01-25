import React, { useState } from 'react';
import { ExternalLink, Code, Bot, LayoutGrid, ShieldCheck, ChevronLeft, ChevronRight, Terminal, Cpu, Globe } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  // Added more projects to demonstrate the carousel functionality
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
      description: "A comprehensive architecture showcase demonstrating data handling across multiple database paradigms simultaneously, ensuring data integrity.",
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
    },
    {
      title: "Cloud API Gateway",
      description: "A high-performance API Gateway acting as a single entry point for microservices, handling rate limiting, authentication, and request routing.",
      tags: ["Go", "Docker", "gRPC"],
      icon: ServerIcon,
      links: { code: "#" },
      color: "from-orange-900/40"
    },
    {
      title: "DevOps Dashboard",
      description: "Internal tool for monitoring CI/CD pipelines, visualizing build status, and deployment metrics across multiple environments.",
      tags: ["React", "AWS", "Grafana"],
      icon: Cpu,
      links: { code: "#", demo: "#" },
      color: "from-cyan-900/40"
    },
    {
      title: "Global CDN simulation",
      description: "A simulation of a Content Delivery Network content routing algorithm to optimize latency based on geographic user location.",
      tags: ["C++", "Algorithms", "Networking"],
      icon: Globe,
      links: { code: "#" },
      color: "from-pink-900/40"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper to handle responsive slides (1 on mobile, 2 tablet, 3 desktop)
  // For simplicity in this view, we slide one by one, but visual width changes via CSS
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
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
              className="p-3 rounded-full border border-white/10 bg-surface hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-white/10 bg-surface hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative overflow-hidden -mx-4 px-4 py-4">
          <div 
            className="flex gap-8 transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(calc(-${currentIndex} * (100% / 1.1) ))` }} // Mobile default logic
          >
            {projects.map((project, idx) => (
              <article 
                key={idx}
                className="min-w-[90%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.5rem)] bg-surface rounded-lg overflow-hidden border border-white/5 hover:border-primary transition-all duration-300 flex flex-col h-[450px] group shadow-lg"
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
            ))}
          </div>
        </div>
        
        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Quick Fix: Define ServerIcon locally if needed, or use Terminal as fallback for demo
const ServerIcon = Terminal; 

export default Projects;