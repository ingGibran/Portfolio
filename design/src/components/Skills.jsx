import { motion } from 'framer-motion';
import { skillsData } from '../data/constants';
import SkillBadge from './SkillBadge';

const Skills = () => {
    return (
        <section id="skills" className="py-20 lg:py-32 bg-slate-900/50">
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
                        <span className="text-slate-100">Technical </span>
                        <span className="gradient-text">Skills</span>
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
                                className="glass-card p-6 hover:border-primary-500/30 transition-all duration-300 group"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-3 bg-gradient-to-br ${data.color} bg-opacity-20 rounded-xl 
                                  border border-slate-700 group-hover:border-primary-500/40 transition-colors`}>
                                        <IconComponent className="w-5 h-5 text-slate-100" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-100">{category}</h3>
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
