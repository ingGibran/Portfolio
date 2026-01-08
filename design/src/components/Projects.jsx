import { motion } from 'framer-motion';
import { projectsData } from '../data/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="py-20 lg:py-32 bg-slate-50">
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
                        <span className="text-slate-900">Featured </span>
                        <span className="text-accent-500">Projects</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        A selection of projects I've built showcasing my skills
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* More Projects Link */}
                {projectsData.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-800 hover:text-primary-600 
                         font-medium transition-colors bg-white px-6 py-3 rounded-full 
                         border border-slate-200 hover:border-primary-300 shadow-sm"
                        >
                            View more on GitHub
                            <span className="text-lg">→</span>
                        </a>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
