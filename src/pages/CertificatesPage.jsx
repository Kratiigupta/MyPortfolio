import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Award, Search, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { certificatesList } from '../data/portfolioData';
import { SiCisco, SiHackerrank } from 'react-icons/si';

const iconMap = {
  cisco: <SiCisco size={40} className="text-[#049fd9]" />,
  hackerrank: <SiHackerrank size={40} className="text-[#00EA64]" />,
  tcs: <ShieldCheck size={40} className="text-[#0052cc]" />,
  infosys: <Award size={40} className="text-[#007cc3]" />,
};

export default function CertificatesPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['all', ...new Set(certificatesList.map((c) => c.issuer))];

  const filtered = certificatesList.filter((c) => {
    const matchesCategory = filter === 'all' || c.issuer === filter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Certifications</h1>
            <p className="text-gray-500 text-sm mt-1">Professional certifications and learning milestones</p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-card border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 shadow-inner">
                      {iconMap[cert.icon] || <Award size={40} className="text-primary" />}
                    </div>
                    {cert.link && cert.link !== '#' && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-primary hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                </div>

                <div className="inline-flex">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-lg">
                    {cert.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Award size={48} className="mx-auto mb-4 opacity-30" />
            <p>No certificates found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
