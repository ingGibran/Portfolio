import { motion } from 'framer-motion';
import { experienceData } from '../data/constants';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <section id="experience" className="py-20 lg:py-32 bg-white">
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
