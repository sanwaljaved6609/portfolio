import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Contact from './components/contact';

import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { bio } from './data/data';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen selection:bg-blue-500/30 overflow-x-hidden transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-slate-200 dark:border-slate-900 text-slate-500 text-sm bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-300 mb-6 uppercase tracking-widest">{bio.name}</h3>
          <p className="mb-8 text-slate-600 dark:text-slate-500">Crafting digital experiences with precision and passion.</p>
          
          <div className="flex justify-center gap-6 mb-10">
              <a href={bio.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github size={20} />
              </a>
              <a href={bio.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
              </a>
              <a href={bio.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Facebook size={20} />
              </a>
              <a href={bio.insta} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Instagram size={20} />
              </a>
          </div>

          <div className="w-12 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-400 dark:text-slate-600">© {new Date().getFullYear()} - Built with React, Tailwind & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
