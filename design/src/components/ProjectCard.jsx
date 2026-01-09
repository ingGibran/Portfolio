import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const ProjectCard = ({ project, index = 0 }) => {
    const { name, description, image, techStack, githubLink, liveLink, featured } = project;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass-card overflow-hidden"
        >
            {/* Project Image */}
            {image && (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            )}

            <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary-500 rounded-xl">
                        <Folder className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex items-center gap-3">
                        {githubLink && githubLink !== "#" && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-slate-900 transition-colors duration-200"
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
                                className="text-slate-400 hover:text-primary-600 transition-colors duration-200"
                                aria-label="View live demo"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Featured badge */}
                {featured && (
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold text-accent-600 
                         bg-accent-50 border border-accent-200 rounded-full mb-3">
                        Featured
                    </span>
                )}

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 
                     transition-colors duration-200">
                    {name}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-mono text-slate-700 bg-slate-100 
                       border border-slate-200 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;
