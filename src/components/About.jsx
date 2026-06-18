import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Mail, Building } from 'lucide-react';
import { personalInfo, aboutText, timeline } from '../data/portfolioData';

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

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left - Description */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {aboutText}
              </p>

              {/* Timeline */}
              <div className="grid grid-cols-4 gap-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl font-bold text-primary mb-1">{item.year}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Info Grid */}
            <div className="space-y-5">
              {[
                { icon: <User size={18} />, label: 'Name:', value: personalInfo.name },
                { icon: <GraduationCap size={18} />, label: 'Education:', value: personalInfo.education },
                { icon: <Building size={18} />, label: 'College:', value: personalInfo.college },
                { icon: <MapPin size={18} />, label: 'Location:', value: personalInfo.location },
                { icon: <Mail size={18} />, label: 'Email:', value: personalInfo.email },
              ].map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-primary">{info.icon}</span>
                  <span className="text-gray-500 text-sm min-w-[90px]">{info.label}</span>
                  <span className="text-white font-medium text-sm">{info.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
