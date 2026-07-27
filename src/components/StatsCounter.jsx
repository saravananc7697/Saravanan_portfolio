import { motion } from 'framer-motion';
import { Briefcase, TrendingDown, Activity, Zap, Shield, BarChart3, Cpu, Award } from 'lucide-react';
import { stats } from '../data/portfolioData';
import useCountUp from '../hooks/useCountUp';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/animations';

const iconMap = {
  Briefcase: Briefcase,
  TrendingDown: TrendingDown,
  Activity: Activity,
  Zap: Zap,
  Shield: Shield,
  BarChart3: BarChart3,
  Cpu: Cpu,
  Award: Award,
};

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, 2000, stat.value % 1 === 0 ? 0 : 1);
  const Icon = iconMap[stat.icon] || Award;

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      className="glass p-6 sm:p-8 rounded-2xl text-center hover:bg-white/[0.07] transition-all duration-300 glow-border group"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-accent-cyan" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 font-mono">
        {count}
        <span className="text-accent-warm">{stat.suffix}</span>
      </div>
      <p className="text-text-secondary text-sm sm:text-base">{stat.label}</p>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-accent-cyan font-mono text-sm mb-3 tracking-wider">
            {'> '}KEY_METRICS
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold">
            Impact by the{' '}
            <span className="gradient-text">Numbers</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
