import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-primary font-mono text-xl">03.</span> Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-white/10 ml-3 pl-8 pb-4 space-y-16">
          
          {/* Item 1 */}
          <div className="relative group">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-[0_0_0_4px_rgba(102,252,241,0.2)]"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Freelance IT Support</h3>
              <span className="font-mono text-sm text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20 mt-2 sm:mt-0 w-fit">2021 - Present</span>
            </div>
            
            <h4 className="text-secondary font-medium mb-4">Self-Employed</h4>
            
            <ul className="list-disc list-inside space-y-2 text-text/80 marker:text-primary">
              <li>Diagnosed and resolved complex hardware and software issues for a diverse client base.</li>
              <li>Optimized system performance and implemented backup solutions for small businesses.</li>
              <li>Provided consultation on hardware upgrades and network configurations.</li>
            </ul>
          </div>

          {/* Education Placeholder */}
          <div className="relative">
            <span className="absolute -left-[39px] top-0 h-4 w-4 rounded-full border-2 border-white/20 bg-surface"></span>
            <h3 className="text-lg font-bold text-text/60">Education</h3>
            <p className="text-sm text-text/60 mt-1">Computer Engineering Student</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;