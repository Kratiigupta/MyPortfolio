import { motion } from 'framer-motion';
import { FolderGit2, Github } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

export default function Projects() {

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
              <motion.a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="block group cursor-pointer glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Project Image */}
                <div className="relative h-44 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                      <FolderGit2 size={48} className="text-white/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-medium bg-primary/80 text-white rounded-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
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
                    <div className="flex items-center gap-1.5 text-gray-400 hover:text-primary transition-colors">
                      <Github size={14} />
                      View on GitHub
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
