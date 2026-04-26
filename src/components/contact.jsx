import React from 'react';
import { motion } from 'framer-motion';
import { bio } from '../data/data';
import { Mail, Github, Linkedin, Facebook, Instagram, Send } from 'lucide-react';

function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const subject = `New message from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        window.location.href = `mailto:${bio.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto transition-colors duration-300">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] p-1 md:p-2 shadow-2xl shadow-blue-500/20">
                <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-16 transition-colors duration-300">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Let's build <br /> <span className="text-blue-600 dark:text-blue-400">something great.</span></h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                            I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative injection, I'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${bio.email}`} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                                <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 group-hover:border-blue-500/50 transition-all">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg font-medium">{bio.email}</span>
                            </a>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href={bio.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110" title="GitHub">
                                    <Github size={24} />
                                </a>
                                <a href={bio.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110" title="LinkedIn">
                                    <Linkedin size={24} />
                                </a>
                                <a href={bio.facebook} target="_blank" rel="noreferrer" className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110" title="Facebook">
                                    <Facebook size={24} />
                                </a>
                                <a href={bio.insta} target="_blank" rel="noreferrer" className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110" title="Instagram">
                                    <Instagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 transition-colors duration-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Name</label>
                                <input type="text" name="name" className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors shadow-sm" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Email</label>
                                <input type="email" name="email" className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors shadow-sm" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-500 mb-2">Message</label>
                                <textarea rows="4" name="message" className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors shadow-sm" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
                            >
                                <Send size={20} />
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
