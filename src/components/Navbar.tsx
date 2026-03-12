import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.technologies'), href: '#technologies' },
    { name: t('navbar.experience'), href: '#experience' },
  ];

  // toggle visual
  const LanguageToggle = () => (
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-xs font-mono backdrop-blur-sm">
      <button
        onClick={() => setLanguage('es')}
        className={`transition-colors duration-200 ${language === 'es' ? 'text-primary font-bold' : 'text-text hover:text-white'}`}
      >
        ES
      </button>
      <span className="text-white/20 select-none">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`transition-colors duration-200 ${language === 'en' ? 'text-primary font-bold' : 'text-text hover:text-white'}`}
      >
        EN
      </button>
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
            <Terminal className="text-primary w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-xl text-white tracking-tight group-hover:text-primary transition-colors">Agustín.dev</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} // href como key porque queda constante, en cambio, el 'name' ahora cambia dinamicamente con el idioma
              href={link.href} 
              className="text-sm font-medium text-text hover:text-primary transition-colors hover:-translate-y-0.5"
            >
              {link.name}
            </a>
          ))}
          
          {/* toggle idioma desktop */}
          <LanguageToggle />

          <a 
            href="#contact" 
            className="border border-primary text-primary px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 transition-all"
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
        <div className="absolute top-full left-0 w-full bg-surface border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
           {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-text hover:text-primary block py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {/* toggle idioma mobile */}
          <div className="flex justify-center py-2 border-y border-white/5 my-2">
            <LanguageToggle />
          </div>

           <a 
            href="#contact" 
            className="border border-primary text-primary px-4 py-2 rounded text-center font-medium mt-2"
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