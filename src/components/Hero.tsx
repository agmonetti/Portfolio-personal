import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BadgeCheck, Mail, Github, Linkedin, FileText, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
  <section className="pt-20 pb-12 sm:pb-16">
  <div className="mx-auto max-w-4xl px-6 space-y-8 border-b border-neutral-300/70 dark:border-neutral-800 pb-10"><div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6">
          <button className="group relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-neutral-300/80 dark:border-neutral-700 bg-white dark:bg-black shadow-[0_12px_30px_-24px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5" aria-label="Avatar">
            <span className="text-2xl font-bold tracking-[0.2em] text-darker dark:text-text-dark">AM</span>
            <span className="absolute -bottom-1 -right-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary text-white shadow-[0_0_0_6px_rgba(15,159,110,0.14)]">
              <BadgeCheck className="h-4 w-4" />
            </span>
          </button>

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
                <h1 className="text-4xl font-semibold tracking-tight text-darker dark:text-text-dark sm:text-5xl">
                  Agustín Monetti
                </h1>
              <p className="max-w-2xl text-lg text-text/75 dark:text-text-dark/75">
                {t('hero.role')}
              </p>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-text/80 dark:text-text-dark/80 sm:text-base">
              Hola, soy un apasionado por la tecnología, combinando mi experiencia como especialista en Soporte IT con mis estudios en Ingeniería en Informática. Me enfoco en resolver problemas complejos y aprender constantemente nuevas tecnologías para construir soluciones simples y eficientes.
            </p>

            <div className="pt-4">
              <nav className="text-sm text-text/80 dark:text-text-dark/80 flex flex-wrap items-center gap-4">
                <a href="/#about" className="hover:underline">Sobre mí</a>
                <span className="text-text/40">·</span>
                <a href="/#projects" className="hover:underline">Proyectos</a>
                <span className="text-text/40">·</span>
                <a href="mailto:agus.monetti01@gmail.com" className="hover:underline">Mail</a>
                <span className="text-text/40">·</span>
                <a href="https://github.com/agmonetti" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                <span className="text-text/40">·</span>
                <a href="https://linkedin.com/in/agustin-monetti" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                <span className="text-text/40">·</span>
                <a href="/resume" className="hover:underline">Resume</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;