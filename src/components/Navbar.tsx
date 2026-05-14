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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.home'), href: '/', external: false },
    { name: t('navbar.projects'), href: '/projects', external: false },
    { name: t('navbar.resume'), href: '/resume', external: false },
  ];

  const isActive = (href: string, external: boolean) => {
    if (external) return false;
    return location.pathname === href;
  };

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-transparent text-text dark:text-text-dark hover:text-[var(--accent)] transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );

  const LanguageToggle = () => (
    <div className="inline-flex items-center gap-1 rounded-full border border-neutral-300/80 dark:border-neutral-700 bg-white/90 dark:bg-black/80 px-2 py-1 text-[11px] font-mono">
      <button
        onClick={() => setLanguage('es')}
        className={`rounded-full px-2 py-1 transition-colors ${language === 'es' ? 'font-semibold text-[var(--accent)]' : 'text-text/70 dark:text-text-dark/70 hover:text-[var(--accent)]'}`}
        aria-label="ES"
        title="ES"
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`rounded-full px-2 py-1 transition-colors ${language === 'en' ? 'font-semibold text-[var(--accent)]' : 'text-text/70 dark:text-text-dark/70 hover:text-[var(--accent)]'}`}
        aria-label="EN"
        title="EN"
      >
        EN
      </button>
    </div>
  );

  const Logo = () => (
    <Link to="/" className="inline-flex items-center gap-2 text-darker dark:text-text-dark group">
      <Terminal className="h-5 w-5 text-[var(--accent)]" />
      <span className="text-lg font-semibold tracking-tight">Agustín.dev</span>
    </Link>
  );

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 dark:bg-background-dark/90' : 'bg-background/80 dark:bg-background-dark/80'}`}>
        <div className="mx-auto flex w-full max-w-4xl items-center gap-3 px-4 py-3 sm:px-6">
          <div className="flex w-full items-center justify-center gap-6">
            <Logo />

            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          <nav className="flex items-center justify-center gap-6 text-sm text-text/80">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.external);
              const className = `${active ? 'font-semibold' : 'text-text/70'} px-2`;
              return link.external ? (
                <a key={link.href} href={link.href} className={className}>
                  {link.name}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className={className}>
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;