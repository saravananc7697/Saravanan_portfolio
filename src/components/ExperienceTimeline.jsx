import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, Layers, Clock } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { fadeInUp, staggerContainer, timelineItem } from '../utils/animations';

function ExperienceCard({ exp, index, isLast }) {
  const [expanded, setExpanded] = useState(false);
  const isCurrent = exp.type === 'current';

  return (
    <motion.div
      variants={timelineItem}
      className="relative pl-8 sm:pl-10 pb-8 last:pb-0"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-violet to-transparent" />
      )}

      {/* Timeline Dot */}
      <div
        className={`absolute left-[9px] sm:left-[13px] top-1.5 w-[14px] h-[14px] rounded-full border-2 ${
          isCurrent
            ? 'bg-accent-cyan border-accent-cyan shadow-[0_0_12px_rgba(6,182,212,0.5)]'
            : 'bg-bg-primary border-accent-blue'
        }`}
      />

      {/* Card */}
      <div
        className={`glass p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white/[0.07] glow-border ${
          expanded ? 'ring-1 ring-accent-blue/30' : ''
        }`}
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                {exp.role}
              </h3>
              {isCurrent && (
                <span className="px-2 py-0.5 text-[10px] font-mono bg-accent-cyan/20 text-accent-cyan rounded-full border border-accent-cyan/30">
                  {exp.status || 'CURRENT'}
                </span>
              )}
            </div>
            <p className="text-accent-blue font-medium text-sm sm:text-base mt-1">
              {exp.company}
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-text-secondary text-xs sm:text-sm">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {exp.location}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-1 text-text-secondary"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>

        {/* Achievements (expandable) */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 border-t border-white/5 pt-4">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed"
                  >
                    <span className="text-accent-cyan mt-1 shrink-0">▹</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Preview bullets (collapsed) */}
        {!expanded && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {exp.achievements.slice(0, 2).map((a, i) => (
              <span
                key={i}
                className="text-xs text-text-secondary font-mono truncate max-w-[200px] sm:max-w-[300px] bg-white/5 px-2 py-1 rounded-md"
              >
                {a.length > 50 ? a.substring(0, 50) + '...' : a}
              </span>
            ))}
            {exp.achievements.length > 2 && (
              <span className="text-xs text-accent-blue font-mono px-2 py-1">
                +{exp.achievements.length - 2} more
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const [viewMode, setViewMode] = useState('timeline');

  return (
    <section id="experience" className="relative py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-accent-cyan font-mono text-sm mb-3 tracking-wider">
            {'> '}EXPERIENCE
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-3">
            Professional{' '}
            <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            5+ years of progressive DevOps and infrastructure engineering experience
          </motion.p>

          {/* View Toggle */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setViewMode('timeline')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                viewMode === 'timeline'
                  ? 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30'
                  : 'text-text-secondary hover:text-text-primary border border-transparent'
              }`}
            >
              <Clock size={16} />
              Timeline
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30'
                  : 'text-text-secondary hover:text-text-primary border border-transparent'
              }`}
            >
              <Layers size={16} />
              Card Grid
            </button>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === 'timeline' ? (
            <motion.div
              key="timeline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              {experience.map((exp, i) => (
                <ExperienceCard
                  key={i}
                  exp={exp}
                  index={i}
                  isLast={i === experience.length - 1}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={timelineItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass p-5 rounded-2xl hover:bg-white/[0.07] transition-all duration-300 glow-border"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 bg-accent-blue/10 text-accent-blue rounded-full">
                      {exp.period}
                    </span>
                    {exp.type === 'current' && (
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-accent-cyan/20 text-accent-cyan rounded-full">
                        {exp.status || 'CURRENT'}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-text-primary">{exp.role}</h3>
                  <p className="text-accent-cyan text-sm font-medium">{exp.company}</p>
                  <p className="text-text-secondary text-xs mt-1">{exp.location}</p>
                  <div className="mt-3 space-y-1">
                    {exp.achievements.slice(0, 2).map((a, j) => (
                      <p key={j} className="text-xs text-text-secondary leading-relaxed">
                        ▹ {a.length > 80 ? a.substring(0, 80) + '...' : a}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
