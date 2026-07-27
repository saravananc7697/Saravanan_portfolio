import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import Hero from './components/Hero';
import About from './components/About';
import StatsCounter from './components/StatsCounter';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalEasterEgg from './components/TerminalEasterEgg';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Cursor glow effect — desktop only
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="animated-gradient min-h-screen relative"
    >
      {/* Cursor Glow (desktop only) */}
      <div
        className="cursor-glow hidden md:block"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      {/* Scroll Progress Bar */}
      <ScrollProgressIndicator />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Section Spacer for fixed navbar */}
        <div className="h-16 lg:h-20" />

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Stats Counter */}
        <StatsCounter />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Skills Grid */}
        <SkillsGrid />

        {/* Architecture Diagram */}
        <ArchitectureDiagram />

        {/* Certifications */}
        <Certifications />

        {/* Education */}
        <Education />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Terminal Easter Egg */}
      <TerminalEasterEgg />
    </motion.div>
  );
}
