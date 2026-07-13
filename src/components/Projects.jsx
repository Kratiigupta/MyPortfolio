import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, X } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >


        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-gray-400 mb-6">{project.description}</p>

          {/* Features */}
          {project.features && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-xl transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 text-sm font-medium rounded-xl transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <FolderGit2 size={22} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Content */}
                <div className="p-6 relative">
                  <span className="absolute top-6 right-6 px-2.5 py-1 text-[10px] font-medium bg-primary/20 text-primary border border-primary/20 rounded-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 pr-20 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-medium bg-white/5 text-gray-400 rounded-md border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 text-sm">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
