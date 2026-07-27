import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const categoryIcons = {
  'Cloud (AWS)': '☁️',
  Containers: '📦',
  'IaC / Scripting': '⚙️',
  'CI/CD': '🔄',
  Observability: '📊',
  Security: '🔒',
  'Version Control': '📝',
  'OS / SysAdmin': '💻',
  'CDN / Networking': '🌐',
  Others: '🧰',
};

const categoryColors = {
  'Cloud (AWS)': 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  Containers: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
  'IaC / Scripting': 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
  'CI/CD': 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  Observability: 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
  Security: 'from-red-500/20 to-orange-500/20 border-red-500/30',
  'Version Control': 'from-teal-500/20 to-cyan-500/20 border-teal-500/30',
  'OS / SysAdmin': 'from-slate-500/20 to-gray-500/20 border-slate-500/30',
  'CDN / Networking': 'from-violet-500/20 to-purple-500/20 border-violet-500/30',
  Others: 'from-gray-500/20 to-zinc-500/20 border-gray-500/30',
};

export default function SkillsGrid() {
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCategories =
    activeCategory === 'All'
      ? categories
      : [activeCategory];

  return (
    <section id="skills" className="relative py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-accent-cyan font-mono text-sm mb-3 tracking-wider">
            {'> '}TECHNICAL_SKILLS
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-3">
            Tools &{' '}
            <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            Click a category to filter — hover a skill to see related context
          </motion.p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <motion.button
            variants={scaleIn}
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-sm font-mono font-medium transition-all duration-300 ${
              activeCategory === 'All'
                ? 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30 shadow-lg shadow-accent-blue/10'
                : 'text-text-secondary border border-white/5 hover:bg-white/5 hover:text-text-primary'
            }`}
          >
            All
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              variants={scaleIn}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-mono font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30 shadow-lg shadow-accent-blue/10'
                  : 'text-text-secondary border border-white/5 hover:bg-white/5 hover:text-text-primary'
              }`}
            >
              {categoryIcons[cat]} {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat}
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h3
                  variants={fadeInUp}
                  className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2"
                >
                  <span>{categoryIcons[cat]}</span>
                  <span className="font-mono text-sm text-accent-cyan">&lt;</span>
                  {cat}
                  <span className="font-mono text-sm text-accent-cyan"> /&gt;</span>
                </motion.h3>
                <motion.div
                  variants={staggerContainer}
                  className="flex flex-wrap gap-2.5"
                >
                  {skills[cat].map((skill) => (
                    <motion.span
                      key={skill}
                      variants={scaleIn}
                      whileHover={{ scale: 1.08 }}
                      className={`skill-chip px-3.5 py-1.5 text-sm font-mono rounded-lg bg-gradient-to-r ${categoryColors[cat]} border text-text-secondary hover:text-text-primary cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
