import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
        })
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      alert('Something went wrong. Please email directly at ' + personalInfo.email);
    }
    setSending(false);
  };


  return (
    <section id="contact" className="py-24 relative">
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
            <Mail size={22} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10">
            {/* Left - Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Let's connect and build something amazing together!
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {/* Direct Contact Info */}
              <div className="space-y-3 mb-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/30 transition-colors group"
                >
                  <Mail size={16} className="text-primary" />
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Email</div>
                    <div className="text-white text-sm group-hover:text-primary transition-colors">{personalInfo.email}</div>
                  </div>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/30 transition-colors group"
                >
                  <Phone size={16} className="text-primary" />
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Phone</div>
                    <div className="text-white text-sm group-hover:text-primary transition-colors">{personalInfo.phone}</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <MapPin size={16} className="text-primary" />
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Location</div>
                    <div className="text-white text-sm">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-pure-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : sending ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
              <p className="text-[11px] text-gray-500">
                Your message will be sent directly to my inbox.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
