import Navbar from './components/Navbar';
import React from "react"
import { LanguageProvider } from './contexts/LanguageContext'; 
import { ThemeProvider } from './contexts/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Resume from './pages/Resume';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-transparent text-text dark:text-text-dark font-sans antialiased selection:bg-primary/15 selection:text-darker dark:selection:text-text-dark transition-colors duration-300">
          <Navbar />
          <main className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-24 pb-20 sm:px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;