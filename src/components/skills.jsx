import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';

function Skills() {
    return (
        <section id="skills" className="py-20 px-6 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                        <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
                        Technical Arsenal
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/5 group"
                        >
                            <h3 className="text-xl font-bold mb-8 text-blue-400 flex items-center justify-between">
                                {skillGroup.category}
                                <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400 transition-colors">0{idx + 1}</span>
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skillGroup.items.map((skill, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        whileHover={{ y: -5 }}
                                        className="flex flex-col items-center gap-3 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={skill.name}
                                            className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/40' }}
                                        />
                                        <span className="text-xs font-medium text-slate-400 text-center">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
