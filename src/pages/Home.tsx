import React from 'react';
import Hero from '../components/Hero';
import Arsenal from '../components/Arsenal';
import Experience from '../components/Experience';
import About from '../pages/About';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Arsenal />

    </>
  );
};

export default Home;
