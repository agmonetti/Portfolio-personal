import React from 'react';

const Arsenal: React.FC = () => {
  const logos = [
    { name: 'Python', src: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Java', src: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
    { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Docker', src: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Google Cloud', src: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
    { name: 'Linux', src: 'https://cdn.simpleicons.org/linux/FCC624' },
    { name: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'MongoDB', src: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Redis', src: 'https://cdn.simpleicons.org/redis/DC382D' },
  ];

  return (
    <section id="technologies" className="hidden">
      <div className="mx-auto max-w-4xl border-b border-neutral-300/70 dark:border-neutral-800 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300/80 dark:border-neutral-700 bg-white/65 dark:bg-surface-dark/65 shadow-[0_10px_24px_-22px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform hover:-translate-y-0.5"
              title={logo.name}
              aria-label={logo.name}
            >
              <img src={logo.src} alt={logo.name} className="h-7 w-7 transition-transform group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arsenal;