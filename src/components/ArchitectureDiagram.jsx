import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { architectureNodes, architectureEdges } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from '../utils/animations';

const iconMap = {
  Code2: '&lt;/&gt;',
  GitBranch: '○',
  GitPullRequest: '↻',
  Container: '⎔',
  Cloud: '☁',
  Activity: '◉',
  Shield: '♦',
};

export default function ArchitectureDiagram() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const svgWidth = 800;
  const svgHeight = 400;

  const getNodeCoords = (node) => ({
    x: (node.x / 100) * svgWidth,
    y: (node.y / 100) * svgHeight,
  });

  const handleNodeHover = (node, e) => {
    setHoveredNode(node);
    const rect = e.target.closest('g')?.getBoundingClientRect();
    if (rect) {
      setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 10 });
    }
  };

  return (
    <section id="architecture" className="relative py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-accent-cyan font-mono text-sm mb-3 tracking-wider">
            {'> '}ARCHITECTURE
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-3">
            How I Build{' '}
            <span className="gradient-text">Systems</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
            An AI-assisted ECS Fargate diagnostic workflow with read-only access and human-approved actions
          </motion.p>
        </motion.div>

        {/* Diagram Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-4 sm:p-8 rounded-2xl overflow-x-auto"
        >
          <div className="min-w-[700px]">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto"
              style={{ maxHeight: '450px' }}
            >
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Edges (Flow Lines) */}
              {architectureEdges.map((edge, i) => {
                const from = architectureNodes.find((n) => n.id === edge.from);
                const to = architectureNodes.find((n) => n.id === edge.to);
                if (!from || !to) return null;

                const fromCoords = getNodeCoords(from);
                const toCoords = getNodeCoords(to);

                // Calculate control points for curved edges
                const midX = (fromCoords.x + toCoords.x) / 2;
                const midY = (fromCoords.y + toCoords.y) / 2;
                const dx = toCoords.x - fromCoords.x;
                const dy = toCoords.y - fromCoords.y;
                const cx = midX;
                const cy = midY + Math.abs(dx) * 0.1;

                const pathD = `M ${fromCoords.x} ${fromCoords.y} Q ${cx} ${cy} ${toCoords.x} ${toCoords.y}`;

                return (
                  <g key={i}>
                    {/* Base path (glow) */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.15)"
                      strokeWidth="6"
                    />
                    {/* Animated flow path */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="url(#flowGradient)"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      className="flow-line"
                      style={{
                        animationDuration: `${2 + (i % 3)}s`,
                      }}
                    />
                    {/* Direction dot */}
                    <circle r="3" fill="#06B6D4" filter="url(#glow)">
                      <animateMotion
                        dur={`${2 + (i % 3)}s`}
                        repeatCount="indefinite"
                        path={pathD}
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Nodes */}
              {architectureNodes.map((node, i) => {
                const coords = getNodeCoords(node);
                const isHovered = hoveredNode?.id === node.id;

                return (
                  <g
                    key={node.id}
                    onMouseEnter={(e) => handleNodeHover(node, e)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Node glow when hovered */}
                    {isHovered && (
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r="38"
                        fill="rgba(59, 130, 246, 0.1)"
                        filter="url(#glow)"
                      />
                    )}
                    {/* Node circle */}
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r="28"
                      fill={isHovered ? '#1a2332' : '#0A0E1A'}
                      stroke={isHovered ? '#06B6D4' : 'rgba(59, 130, 246, 0.5)'}
                      strokeWidth="2.5"
                      className="transition-all duration-300"
                    />
                    {/* Node icon */}
                    <text
                      x={coords.x}
                      y={coords.y + 1}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isHovered ? '#06B6D4' : '#94A3B8'}
                      fontSize="18"
                      fontFamily="monospace"
                      className="transition-all duration-300"
                      dangerouslySetInnerHTML={{ __html: iconMap[node.icon] || '◉' }}
                    />
                    {/* Node label */}
                    <text
                      x={coords.x}
                      y={coords.y + 44}
                      textAnchor="middle"
                      fill={isHovered ? '#F1F5F9' : '#94A3B8'}
                      fontSize="11"
                      fontFamily="JetBrains Mono, monospace"
                      className="transition-all duration-300"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed z-50 pointer-events-none"
              style={{
                left: tooltipPos.x,
                top: tooltipPos.y,
                transform: 'translate(-50%, -100%)',
              }}
            >
              <div className="glass p-3 rounded-xl max-w-[250px]">
                <p className="text-accent-cyan font-mono text-xs font-semibold mb-1">
                  {'<'} {hoveredNode.label} {'/>'}
                </p>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {hoveredNode.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
