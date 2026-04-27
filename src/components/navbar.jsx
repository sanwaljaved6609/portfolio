import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { bio } from '../data/data';

function Navbar({ isDarkMode, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Skills', href: '#skills' },
        { name: 'Process', href: '#process' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

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

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider">
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-8">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:ring-2 hover:ring-blue-500 transition-all"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={bio.cv}
                            download
                            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md text-sm"
                        >
                            <Download size={18} />
                            Download CV
                        </motion.a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-slate-800 dark:text-white p-1"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={bio.cv}
                                download
                                className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold"
                            >
                                <Download size={20} />
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar
