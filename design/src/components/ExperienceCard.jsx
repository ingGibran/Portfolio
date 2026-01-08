import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

const ExperienceCard = ({ experience, index = 0, isLast = false }) => {
    const { company, role, period, description, technologies } = experience;

    return (
        <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-8 pb-8"
        >
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-slate-200" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-white border-2 border-primary-500 
                      flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 rounded-full bg-primary-500" />
            </div>

            {/* Card content */}
            <div className="glass-card p-6 ml-4 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                            {role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <Building2 className="w-4 h-4" />
                            <span>{company}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-700 text-sm font-medium 
                          bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                        <Calendar className="w-4 h-4" />
                        <span>{period}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {/* Technologies */}
                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 text-xs font-mono text-primary-700 bg-primary-50 
                           border border-primary-200 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.article>
    );
};

export default ExperienceCard;
