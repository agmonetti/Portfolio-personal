import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  // funcion traductura tomada del context
  const { t } = useLanguage();

  // aseguramos que esto es un arreglo, por posible problema con typescript y la traducción
  const freelanceTasks: string[] = t('experience.freelance.tasks') || [];

  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl border-b border-neutral-300/70 dark:border-neutral-800 pb-10 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-darker dark:text-text-dark sm:text-3xl">{t('experience.title')}</h2>

        <div className="space-y-0">
          <article className="grid gap-4 border-t border-neutral-300/70 dark:border-neutral-800 py-6 md:grid-cols-[220px_1fr] md:gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-darker dark:text-text-dark">{t('experience.freelance.role')}</h3>
              <p className="text-sm text-text/65 dark:text-text-dark/65">{t('experience.freelance.company')}</p>
              <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">{t('experience.freelance.date')}</span>
            </div>

            <ul className="space-y-2 text-sm leading-7 text-text/85 dark:text-text-dark/85 sm:text-base">
              {Array.isArray(freelanceTasks) && freelanceTasks.map((task, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="grid gap-4 border-t border-neutral-300/70 dark:border-neutral-800 py-6 md:grid-cols-[220px_1fr] md:gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-darker dark:text-text-dark">{t('experience.university.role')}</h3>
              <p className="text-sm text-text/65 dark:text-text-dark/65">{t('experience.university.company')}</p>
              <span className="inline-flex rounded-full border border-neutral-300/80 dark:border-neutral-700 bg-white/60 dark:bg-surface-dark/60 px-3 py-1 text-xs font-mono text-text/70 dark:text-text-dark/70">{t('experience.university.date')}</span>
            </div>

            <div className="space-y-3 text-sm leading-7 text-text/85 dark:text-text-dark/85 sm:text-base">
              <p>{t('experience.university.description')}</p>
              <p className="text-text/60 dark:text-text-dark/60">{t('experience.university.location')}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;