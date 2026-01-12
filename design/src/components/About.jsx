import { motion } from 'framer-motion';
import { aboutData } from '../data/constants';

// Keywords to highlight in the background text
const highlightKeywords = [
    'Computer Systems Engineering',
    'backend development',
    'machine learning',
    'FastAPI',
    'Django',
    'Django REST Framework',
    'Scikit-learn',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'Seaborn',
    'Java',
    'SQL databases',
    'PostgreSQL',
    'MySQL',
    'SQLite',
    'Docker',
    'Git/GitHub',
    'Linux',
    'pytest',
    'Jupyter Notebooks',
    'HTML',
    'CSS',
    'JSON',
];

// Function to highlight keywords in text
const highlightText = (text) => {
    // Sort keywords by length (longest first) to avoid partial matches
    const sortedKeywords = [...highlightKeywords].sort((a, b) => b.length - a.length);

    // Create regex pattern
    const pattern = new RegExp(`(${sortedKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

    // Split text by keywords
    const parts = text.split(pattern);

    return parts.map((part, index) => {
        const isKeyword = sortedKeywords.some(k => k.toLowerCase() === part.toLowerCase());
        if (isKeyword) {
            return (
                <span key={index} className="text-primary-600 font-semibold">
                    {part}
                </span>
            );
        }
        return part;
    });
};

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-32 bg-slate-50">
            <div className="section-container">
                {/* Section Header - Black + Orange */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <span className="text-slate-900">About </span>
                        <span className="text-accent-500">Me</span>
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
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
                                Background
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {highlightText(aboutData.background)}
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
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-accent-500 rounded-full"></span>
                            Technical Focus
                        </h3>

                        {aboutData.highlights.map((highlight, index) => {
                            const IconComponent = highlight.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="glass-card p-6 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary-500 rounded-xl">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                                                {highlight.title}
                                            </h4>
                                            <p className="text-slate-600 text-sm mt-1">
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
