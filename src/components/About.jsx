import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { MapPin, Award, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start"
        >
          {/* Left - Title & Mini Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <p className="text-accent-cyan font-mono text-sm mb-3 tracking-wider">
              {'> '}ABOUT_ME
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Building{' '}
              <span className="gradient-text">Reliable Systems</span>
              {' '}at Scale
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <MapPin size={16} className="text-accent-blue" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Award size={16} className="text-accent-warm" />
                <span>AWS Certified Solutions Architect – Associate</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Calendar size={16} className="text-accent-cyan" />
                <span>Serving notice — last working day Nov 30, 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Summary */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                {personalInfo.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'DevSecOps', 'Observability', 'Docker'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-accent-blue/10 text-accent-cyan rounded-full border border-accent-cyan/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
