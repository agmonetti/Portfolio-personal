import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 mt-6 mb-16 border-t border-neutral-300/70 dark:border-neutral-800">
      <div className="w-full mx-2 sm:mx-4 md:mx-auto md:max-w-5xl px-2 sm:px-4 md:px-6 flex items-center justify-between">
        <div className="w-full bg-transparent md:bg-transparent border border-neutral-200/60 dark:border-neutral-800/60 rounded-lg md:rounded-none p-3 pb-6 md:p-0 md:pb-0 mt-2 md:mt-0">
          <div className="flex items-center justify-between">
            {/* Textos a la izquierda */}
            <div className="flex flex-col space-y-1 text-sm font-mono text-text/60 dark:text-text-dark/60">
              <p>{t('footer.copyright')}</p>
              <p>{t('footer.builtWith')}</p>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;