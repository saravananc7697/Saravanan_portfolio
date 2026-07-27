import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-xl font-bold font-mono gradient-text hover:opacity-80 transition-opacity"
          >
            {'<SC />'}
          </button>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-text-secondary hover:text-accent-cyan transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-accent-cyan transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-text-secondary flex items-center gap-1">
            Built with <Heart size={14} className="text-red-400 fill-red-400" /> by{' '}
            <span className="gradient-text font-semibold">{personalInfo.name}</span>
          </p>
          <p className="text-xs text-text-secondary font-mono">
            &copy; {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
