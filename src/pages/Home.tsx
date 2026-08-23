import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import About from '../pages/About';

const GithubCalendar = lazy(() => import('../components/GithubCalendar'));

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Suspense
        fallback={
          <section id="github-calendar" className="w-full">
            <div className="mx-auto max-w-4xl px-6 py-5 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-diagonal">
              <h2 className="text-4xl heading-display text-darker dark:text-text-dark">
                GitHub Contributions
              </h2>
            </div>
            <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10 border-x border-b border-neutral-300/70 dark:border-neutral-800 bg-white dark:bg-[#0a0a0a]">
              <div className="flex items-center justify-center p-6 min-h-[160px] border border-neutral-300/70 dark:border-neutral-800 rounded-xl bg-white/60 dark:bg-[#0b0f12]/70">
                <div className="h-6 w-6 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800" />
              </div>
            </div>
          </section>
        }
      >
        <GithubCalendar />
      </Suspense>
      <Projects limit={4} />
    </>
  );
};

export default Home;
