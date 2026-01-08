import { motion } from 'framer-motion';
import { educationData } from '../data/constants';
import EducationCard from './EducationCard';

const Education = () => {
    return (
        <section id="education" className="py-20 lg:py-32 bg-slate-50">
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
                        <span className="text-slate-900">Education & </span>
                        <span className="text-accent-500">Certifications</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        My academic background and professional certifications
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="max-w-3xl mx-auto space-y-6">
                    {educationData.map((education, index) => (
                        <EducationCard
                            key={education.id}
                            education={education}
                            index={index}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {educationData.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-slate-500 py-12"
                    >
                        <p>Education details coming soon...</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Education;
