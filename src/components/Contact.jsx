import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) return;
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-accent-cyan font-mono text-sm mb-3 tracking-wider">
            {'> '}CONTACT
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-3">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-4">
            {contactItems.map((item, i) => (
              <div key={i} className="glass p-4 sm:p-5 rounded-xl flex items-center gap-4 hover:bg-white/[0.07] transition-all duration-300 glow-border group">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-accent-cyan" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-secondary font-mono">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-text-primary hover:text-accent-cyan transition-colors text-sm font-medium truncate block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-text-primary text-sm font-medium truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/[0.1] transition-all duration-300 hover:text-accent-blue text-text-secondary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/[0.1] transition-all duration-300 hover:text-accent-cyan text-text-secondary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass p-6 sm:p-8 rounded-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5 font-mono">
                    {'>'} Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 bg-bg-secondary border border-white/10 rounded-xl text-text-primary placeholder:text-text-secondary/40 focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-all outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5 font-mono">
                    {'>'} Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 bg-bg-secondary border border-white/10 rounded-xl text-text-primary placeholder:text-text-secondary/40 focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-all outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5 font-mono">
                  {'>'} Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 bg-bg-secondary border border-white/10 rounded-xl text-text-primary placeholder:text-text-secondary/40 focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30 transition-all outline-none resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-violet rounded-xl text-white font-medium hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300"
              >
                <Send size={18} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
