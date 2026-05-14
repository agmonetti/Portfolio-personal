import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const body = t('about.body') as string;
  const points = body
    ?.split(/(?<=[.!?])\s+/)
    .map((s: string) => s.trim())
    .filter((s: string) => s.length > 0);

  return (
      <section className="mt-2 py-6" id="about">
      <div className="mx-auto max-w-4xl pb-10 space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-darker dark:text-text-dark sm:text-3xl">{t('about.title')}</h2>
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
      <hr className="section-divider" />
    </section>
  );
};

export default About;
