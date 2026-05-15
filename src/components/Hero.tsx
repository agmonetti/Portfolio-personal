import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BadgeCheck, Mail, Github, Linkedin, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="w-full" id="hero">
      <div className="mx-auto max-w-4xl px-6 py-5 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-diagonal">
        <h1 className="text-3xl heading-display text-darker dark:text-text-dark sm:text-4xl">
          Agustín Monetti
        </h1>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6">
          <button className="group relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-neutral-300/80 dark:border-neutral-700 bg-white dark:bg-black shadow-[0_12px_30px_-24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5" aria-label="Avatar">
            <span className="text-2xl font-bold tracking-[0.2em] text-darker dark:text-text-dark">AM</span>
            <span className="absolute -bottom-1 -right-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary text-white shadow-[0_0_0_6px_rgba(15,159,110,0.14)]">
              <BadgeCheck className="h-4 w-4" />
            </span>
          </button>

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <p className="max-w-2xl text-lg text-text/75 dark:text-text-dark/75">
                {t('hero.role')}
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-xs tracking-widest text-text/50 dark:text-text-dark/50 mb-4">CONNECT</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://github.com/agmonetti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-neutral-300/60 dark:border-neutral-700 text-sm text-text/80 dark:text-text-dark/80 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/agustin-monetti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-neutral-300/60 dark:border-neutral-700 text-sm text-text/80 dark:text-text-dark/80 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href="mailto:agus.monetti01@gmail.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-neutral-300/60 dark:border-neutral-700 text-sm text-text/80 dark:text-text-dark/80 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                  <Mail className="h-4 w-4" />
                  Mail
                </a>
                <a href="/resume" className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-neutral-300/60 dark:border-neutral-700 text-sm text-text/80 dark:text-text-dark/80 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;