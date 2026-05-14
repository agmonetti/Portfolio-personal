import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Terminal, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.home'),     href: '/',        external: false },
    { name: t('navbar.projects'), href: '/projects', external: false },
    { name: 'Curriculum',         href: '/resume',   external: false },
  ];

  const LanguageToggle = () => (
    <div className="flex items-center gap-2 bg-surface dark:bg-surface-dark border border-neutral-200 dark:border-neutral-700 rounded-full px-3 py-1 text-xs font-mono">
      <button
        onClick={() => setLanguage('es')}
        className={`transition-colors duration-200 ${language === 'es' ? 'text-primary font-bold' : 'text-text dark:text-text-dark hover:text-primary'}`}
      >
        ES
      </button>
      <span className="text-text/40 dark:text-text-dark/40 select-none">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`transition-colors duration-200 ${language === 'en' ? 'text-primary font-bold' : 'text-text dark:text-text-dark hover:text-primary'}`}
      >
        EN
      </button>
    </div>
  );

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-surface dark:bg-surface-dark border border-neutral-200 dark:border-neutral-700 text-text dark:text-text-dark hover:text-primary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );

  return (
    <>
      {/* Desktop */}
      <nav
        className={`hidden md:block fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            /*
              Al hacer scroll: fondo blanco 92% opaco + blur para que el
              dot grid se vea suavemente detrás de la navbar.
              Sin scroll: completamente transparente — el grid del body
              es la única "textura".
            */
            ? 'bg-white/92 dark:bg-[#0a0a0a]/92 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal className="text-primary w-5 h-5" />
            <span className="font-semibold text-lg text-darker dark:text-text-dark tracking-tight group-hover:text-primary transition-colors">
              Agustín.dev
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text dark:text-text-dark hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-text dark:text-text-dark hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            <ThemeToggle />
            <LanguageToggle />


          </div>
        </div>
      </nav>

      {/* Mobile */}
      <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-sm">
        <nav className="flex justify-evenly items-center bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-neutral-200/70 dark:border-neutral-800/70 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.08)] rounded-full px-3 py-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const displayName = link.name === 'Curriculum' ? 'CV' : link.name;

            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2 py-1 text-xs sm:text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-text/70 dark:text-text-dark/70 hover:text-primary'
                }`}
              >
                {displayName}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`px-2 py-1 text-xs sm:text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-text/70 dark:text-text-dark/70 hover:text-primary'
                }`}
              >
                {displayName}
              </Link>
            );
          })}

          <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-700 mx-1" />

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-text dark:text-text-dark hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
          </button>

          <div className="flex items-center gap-1 bg-surface dark:bg-surface-dark rounded-full px-2 py-1 text-[10px] sm:text-xs font-mono border border-neutral-200 dark:border-neutral-700">
            <button
              onClick={() => setLanguage('es')}
              className={`${language === 'es' ? 'text-primary font-bold' : 'text-text/60 dark:text-text-dark/60'}`}
            >
              ES
            </button>
            <span className="text-text/30 dark:text-text-dark/30">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`${language === 'en' ? 'text-primary font-bold' : 'text-text/60 dark:text-text-dark/60'}`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;