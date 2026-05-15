import React, { useMemo } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const GithubCalendar: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Tu usuario de GitHub (sacado de tus links del Hero)
  const username = "agmonetti";

  const calendarTheme = useMemo(() => ({

    // Escala de grises (como en la imagen que enviaste)
    light: [
      '#ebedf0', // Nivel 0: Gris muy claro (vacío)
      '#cecece', // Nivel 1: Gris claro
      '#9e9e9e', // Nivel 2: Gris medio
      '#6e6e6e', // Nivel 3: Gris oscuro
      '#3d3d3d'  // Nivel 4: Gris casi negro
    ],
    // Versión invertida para el modo oscuro (para que contraste bien)
    dark: [
      '#1a1a1a', // Nivel 0: Tu color 'surface-dark'
      '#3d3d3d', // Nivel 1
      '#6e6e6e', // Nivel 2
      '#9e9e9e', // Nivel 3
      '#cecece'  // Nivel 4: Gris muy claro para que resalte en el fondo negro
    ],

  }), []);

  return (
    <section id="github-calendar" className="w-full">
      <div className="mx-auto max-w-4xl px-6 py-5 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-diagonal">
        <h2 className="text-4xl heading-sketch text-darker dark:text-text-dark">
          GitHub Contributions
        </h2>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
        <div className="flex justify-center p-6 border border-neutral-300/70 dark:border-neutral-800 rounded-xl bg-white/60 dark:bg-[#0b0f12]/70 overflow-x-auto">
          <GitHubCalendar 
            username={username} 
            colorScheme={theme as 'light' | 'dark'}
            theme={calendarTheme}
            fontSize={14}
            blockSize={12}
          />
        </div>
      </div>
    </section>
  );
};

export default GithubCalendar;