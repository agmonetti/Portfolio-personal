import Navbar from './components/Navbar';
import React from "react"
import { LanguageProvider } from './contexts/LanguageContext'; 
import { ThemeProvider } from './contexts/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-background dark:bg-background-dark text-text dark:text-text-dark font-sans antialiased selection:bg-primary/15 selection:text-darker dark:selection:text-text-dark min-h-screen transition-colors duration-300">
          <Navbar />
          <main className="max-w-5xl mx-auto px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;