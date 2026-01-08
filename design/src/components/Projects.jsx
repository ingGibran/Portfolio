import { motion } from 'framer-motion';
import { projectsData } from '../data/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="py-20 lg:py-32">
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
                        <span className="text-slate-100">Featured </span>
                        <span className="gradient-text">Projects</span>
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
                            href="https://github.com/yourusername" // Update with your GitHub
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 
                         font-medium transition-colors"
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
