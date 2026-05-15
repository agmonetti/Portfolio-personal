import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const body = t('about.body') as string;
  const points = body?.split(/(?<=[.!?])\s+/).map((s: string) => s.trim()).filter((s: string) => s.length > 0);

  return (
    <section className="w-full" id="about">
      
      {/* 1. Caja del Header (Fondo con rayas diagonales) */}
      <div className="mx-auto max-w-4xl px-6 py-5 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-diagonal">
        <h2 className="text-4xl heading-display text-darker dark:text-text-dark">
          {t('about.title')}
        </h2>
      </div>

      {/* 2. Caja del Contenido (Fondo sólido) */}
      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
        <div className="space-y-6">
          {Array.isArray(points) && points.length > 0 ? (
            <ul className="space-y-3 text-sm leading-7 text-text/85 dark:text-text-dark/85 sm:text-base">
              {points.map((point: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-3xl text-sm leading-7 text-text/85 dark:text-text-dark/85 sm:text-base">{body}</p>
          )}
        </div>
      </div>

    </section>
  );
};

export default About;