import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="flex flex-col gap-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-mono text-primary font-medium">Open to work</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-mono text-primary font-medium">Hello, World! I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
              Agustín <br />
              <span className="text-slate-400">Monetti</span>
            </h1>
          </div>

          <h3 className="text-xl text-text/80 font-light max-w-lg border-l-2 border-primary pl-4">
            Software Engineer | Technology Enthusiast
          </h3>

          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary text-background font-bold rounded hover:bg-white hover:shadow-neon transition-all duration-300 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              Contact Me
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Code Window */}
        <div className="relative w-full max-w-lg mx-auto lg:mr-0 perspective-1000 group hidden md:block">
           {/* Abstract Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-[#151b24] border border-white/10 rounded-xl shadow-2xl overflow-hidden font-mono text-sm md:text-base">
            {/* Window Controls */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117] border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-xs text-slate-500">developer.py</div>
              <div className="w-10"></div> 
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto text-slate-300 leading-relaxed">
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 text-right w-6">1</span>
                <div>
                    <span className="text-purple-400">class</span> <span className="text-yellow-300">SoftwareEngineer</span>:
                </div>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 text-right w-6">2</span>
                <div className="pl-4">
                    name <span className="text-purple-400">=</span> <span className="text-green-400">"Agustín Monetti"</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 text-right w-6">3</span>
                <div className="pl-4">
                    role <span className="text-purple-400">=</span> <span className="text-green-400">"Backend Specialist"</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 text-right w-6">4</span>
                <div className="pl-4"></div>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 text-right w-6">5</span>
                <div className="pl-4">
                    <span className="text-purple-400">def</span> <span className="text-blue-400">get_skills</span>(self):
                </div>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 text-right w-6">6</span>
                <div className="pl-8">
                    <span className="text-purple-400">return</span> [
                </div>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 text-right w-6">7</span>
                <div className="pl-12">
                    <span className="text-green-400">"Python"</span>, <span className="text-green-400">"Java"</span>,
                </div>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 text-right w-6">8</span>
                <div className="pl-12">
                    <span className="text-green-400">"Docker"</span>, <span className="text-green-400">"GCP"</span>
                </div>
              </div>
               <div className="flex">
                <span className="text-slate-600 select-none mr-4 text-right w-6">9</span>
                <div className="pl-8">
                    ]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;