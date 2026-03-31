import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  // funcion traductura tomada del context
  const { t } = useLanguage();

  // aseguramos que esto es un arreglo, por posible problema con typescript y la traducción
  const freelanceTasks: string[] = t('experience.freelance.tasks') || [];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl font-bold text-darker dark:text-text-dark">{t('experience.title')}</h2>
        </div>

        <div className="relative border-l border-neutral-200 dark:border-neutral-700 ml-3 pl-8 pb-4 space-y-12">
          
          {/* Item 1: Soporte IT Freelance */}
          <div className="relative group">
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-background dark:border-background-dark bg-primary shadow-[0_0_0_6px_rgba(15,159,110,0.15)]"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-semibold text-darker dark:text-text-dark">
                {t('experience.freelance.role')}
              </h3>
              <span className="font-mono text-xs text-primary bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded border border-primary/20 dark:border-primary/30 mt-2 sm:mt-0 w-fit">
                {t('experience.freelance.date')}
              </span>
            </div>
            
            <h4 className="text-secondary dark:text-secondary-dark font-medium mb-3">{t('experience.freelance.company')}</h4>
            
            <ul className="list-disc list-inside space-y-2 text-text/80 dark:text-text-dark/80 marker:text-primary">
              {Array.isArray(freelanceTasks) && freelanceTasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>

          {/* Item 2: Universidad */}
          <div className="relative group">
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-background dark:border-background-dark bg-secondary shadow-[0_0_0_6px_rgba(12,122,88,0.1)]"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-semibold text-darker dark:text-text-dark">
                {t('experience.university.role')}
              </h3>
              <span className="font-mono text-xs text-secondary dark:text-secondary-dark bg-secondary/10 dark:bg-secondary-dark/20 px-2 py-1 rounded border border-secondary/20 dark:border-secondary-dark/30 mt-2 sm:mt-0 w-fit">
                {t('experience.university.date')}
              </span>
            </div>
            
            <h4 className="text-secondary dark:text-secondary-dark font-medium mb-1">{t('experience.university.company')}</h4>
            <p className="text-text/60 dark:text-text-dark/60 text-sm mb-3">{t('experience.university.location')}</p>
            
            <p className="text-text/80 dark:text-text-dark/80 leading-relaxed">
              {t('experience.university.description')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;