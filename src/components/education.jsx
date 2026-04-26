import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/data';
import { GraduationCap } from 'lucide-react';

function Education() {
    return (
        <section id="education" className="py-20 px-6 bg-slate-100/30 dark:bg-slate-900/30 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-4 text-slate-900 dark:text-white"
                >
                    <span className="w-8 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
                    Education
                </motion.h2>
                <div className="space-y-6">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start shadow-sm"
                        >
                            <div className="p-4 bg-blue-600/10 dark:bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400">
                                <GraduationCap size={32} />
                            </div>
                            <div className="flex-1 flex flex-col h-full w-full">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                                    <div className="mt-auto flex justify-end">
                                        <span className="text-sm font-mono text-black dark:text-gray-500">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">{edu.institution}</h4>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-6">{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
