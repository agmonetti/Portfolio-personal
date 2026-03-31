import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any; // para soportar strings o arrays , funcion traductora
}
// se crea el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
// diccionarios
const dictionaries = { es, en };

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // logica de prioridad, es decir, ,se sigue cierta jerarquia
    const [language, setLanguageState] = useState<Language>(() => {
    // 1. lee la URL (?lang=en)
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'es' || urlLang === 'en') return urlLang;

    // 2. se revisa el local storage
    const localLang = localStorage.getItem('portfolio_lang');
    if (localLang === 'es' || localLang === 'en') return localLang as Language;

    // 3.checkeo del idioma del navegador del usuario
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    return browserLang;
  });

  // entoncesm, cada vez que el idioma cambie, actualizamos el entorno
  useEffect(() => {
      // A. Actualizar la URL silenciosamente
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);
      window.history.replaceState({}, '', url.toString());

      // B. Guardar en memoria local
      localStorage.setItem('portfolio_lang', language);

      // C. Actualizar etiquetas HTML para SEO
      document.documentElement.lang = language;
      
      // D. Actualizar la Meta Descripción dinámicamente
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", language === 'es' ? es.seo.description : en.seo.description);
      }
    }, [language]);

  // la traduccion
  const t = (key: string) => {
    const keys = key.split('.'); // Convierte "hero.title" en ["hero", "title"]
    let value: any = dictionaries[language];
    
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    // Si no encuentra la llave, devuelve la llave misma para que te des cuenta del error
    return value || key; 
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageState, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// hook para componetizarlo
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};