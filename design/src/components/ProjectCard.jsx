import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const ProjectCard = ({ project, index = 0 }) => {
    const { name, description, techStack, githubLink, liveLink, featured } = project;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass-card p-6 hover:border-primary-500/30 transition-all duration-300"
        >
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 
                      group-hover:opacity-20 blur transition-opacity duration-300 -z-10" />

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-slate-700/50 rounded-xl">
                    <Folder className="w-6 h-6 text-primary-400" />
                </div>

                <div className="flex items-center gap-3">
                    {githubLink && githubLink !== "#" && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
                            aria-label="View GitHub repository"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {liveLink && liveLink !== "#" && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary-400 transition-colors duration-200"
                            aria-label="View live demo"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Featured badge */}
            {featured && (
                <span className="inline-block px-2 py-1 text-xs font-semibold text-primary-400 
                         bg-primary-500/10 rounded-full mb-3">
                    Featured
                </span>
            )}

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary-300 
                     transition-colors duration-200">
                {name}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {techStack.map((tech, i) => (
                    <span
                        key={i}
                        className="px-2 py-1 text-xs font-mono text-slate-400 bg-slate-800/50 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.article>
    );
};

export default ProjectCard;
