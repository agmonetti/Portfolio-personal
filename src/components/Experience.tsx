import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  // funcion traductura tomada del context
  const { t } = useLanguage();

  // aseguramos que esto es un arreglo, por posible problema con typescript y la traducción
  const freelanceTasks: string[] = t('experience.freelance.tasks') || [];

  return (
    <section id="experience" className="w-full">
      <div className="mx-auto max-w-4xl px-6 py-5 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-diagonal">
        <h2 className="text-4xl heading-sketch text-darker dark:text-text-dark">
          {t('experience.title')}
        </h2>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
        <div className="space-y-6">
          <article className="grid gap-4 py-4 md:grid-cols-[220px_1fr] md:gap-8">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-darker dark:text-text-dark">{t('experience.freelance.role')}</h3>
              <p className="text-sm text-text/65 dark:text-text-dark/65">{t('experience.freelance.company')} · <span className="text-text/60">{t('experience.freelance.date')}</span></p>
            </div>

            <ul className="space-y-2 text-sm leading-7 text-text/85 dark:text-text-dark/85 sm:text-base list-none">
              {Array.isArray(freelanceTasks) && freelanceTasks.map((task, index) => (
                <li key={index} className="pl-0">
                  {task}
                </li>
              ))}
            </ul>
          </article>

          <article className="grid gap-4 py-4 md:grid-cols-[220px_1fr] md:gap-8">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-darker dark:text-text-dark">{t('experience.university.role')}</h3>
              <p className="text-sm text-text/65 dark:text-text-dark/65">{t('experience.university.company')} · <span className="text-text/60">{t('experience.university.date')}</span></p>
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