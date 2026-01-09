import { motion } from 'framer-motion';
import { experienceData } from '../data/constants';
import ExperienceCard from './ExperienceCard';

// Skill images for decorative floating elements
const skillImages = [
    { src: '/skills/python.png', alt: 'Python' },
    { src: '/skills/java.png', alt: 'Java' },
    { src: '/skills/django.png', alt: 'Django' },
    { src: '/skills/fastapi.png', alt: 'FastAPI' },
    { src: '/skills/Git.png', alt: 'Git' },
    { src: '/skills/Linux.png', alt: 'Linux' },
    { src: '/skills/PostgresSQL.png', alt: 'PostgreSQL' },
    { src: '/skills/matplotlib.png', alt: 'Matplotlib' },
];

// Floating positions for work experience section
const floatingPositions = [
    { top: '8%', left: '3%', size: 44, delay: 0 },
    { top: '20%', right: '4%', size: 38, delay: 0.6 },
    { top: '40%', left: '2%', size: 40, delay: 1.2 },
    { top: '60%', right: '3%', size: 42, delay: 1.8 },
    { top: '80%', left: '4%', size: 36, delay: 2.4 },
    { top: '30%', right: '5%', size: 34, delay: 0.9 },
    { top: '70%', right: '4%', size: 38, delay: 2.1 },
    { top: '90%', left: '3%', size: 40, delay: 2.7 },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Floating Skill Images */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {skillImages.map((image, index) => {
                    const position = floatingPositions[index % floatingPositions.length];
                    return (
                        <motion.div
                            key={image.alt}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 0.12, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: position.delay,
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
                                    y: [0, -6, 0],
                                }}
                                transition={{
                                    duration: 3.5 + Math.random() * 2,
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
                        <span className="text-slate-900">Work </span>
                        <span className="text-accent-500">Experience</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        My professional journey and the roles I've taken on
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="max-w-3xl mx-auto">
                    {experienceData.map((experience, index) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                            index={index}
                            isLast={index === experienceData.length - 1}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {experienceData.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-slate-500 py-12"
                    >
                        <p>Experience details coming soon...</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Experience;

