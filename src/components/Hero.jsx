import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { wordReveal } from '../utils/animations';

export default function Hero() {
  const nameWords = personalInfo.name.split(' ');
  const titleWords = personalInfo.title.split(' ');

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animated gradient orbs */}
      <div className="absolute inset-0 network-dots">
        <div className="orb orb-blue animate-float" style={{ width: '400px', height: '400px', top: '10%', left: '-5%' }} />
        <div className="orb orb-violet animate-drift" style={{ width: '350px', height: '350px', bottom: '10%', right: '0%' }} />
        <div className="orb orb-cyan animate-float" style={{ width: '250px', height: '250px', top: '50%', left: '60%', animationDelay: '-3s' }} />
      </div>

      {/* Network grid overlay */}
      <div className="absolute inset-0 network-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent-cyan font-mono text-sm sm:text-base mb-4 tracking-wider"
        >
          {'> '}Hello, I'm
        </motion.p>

        {/* Name - Staggered word reveal */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 overflow-hidden">
          <span className="inline-flex flex-wrap justify-center gap-x-4">
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordReveal}
                initial="hidden"
                animate="visible"
                className="gradient-text inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Title - Staggered word reveal */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 overflow-hidden">
          <span className="inline-flex flex-wrap justify-center gap-x-3">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordReveal}
                initial="hidden"
                animate="visible"
                className="text-text-primary inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-text-secondary text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-4 font-mono"
        >
          <span className="text-accent-warm">$</span> {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-violet rounded-xl text-white font-medium hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300 hover:scale-105"
          >
            <Download size={18} className="group-hover:animate-bounce" />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 rounded-xl text-text-primary font-medium transition-all duration-300 hover:scale-105 glow-border"
          >
            <Mail size={18} />
            Contact Me
          </button>
          <button
            onClick={() => scrollTo('#experience')}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl text-text-secondary hover:text-text-primary hover:border-accent-blue/50 font-medium transition-all duration-300 hover:scale-105"
          >
            View Work
            <ArrowDown size={18} />
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollTo('#about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-text-secondary hover:text-accent-cyan transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
