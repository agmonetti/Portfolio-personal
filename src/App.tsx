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
        {/*
          ⚠️ Se eliminó bg-background dark:bg-background-dark de este wrapper.
          El fondo (dot grid) vive en body dentro de App.css.
          Cualquier div sin bg explícito hereda el dot grid automáticamente.
        */}
        <div className="min-h-screen text-text dark:text-text-dark font-sans antialiased selection:bg-primary/15 selection:text-darker dark:selection:text-text-dark transition-colors duration-300">
          <Navbar />
          <main className="max-w-5xl mx-auto px-6">
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