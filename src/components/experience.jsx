import React from 'react';
import { experiences } from '../data/data';
import { motion } from 'framer-motion';

function Experience() {
    return (
        <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-16 flex items-center gap-4 text-slate-900 dark:text-white"
            >
                <span className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
                Work Experience
            </motion.h2>

            <div className="space-y-4">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-8 md:pl-12 border-l-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors pb-12 last:pb-0"
                    >
                        <div className="absolute -left-[9px] top-4 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-blue-600 dark:border-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-transform"></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors">{exp.role}</h3>
                            <span className="text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">{exp.period}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-6 flex items-center gap-2">
                            <span className="text-blue-600 dark:text-blue-500">@</span> {exp.company}
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl text-lg">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
