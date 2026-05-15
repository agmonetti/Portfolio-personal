import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 1. Importas el Footer
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
        <div className="min-h-screen flex flex-col text-text dark:text-text-dark font-sans antialiased selection:bg-primary/15 selection:text-darker dark:selection:text-text-dark transition-colors duration-300">
          <Navbar />
          <main className="flex-grow w-full flex flex-col pt-24"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>

          <Footer /> {/* 2. Agregas el Footer al final */}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;