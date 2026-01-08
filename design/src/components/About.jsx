import { motion } from 'framer-motion';
import { aboutData } from '../data/constants';

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-32">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <span className="text-slate-100">About </span>
                        <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Get to know more about my background and what drives me
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Background Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="glass-card p-8">
                            <h3 className="text-xl font-bold text-slate-100 mb-4">Background</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {aboutData.background}
                            </p>
                        </div>
                    </motion.div>

                    {/* Technical Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold text-slate-100 mb-4">Technical Focus</h3>

                        {aboutData.highlights.map((highlight, index) => {
                            const IconComponent = highlight.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="glass-card p-6 hover:border-primary-500/30 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl 
                                    border border-primary-500/20 group-hover:border-primary-500/40 transition-colors">
                                            <IconComponent className="w-6 h-6 text-primary-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-100 group-hover:text-primary-300 transition-colors">
                                                {highlight.title}
                                            </h4>
                                            <p className="text-slate-400 text-sm mt-1">
                                                {highlight.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
