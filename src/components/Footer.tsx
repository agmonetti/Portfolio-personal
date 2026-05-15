import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 mt-6 mb-16 border-t border-neutral-300/70 dark:border-neutral-800">
      <div className="mx-auto max-w-4xl px-6 flex items-center justify-between">
        
        {/* Textos a la izquierda */}
        <div className="flex flex-col space-y-1 text-sm font-mono text-text/60 dark:text-text-dark/60">
          <p>{t('footer.copyright')}</p>
          <p>{t('footer.builtWith')}</p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;