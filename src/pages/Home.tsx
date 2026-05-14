import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import About from '../pages/About';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects limit={3} />

    </>
  );
};

export default Home;
