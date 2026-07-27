import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

export default function Certifications() {
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
            {'> '}CERTIFICATIONS
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-3">
            Verified{' '}
            <span className="gradient-text">Credentials</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex justify-center"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="glass p-6 sm:p-8 rounded-2xl max-w-lg w-full hover:bg-white/[0.07] transition-all duration-300 glow-border group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award size={28} className="text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                    {cert.name}
                  </h3>
                  <p className="text-accent-warm font-medium text-sm mt-1">
                    {cert.issuer}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-text-secondary text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      Issued: {cert.issued}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      Expires: {cert.expires}
                    </span>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-accent-blue hover:text-accent-cyan text-sm font-medium transition-colors"
                  >
                    View Credential
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
