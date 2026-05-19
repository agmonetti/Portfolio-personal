import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 1. Importas el Footer
import React, { Suspense, lazy } from "react"
import { LanguageProvider } from './contexts/LanguageContext'; 
import { ThemeProvider } from './contexts/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

const Resume = lazy(() => import('./pages/Resume'));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col text-text dark:text-text-dark font-sans antialiased selection:bg-primary/15 selection:text-darker dark:selection:text-text-dark transition-colors duration-300">
          <Navbar />

          {/* Wrapper principal: añade marco y margen lateral solo en pantallas pequeñas */}
          <main className="flex-grow w-full flex flex-col pt-24">
            <div className="mx-2 sm:mx-4 md:mx-auto md:max-w-5xl w-auto bg-transparent md:bg-transparent rounded-lg md:rounded-none border border-neutral-200/60 dark:border-neutral-800/60 md:border-0 p-2 md:p-0">
              <Suspense fallback={<div className="py-24 text-center text-sm text-text/60 dark:text-text-dark/60">Cargando currículum...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </Suspense>
            </div>
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;