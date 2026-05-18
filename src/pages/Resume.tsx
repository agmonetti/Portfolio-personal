import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Resume: React.FC = () => {
  const { t } = useLanguage();
  const cvUrl = t('footer.cv') as string;
  const [cvEmbedUrl, setCvEmbedUrl] = useState(`${cvUrl}#zoom=80`);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const update = () => {
      const mobile = window.innerWidth < 640;
      const zoom = mobile ? 60 : 100;
      setIsMobile(mobile);
      setCvEmbedUrl(`${cvUrl}#zoom=${zoom}`);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [cvUrl]);

  return (
    <section className="w-full" id="resume">
      <div className="mx-auto max-w-4xl px-6 py-5 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-diagonal">
        <h1 className="text-4xl heading-display text-darker dark:text-text-dark sm:text-4xl">
          {t('resume.title')}
        </h1>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
        <div className="space-y-5">

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

          <div className="overflow-hidden bg-transparent">
            <div
              className="mx-auto w-full"
              style={isMobile ? { transform: 'scale(1.12)', transformOrigin: 'top center', width: '89%' } : undefined}
            >
              <iframe
                src={cvEmbedUrl}
                title={t('resume.title') as string}
                className="w-full h-[78vh] md:h-[80vh]"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
