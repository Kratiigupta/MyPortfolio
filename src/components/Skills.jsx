import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Dynamic icon importer
import * as SiIcons from 'react-icons/si';
import * as LucideIcons from 'react-icons/lu';

function DynamicIcon({ iconName, className }) {
  if (iconName.startsWith('Si')) {
    const Icon = SiIcons[iconName];
    return Icon ? <Icon className={className} /> : <Terminal className={className} />;
  } else if (iconName.startsWith('Lu')) {
    // Drop the 'Lu' prefix to match lucide-react exports
    const name = iconName.substring(2);
    // Many lucide icons in react-icons are exported directly or with Lu prefix
    const Icon = LucideIcons[iconName] || Terminal;
    return <Icon className={className} />;
  }
  return <Terminal className={className} />;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
            <Code2 size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Tech Arsenal</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm md:text-base">
            Tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary text-pure-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-primary/50 hover:text-primary dark:hover:text-primary'
                }`}
              >
                <span>{category.icon}</span>
                {category.category}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="glass-card rounded-3xl p-8 md:p-12 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {skillCategories[activeTab].skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.05] hover:border-primary/30 dark:hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors duration-300">
                        <DynamicIcon iconName={skill.icon} />
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
