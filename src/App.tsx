import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import { LanguageProvider } from './context/LanguageContext'; 
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

const App: React.FC = () => {
  return (
  <LanguageProvider>
    <div className="bg-background text-text font-sans antialiased selection:bg-primary/15 selection:text-darker min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      </div>
    </LanguageProvider>
  );
};

export default App;