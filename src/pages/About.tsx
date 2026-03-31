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
    { label: 'CV', href: t('footer.cv') as string, icon: FileText, title: downloadTitle },
  ];

  return (
    <section className="py-16 px-6" id="about">
      <div className="max-w-5xl mx-auto border-t border-neutral-200 dark:border-neutral-700 pt-10 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-darker dark:text-text-dark mb-6">{t('about.title')}</h1>
          {Array.isArray(points) && points.length > 0 ? (
            <ul className="space-y-3 text-text/90 dark:text-text-dark/90 leading-relaxed">
              {points.map((point: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary/70 inline-flex"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-text/90 dark:text-text-dark/90 leading-relaxed">{body}</p>
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-darker dark:text-text-dark">{t('contact.title')}</h2>
          <div className="flex flex-wrap gap-3">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-text dark:text-text-dark hover:border-primary hover:text-primary transition-colors shadow-[0_6px_18px_-14px_rgba(0,0,0,0.35)] dark:shadow-[0_6px_18px_-14px_rgba(15,159,110,0.15)]"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={item.title}
                aria-label={item.title || item.label}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
