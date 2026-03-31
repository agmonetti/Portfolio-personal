import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  // extraemos con las 3 opciones el idioma actual, la funcion para cambiarlo y el traductor
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // traducimos enlaces del navbar
  const navLinks = [
    { name: t('navbar.home'), href: '/', external: false },
    { name: t('navbar.projects'), href: '/projects', external: false },
    { name: 'Curriculum', href: t('footer.cv'), external: true }

  ];

  // toggle visual
  const LanguageToggle = () => (
    <div className="flex items-center gap-2 bg-surface border border-neutral-200 rounded-full px-3 py-1 text-xs font-mono">
      <button
        onClick={() => setLanguage('es')}
        className={`transition-colors duration-200 ${language === 'es' ? 'text-primary font-bold' : 'text-text hover:text-primary'}`}
      >
        ES
      </button>
      <span className="text-text/40 select-none">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`transition-colors duration-200 ${language === 'en' ? 'text-primary font-bold' : 'text-text hover:text-primary'}`}
      >
        EN
      </button>
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur border-b border-neutral-200 shadow-sm' : 'bg-background'}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Terminal className="text-primary w-5 h-5" />
          <span className="font-semibold text-lg text-darker tracking-tight group-hover:text-primary transition-colors">Agustín.dev</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            link.external ? (
              <a 
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-text hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          
          {/* toggle idioma desktop */}
          <LanguageToggle />

          <a 
            href="/#about" 
            className="border border-primary text-primary px-4 py-2 rounded text-sm font-medium hover:bg-primary hover:text-white transition-all"
          >
            {t('navbar.contact')} {/* botón de contacto */}
          </a>
        </div>

        {/* Mobile button */}
        <button 
          className="md:hidden text-primary" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-neutral-200 p-6 md:hidden flex flex-col gap-4 shadow-sm">
           {navLinks.map((link) => (
            link.external ? (
              <a 
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary block py-2"
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.href}
                to={link.href}
                className="text-text hover:text-primary block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          
          {/* toggle idioma mobile */}
          <div className="flex justify-center py-2 border-y border-neutral-200 my-2">
            <LanguageToggle />
          </div>

           <a 
            href="/#about" 
            className="border border-primary text-primary px-4 py-2 rounded text-center font-medium mt-2 hover:bg-primary hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t('navbar.contact')}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;