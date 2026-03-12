import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  // funcion traductura tomada del context
  const { t } = useLanguage();

  // aseguramos que esto es un arreglo, por posible problema con typescript y la traducción
  const freelanceTasks: string[] = t('experience.freelance.tasks') || [];

  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-primary font-mono text-xl">03.</span> 
            {/*mismo problema con el estilo del numero*/}
            {t('experience.title').replace('03. ', '')}
          </h2>
        </div>

        <div className="relative border-l-2 border-white/10 ml-3 pl-8 pb-4 space-y-16">
          
          {/* Item 1: Soporte IT Freelance */}
          <div className="relative group">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-[0_0_0_4px_rgba(102,252,241,0.2)]"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {t('experience.freelance.role')}
              </h3>
              <span className="font-mono text-sm text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20 mt-2 sm:mt-0 w-fit">
                {t('experience.freelance.date')}
              </span>
            </div>
            
            <h4 className="text-secondary font-medium mb-4">{t('experience.freelance.company')}</h4>
            
            <ul className="list-disc list-inside space-y-2 text-text/80 marker:text-primary">
              {Array.isArray(freelanceTasks) && freelanceTasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>

          {/* Item 2: Universidad */}
          <div className="relative group">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-secondary shadow-[0_0_0_4px_rgba(69,162,158,0.2)]"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                {t('experience.university.role')}
              </h3>
              <span className="font-mono text-sm text-secondary bg-secondary/10 px-2 py-1 rounded border border-secondary/20 mt-2 sm:mt-0 w-fit">
                {t('experience.university.date')}
              </span>
            </div>
            
            <h4 className="text-secondary font-medium mb-1">{t('experience.university.company')}</h4>
            <p className="text-text/60 text-sm mb-4">{t('experience.university.location')}</p>
            
            <p className="text-text/80 leading-relaxed">
              {t('experience.university.description')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;