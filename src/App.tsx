import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Arsenal from './components/Arsenal';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background text-text font-sans antialiased selection:bg-primary selection:text-background overflow-x-hidden">
{/* --- COMENTA ESTO TEMPORALMENTE (Inicio) --- */}
      {/* <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
      </div>
      */}
      {/* --- COMENTA ESTO TEMPORALMENTE (Fin) --- */}
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Arsenal />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;