import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-8 h-8" />,
        title: "Discovery",
        description: "Research and wireframing. I dive deep into requirements, understanding the 'why' before the 'how'.",
        subtext: "User flows, architecture planning, and competitor analysis."
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "Development",
        description: "Clean code and state management. I build scalable foundations using modern patterns and industry standards.",
        subtext: "Component-driven design, robust API integration, and performance optimization."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Deployment",
        description: "Testing and CI/CD. Ensuring the product is battle-tested and reaches users through automated pipelines.",
        subtext: "Unit testing, automated deployment, and continuous monitoring."
    }
];

function Process() {
    return (
        <section id="process" className="py-24 px-6 max-w-6xl mx-auto transition-colors duration-300">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 text-slate-900 dark:text-white">
                    <span className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
                    Development Process
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg max-w-2xl">
                    How I transform abstract ideas into production-ready software solutions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>

                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative group"
                    >
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2.5rem] h-full hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/5">
                            <div className="w-16 h-16 bg-blue-600/10 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            
                            <div className="absolute top-8 right-8 text-4xl font-black text-slate-100 dark:text-slate-800/50 -z-10 group-hover:text-blue-500/10 transition-colors">
                                0{idx + 1}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                {step.description}
                            </p>
                            
                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                                <ul className="space-y-2">
                                    {step.subtext.split(', ').map((text, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                                            <div className="w-1.5 h-1.5 bg-blue-600/40 dark:bg-blue-500/40 rounded-full"></div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        {idx < steps.length - 1 && (
                            <div className="hidden md:flex absolute -right-4 top-1/4 -translate-y-1/2 z-10 w-8 h-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full items-center justify-center text-slate-300 dark:text-slate-700">
                                <ArrowRight size={16} />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Process;
