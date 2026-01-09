import { motion } from 'framer-motion';
import { skillsData } from '../data/constants';
import SkillBadge from './SkillBadge';

// Skill images for decorative floating elements
const skillImages = [
    { src: '/skills/python.png', alt: 'Python' },
    { src: '/skills/django.png', alt: 'Django' },
    { src: '/skills/fastapi.png', alt: 'FastAPI' },
    { src: '/skills/java.png', alt: 'Java' },
    { src: '/skills/PostgresSQL.png', alt: 'PostgreSQL' },
    { src: '/skills/MySQL.png', alt: 'MySQL' },
    { src: '/skills/Git.png', alt: 'Git' },
    { src: '/skills/Linux.png', alt: 'Linux' },
    { src: '/skills/numpy.png', alt: 'NumPy' },
    { src: '/skills/scikit-learn.png', alt: 'Scikit-learn' },
    { src: '/skills/HTML5.png', alt: 'HTML5' },
    { src: '/skills/CSS3.png', alt: 'CSS3' },
];

// Generate random positions for floating images
const floatingPositions = [
    { top: '5%', left: '2%', size: 48, delay: 0 },
    { top: '15%', right: '3%', size: 40, delay: 0.5 },
    { top: '35%', left: '1%', size: 36, delay: 1 },
    { top: '55%', right: '2%', size: 44, delay: 1.5 },
    { top: '75%', left: '3%', size: 40, delay: 2 },
    { top: '85%', right: '4%', size: 36, delay: 2.5 },
    { top: '25%', left: '5%', size: 32, delay: 0.8 },
    { top: '45%', right: '5%', size: 38, delay: 1.2 },
    { top: '65%', left: '4%', size: 42, delay: 1.8 },
    { top: '10%', right: '6%', size: 34, delay: 0.3 },
    { top: '50%', left: '2%', size: 38, delay: 1.4 },
    { top: '90%', right: '3%', size: 36, delay: 2.2 },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Floating Skill Images */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {skillImages.map((image, index) => {
                    const position = floatingPositions[index % floatingPositions.length];
                    return (
                        <motion.div
                            key={image.alt}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 0.15, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: position.delay,
                            }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            style={{
                                position: 'absolute',
                                top: position.top,
                                left: position.left,
                                right: position.right,
                                width: position.size,
                                height: position.size,
                            }}
                            className="transition-all duration-1000"
                        >
                            <motion.img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>

            <div className="section-container relative z-10">
                {/* Section Header - Black + Orange */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <span className="text-slate-900">Technical </span>
                        <span className="text-accent-500">Skills</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Technologies and tools I work with on a daily basis
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skillsData).map(([category, data], categoryIndex) => {
                        const IconComponent = data.icon;

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                className="glass-card p-6 group"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-primary-500 rounded-xl">
                                        <IconComponent className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">{category}</h3>
                                </div>

                                {/* Skills Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {data.skills.map((skill, skillIndex) => (
                                        <SkillBadge
                                            key={skill}
                                            skill={skill}
                                            delay={categoryIndex * 0.1 + skillIndex * 0.05}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;

