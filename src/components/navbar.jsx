import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

function Navbar({ isDarkMode, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-950/90 backdrop-blur-md py-4 border-b border-slate-200 dark:border-slate-800' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent tracking-tighter cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    sanwaljaved
                </motion.h1>
                <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-600 dark:text-slate-300 items-center">
                    <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider">Skills</a>
                    <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider">Projects</a>
                    <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider">Experience</a>
                    <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider">Education</a>
                    
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:ring-2 hover:ring-blue-500 transition-all"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all shadow-md"
                    >
                        Hire Me
                    </motion.a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
