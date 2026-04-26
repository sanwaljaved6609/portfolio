import React from 'react';
import { motion } from 'framer-motion';
import { bio } from '../data/data';

function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] p-1 md:p-2 shadow-2xl shadow-blue-500/20">
                <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-16">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build <br /> <span className="text-blue-400">something great.</span></h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative injection, I'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${bio.email}`} className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group">
                                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-blue-400/50">
                                </div>
                                <span className="text-lg font-medium">{bio.email}</span>
                            </a>
                            <div className="flex gap-4 pt-4">
                                <a href={bio.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-400/50 text-slate-400 hover:text-blue-400 transition-all">
                                </a>
                                <a href={bio.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-400/50 text-slate-400 hover:text-blue-400 transition-all">
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-slate-900/50 p-8 rounded-[2rem] border border-slate-800">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Name</label>
                                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Email</label>
                                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
