import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Contact from './components/contact';

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-slate-900 text-slate-500 text-sm bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-bold text-slate-300 md-6 mb-8 uppercase tracking-widest">Sanwal Javed</h3>
          <p className="mb-4">Crafting digital experiences with precision and passion.</p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p>© {new Date().getFullYear()} - Built with React, Tailwind & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
