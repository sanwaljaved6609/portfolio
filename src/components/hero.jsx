import React from 'react'
import { motion } from 'framer-motion';
import { bio } from '../data/data';

function Hero() {
    return (
        <section id="home" className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500/30 overflow-hidden mx-auto shadow-2xl shadow-blue-500/10">
                        <img 
                            src={bio.profileImage} 
                            alt={bio.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <motion.div
                        className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-slate-950 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="text-blue-600 dark:text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Available for work</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-slate-900 dark:text-white">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">{bio.name}</span>
                    </h1>
                    <p className="text-slate-700 dark:text-slate-300 text-xl md:text-2xl font-semibold mb-6">
                        {bio.title}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        {bio.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact" 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition shadow-lg shadow-blue-500/20"
                        >
                            Hire Me Now
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects" 
                            className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold transition"
                        >
                            View Projects
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero
