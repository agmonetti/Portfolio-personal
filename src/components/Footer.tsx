import React from 'react';
import { Github, Linkedin, Code, Briefcase , FileText} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  count?: number | null;
}

const Footer: React.FC<FooterProps> = ({ count })=> {
   // funcion traductura tomada del context
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-24 px-6 bg-background flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('contact.title')}</h2>
        
        <a 
          href="mailto:agus.monetti01@gmail.com" 
          className="text-primary font-mono text-lg md:text-xl hover:text-primary/80 transition-colors duration-300 mb-12 tracking-wide"
        >
          agus.monetti01@gmail.com
        </a>

        <div className="flex gap-6 mb-16">
          <a 
            href="https://github.com/agmonetti" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-surface hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6 text-text group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/agustin-monetti" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-surface hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 text-text group-hover:text-primary transition-colors" />
          </a>
          <a
            href={t('footer.cv')}
            download="Agustin_Monetti_CV.pdf"
            className="p-3 rounded-full border border-white/10 bg-surface text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 group relative"
            title={t('footer.downloadCv')} 
            aria-label={t('footer.downloadCv')} 
          >
            <FileText size={24} />
            
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface border border-white/10 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {t('footer.downloadCv')} 
            </span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
            <p className="text-text/40 text-xs font-mono">
              {t('footer.builtBy')} 
            </p>
            <p className="text-text/40 text-xs font-mono">
              {t('footer.copyright')} 
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;