import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

export default function Education() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-accent-cyan font-mono text-sm mb-3 tracking-wider">
            {'> '}EDUCATION
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-3">
            Academic{' '}
            <span className="gradient-text">Background</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex justify-center"
        >
          <motion.div
            variants={scaleIn}
            className="glass p-6 sm:p-8 rounded-2xl max-w-lg w-full hover:bg-white/[0.07] transition-all duration-300 glow-border group"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={28} className="text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                  {education.institution}
                </h3>
                <p className="text-accent-blue font-medium text-sm mt-1">
                  {education.degree} in {education.field}
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-text-secondary text-sm">
                  <Calendar size={14} />
                  <span>Graduated {education.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
