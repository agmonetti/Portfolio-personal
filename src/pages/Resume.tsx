import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Resume: React.FC = () => {
  const { t } = useLanguage();
  const cvUrl = t('footer.cv') as string;
  const cvEmbedUrl = `${cvUrl}#zoom=80`;

  return (
    <section className="py-12 sm:py-16" id="resume">
      <div className="mx-auto max-w-4xl border-b border-neutral-300/70 dark:border-neutral-800 pb-10 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-darker dark:text-text-dark sm:text-3xl">{t('resume.title')}</h1>
          <p className="max-w-2xl text-sm leading-7 text-text/80 dark:text-text-dark/80 sm:text-base">{t('resume.subtitle')}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
          >
            {t('resume.download')}
          </a>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 dark:border-neutral-700 bg-white/55 dark:bg-surface-dark/55 px-4 py-2 text-sm font-medium text-text dark:text-text-dark transition-colors hover:border-primary/30 hover:text-primary"
          >
            {t('resume.open')}
          </a>
        </div>

        <div className="overflow-hidden border border-neutral-300/70 dark:border-neutral-800 bg-white/40 dark:bg-surface-dark/40 backdrop-blur-sm">
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
