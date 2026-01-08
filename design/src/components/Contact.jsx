import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/constants';

const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="py-20 lg:py-32 bg-slate-900/50 border-t border-slate-800">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">
                        <span className="text-slate-100">Get In </span>
                        <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {socialLinks.map((link, index) => {
                        const IconComponent = link.icon;
                        return (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex items-center gap-3 px-5 py-3 glass-card hover:border-primary-500/50 
                           transition-all duration-300 group"
                            >
                                <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-primary-400 transition-colors" />
                                <span className="text-slate-300 group-hover:text-slate-100 font-medium transition-colors">
                                    {link.name}
                                </span>
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm"
                >
                    {/* Copyright */}
                    <div className="flex items-center gap-1">
                        <Code2 className="w-4 h-4 text-primary-400" />
                        <span>© {currentYear} {personalInfo.name.split(' ').slice(0, 2).join(' ')}. All rights reserved.</span>
                    </div>

                    {/* Made with love */}
                    <div className="flex items-center gap-1">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        <span>using React & Tailwind</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Contact;
