import React from 'react';
import { Mail, Github, Linkedin, Send, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Gradient decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Info */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to scale <br />
              <span className="text-primary">your vision?</span>
            </h2>
            <p className="text-text/70 text-lg max-w-md leading-relaxed">
              Don't let your ideas die in the draft folder. Let's talk about how to convert your requirements into high-performance software.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <a 
              href="mailto:agus.monetti01@gmail.com" 
              className="flex items-center gap-4 group p-4 rounded-xl bg-surface/30 border border-white/5 hover:border-primary/30 transition-all duration-300 w-fit"
            >
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-text/50 uppercase tracking-wider">Email Me</span>
                <span className="text-white font-medium group-hover:text-primary transition-colors">agus.monetti01@gmail.com</span>
              </div>
            </a>

            <div className="flex gap-4">
               <a href="#" className="w-12 h-12 rounded-full bg-surface/30 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300">
                  <Github className="w-5 h-5" />
               </a>
               <a href="#" className="w-12 h-12 rounded-full bg-surface/30 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" className="w-12 h-12 rounded-full bg-surface/30 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300">
                  <Twitter className="w-5 h-5" />
               </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-[#111] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative group">
           {/* Card Glow */}
           <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
           
           <form className="relative flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono font-bold text-text/60 uppercase tracking-wider ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Agustín Monetti" 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono font-bold text-text/60 uppercase tracking-wider ml-1">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="hello@example.com" 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono font-bold text-text/60 uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-cyan-400 text-background font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(102,252,241,0.39)]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
           </form>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-text/40 text-sm font-mono">
        <p>© 2026 Agustín Monetti. All rights reserved.</p>
        <p>Built with React & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;