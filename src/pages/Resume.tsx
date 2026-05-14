import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Resume: React.FC = () => {
  const { t } = useLanguage();
  const cvUrl = t('footer.cv') as string;
  const cvEmbedUrl = `${cvUrl}#zoom=80`;

  return (
    <section className="py-16 px-6" id="resume">
      <div className="max-w-5xl mx-auto border-t border-neutral-200 dark:border-neutral-700 pt-10 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-darker dark:text-text-dark">{t('resume.title')}</h1>
          <p className="text-text/80 dark:text-text-dark/80">{t('resume.subtitle')}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-white transition-colors"
          >
            {t('resume.download')}
          </a>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-text dark:text-text-dark font-medium text-sm hover:border-primary hover:text-primary transition-colors"
          >
            {t('resume.open')}
          </a>
        </div>

        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden bg-white dark:bg-surface-dark shadow-sm">
          <iframe
            src={cvEmbedUrl}
            title={t('resume.title') as string}
            className="w-full h-[70vh] md:h-[80vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
