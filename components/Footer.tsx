import React from 'react';
import { Code, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-background flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
        
        <p className="text-text/60 text-lg leading-relaxed mb-8 max-w-md">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:agus.monetti01@gmail.com" 
          className="text-primary font-mono text-lg md:text-xl hover:text-primary/80 transition-colors duration-300 mb-16 tracking-wide"
        >
          agus.monetti01@gmail.com
        </a>

        <div className="flex gap-12 mb-16">
           <Code className="text-text/40 w-6 h-6" />
           <Briefcase className="text-text/40 w-6 h-6" />
        </div>

        <div className="flex flex-col items-center gap-2">
            <p className="text-text/40 text-xs font-mono">
            Designed & Built by Agustín Monetti
            </p>
            <p className="text-text/40 text-xs font-mono">
            © 2023 All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;