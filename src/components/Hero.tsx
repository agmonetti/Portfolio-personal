import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="h-auto sm:min-h-screen flex items-center justify-center pt-24 pb-12 px-6 mt-16 mb-8 sm:my-0">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 animate-fade-in-up"> 
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-mono text-primary font-medium">{t('hero.openToWork')}</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-mono text-primary font-medium">{t('hero.greeting')}</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-darker dark:text-text-dark tracking-tight leading-none">
              Agustín <br />
              <span className="text-primary">Monetti</span>
            </h1>
          </div>

          <h3 className="text-xl text-text/80 dark:text-text-dark/80 font-light max-w-lg border-l-2 border-primary/40 pl-4">
            {t('hero.role')}
          </h3>

        </div>

        {/* bloque derecho */}
        <div className="relative w-full max-w-xl mx-auto lg:mr-0 hidden md:block">
          <div className="relative bg-white dark:bg-surface-dark border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm dark:shadow-lg overflow-hidden font-mono text-sm md:text-base">
            <div className="flex items-center justify-between px-4 py-3 bg-surface dark:bg-surface-dark/80 border-b border-neutral-200 dark:border-neutral-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-xs text-slate-500">softwareEngineer.java</div>
              <div className="w-10"></div> 
            </div>

            <div className="p-6 overflow-x-auto text-slate-800 dark:text-slate-200 leading-relaxed">
              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">1</span>
                <div>
                  <span className="text-purple-400">public class</span>{" "}
                  <span className="text-yellow-300">softwareEngineer</span> {"{"}
                </div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">3</span>
                <div className="pl-4">
                  <span className="text-purple-400">private</span>{" "}
                  <span className="text-blue-400">String</span> name;
                </div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">4</span>
                <div className="pl-4">
                  <span className="text-purple-400">private</span>{" "}
                  <span className="text-blue-400">int</span> age;
                </div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">5</span>
                <div></div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">6</span>
                <div className="pl-4">
                  <span className="text-purple-400">public</span>{" "}
                  <span className="text-yellow-300">softwareEngineer</span>()
                </div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">7</span>
                <div className="pl-8">
                  <span className="text-purple-400">this</span>.name = Agustin Monetti;
                </div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">8</span>
                <div className="pl-8">
                  <span className="text-purple-400">this</span>.age = 22;
                </div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">9</span>
                <div className="pl-4">{"}"}</div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">10</span>
                <div></div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">11</span>
                <div className="pl-4">
                  <span className="text-purple-400">public</span>{" "}
                  <span className="text-blue-400">String[]</span> getSkills() {"{"}
                </div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">12</span>
                <div className="pl-8">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-purple-400">new</span>{" "}
                  <span className="text-blue-400">String[]</span> {"{"}
                </div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">13</span>
                <div className="pl-12">
                  <span className="text-green-400">"Python"</span>,{" "}
                  <span className="text-green-400">"Java"</span>,{" "}
                  <span className="text-green-400">"Docker"</span>,{" "}
                  <span className="text-green-400">"GCP"</span>,{" "}
                  <span className="text-green-400">"Linux"</span>
                </div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">14</span>
                <div className="pl-8">{"};"}</div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">15</span>
                <div className="pl-4">{"}"}</div>
              </div>

              <div className="flex">
                <span className="text-slate-600 mr-4 w-6">16</span>
                <div>{"}"}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;