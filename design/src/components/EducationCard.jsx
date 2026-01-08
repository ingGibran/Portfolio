import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle, Clock } from 'lucide-react';

const EducationCard = ({ education, index = 0 }) => {
    const { institution, degree, period, description, status } = education;

    const isCompleted = status === "Completed";

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="glass-card p-6 hover:border-primary-500/30 transition-all duration-300 group"
        >
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl 
                        border border-primary-500/20 shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary-400" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                            <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-300 
                             transition-colors">
                                {degree}
                            </h3>
                            <p className="text-slate-400 text-sm">{institution}</p>
                        </div>

                        {/* Status badge */}
                        <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold 
                               rounded-full ${isCompleted
                                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                                    : 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                                }`}
                            >
                                {isCompleted ? (
                                    <CheckCircle className="w-3 h-3" />
                                ) : (
                                    <Clock className="w-3 h-3" />
                                )}
                                {status}
                            </span>
                        </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-primary-400 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{period}</span>
                    </div>

                    {/* Description */}
                    {description && (
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

export default EducationCard;
