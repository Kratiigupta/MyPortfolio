import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Mail, Building, BookOpen } from 'lucide-react';
import { personalInfo, aboutText, timeline, researchList } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
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
            <User size={22} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {aboutText}
              </p>

              {/* Info Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <User size={18} />, label: 'Name', value: personalInfo.name },
                  { icon: <GraduationCap size={18} />, label: 'Degree', value: personalInfo.education },
                  { icon: <Building size={18} />, label: 'College', value: personalInfo.college },
                  { icon: <MapPin size={18} />, label: 'Location', value: personalInfo.location },
                ].map((info, i) => (
                  <div key={info.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-primary">{info.icon}</span>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">{info.label}</div>
                      <div className="text-white text-sm font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="pt-6 border-t border-white/5">
              <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Education Journey</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="relative"
                  >
                    <div className="text-xl font-bold text-primary mb-1">{item.year}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Research & Leadership Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <BookOpen size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Research & Leadership</h3>
            </div>

            <div className="space-y-6 flex-1">
              {/* Research List */}
              <div className="space-y-4">
                {researchList.map((res, i) => (
                  <div key={i} className="group border-l-2 border-white/10 pl-4 hover:border-secondary transition-colors">
                    <h4 className="text-white text-sm font-medium mb-1 group-hover:text-secondary transition-colors">{res.title}</h4>
                    <p className="text-xs text-gray-500">{res.role} • {res.event}</p>
                  </div>
                ))}
              </div>

              {/* Leadership */}
              <div className="pt-6 border-t border-white/5">
                <h4 className="text-primary text-sm font-semibold mb-2">Secretary @ Codester Club</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Spearheaded technical events, team-building activities, and coding sessions to foster a strong developer community within PSIT CHE.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
