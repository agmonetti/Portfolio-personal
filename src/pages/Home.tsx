import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import About from '../pages/About';
import GithubCalendar from '../components/GithubCalendar';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
       <Experience />
      <GithubCalendar />
      <Projects limit={3} />

    </>
  );
};

export default Home;
