import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-white/5 bg-background text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        <p className="text-text/80 max-w-md">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:agus.monetti01@gmail.com" 
          className="font-mono text-lg text-primary hover:underline underline-offset-4 decoration-2 flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          agus.monetti01@gmail.com
        </a>

        <div className="flex gap-6 mt-4">
          <a href="#" className="text-text hover:text-white hover:-translate-y-1 transition-all duration-300 p-2 border border-transparent hover:border-white/10 rounded-full">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-text hover:text-white hover:-translate-y-1 transition-all duration-300 p-2 border border-transparent hover:border-white/10 rounded-full">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-12 text-sm text-text/40 font-mono">
          <p>Designed & Built by Agustín Monetti</p>
          <p className="text-xs mt-2">© 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;