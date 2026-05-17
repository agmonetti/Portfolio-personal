import React, { useState, useEffect, useRef } from 'react';
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

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* Desktop */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            /*
              Al hacer scroll: fondo blanco 92% opaco + blur para que el
              dot grid se vea suavemente detrás de la navbar.
              Sin scroll: completamente transparente — el grid del body
              es la única "textura".
            */
            ? 'bg-white dark:bg-[#0a0a0a] border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-4xl mx-auto w-full px-6 lg:px-10 py-4 flex justify-between items-center">
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
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className="relative">
          <nav className="w-full bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur border-b border-neutral-200/70 dark:border-neutral-800/70 shadow-sm px-4 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <Terminal className="text-primary w-5 h-5" />
              <span className="font-semibold text-sm text-darker dark:text-text-dark">Agustín.dev</span>
            </Link>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <LanguageToggle />
              </div>
              <ThemeToggle />

              <button
                onClick={() => setMenuOpen((s) => !s)}
                className="p-1.5 ml-1 rounded-full text-text dark:text-text-dark hover:text-primary transition-colors"
                aria-label="Open menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="6" y="4" width="1.5" height="16" rx="0.35" />
                  <rect x="11.25" y="4" width="1.5" height="16" rx="0.35" />
                  <rect x="16.5" y="4" width="1.5" height="16" rx="0.35" />
                </svg>
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div ref={menuRef} className="absolute right-4 top-full mt-2 w-36 bg-white dark:bg-[#0a0a0a] border border-neutral-200/70 dark:border-neutral-800/70 rounded-md shadow-lg overflow-hidden">
              <div className="flex flex-col items-center py-1">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center px-3 py-3 text-sm text-text dark:text-text-dark hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  {t('navbar.home')}
                </Link>
                <Link
                  to="/projects"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center px-3 py-3 text-sm text-text dark:text-text-dark hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  {t('navbar.projects')}
                </Link>
                <Link
                  to="/resume"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center px-3 py-3 text-sm text-text dark:text-text-dark hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  CV
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;