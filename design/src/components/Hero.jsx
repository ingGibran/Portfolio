import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/constants';

const Hero = () => {
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden code-bg">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            {/* Content */}
            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary-400 font-mono text-sm mb-4"
                    >
                        {"<Hello World />"}
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                    >
                        <span className="text-slate-100">I'm </span>
                        <span className="gradient-text">{personalInfo.name.split(' ').slice(0, 2).join(' ')}</span>
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6"
                    >
                        {personalInfo.role}
                    </motion.h2>

                    {/* Value Statement */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        {personalInfo.valueStatement}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                    >
                        <button
                            onClick={() => handleScrollTo('projects')}
                            className="btn-primary flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => handleScrollTo('contact')}
                            className="btn-secondary flex items-center gap-2"
                        >
                            Contact Me
                        </button>
                    </motion.div>

                    {/* CV Download Link */}
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        href={personalInfo.cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-400 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Download CV
                    </motion.a>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    onClick={() => handleScrollTo('about')}
                    className="text-slate-500 hover:text-primary-400 transition-colors"
                    aria-label="Scroll down"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;
