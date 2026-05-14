import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  const body = t('about.body') as string;
  const points = body
    ?.split(/(?<=[.!?])\s+/)
    .map((s: string) => s.trim())
    .filter((s: string) => s.length > 0);

  const downloadTitle = t('footer.downloadCv') as string;
  const contacts = [
    { label: 'GitHub', href: 'https://github.com/agmonetti', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/agustin-monetti', icon: Linkedin },
    { label: 'Mail', href: 'mailto:agus.monetti01@gmail.com', icon: Mail },
    { label: 'CV', href: '/resume', icon: FileText, title: downloadTitle },
  ];

  return (
    <section className="mt-16 py-10 sm:mt-20 sm:py-12" id="about">
      <div className="mx-auto max-w-4xl border-b border-neutral-300/70 dark:border-neutral-800 pb-8 space-y-6">
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

        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-text/45 dark:text-text-dark/45">{t('contact.title')}</h3>
          <div className="flex flex-wrap gap-2">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 dark:border-neutral-700 bg-white/55 dark:bg-black/55 px-3.5 py-2 text-sm font-medium text-text dark:text-text-dark transition-colors hover:border-primary/30 hover:text-primary"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={item.title}
                aria-label={item.title || item.label}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
