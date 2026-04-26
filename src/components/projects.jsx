import { projects } from '../data/data';
import { motion } from 'framer-motion';

function Projects() {
    return (
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                    <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
                    Featured Projects
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((p, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/5"
                    >
                        <div className="overflow-hidden h-72">
                            <img 
                                src={p.image} 
                                alt={p.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                        </div>
                        <div className="p-10">
                            <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed line-clamp-2">{p.description}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {p.tech.map(t => (
                                    <span key={t} className="text-xs font-semibold bg-blue-500/5 text-blue-400 border border-blue-500/10 px-4 py-1.5 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-6">
                                <a href={p.link} className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors font-medium">
                                    Code
                                </a>
                                <a href={p.link} className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors font-medium">
                                    Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
