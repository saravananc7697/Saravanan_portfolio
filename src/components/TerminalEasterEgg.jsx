import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minus } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';

const commands = {
  help: 'Available commands:\n  whoami  - About me\n  skills  - List my technical skills\n  contact - Get contact info\n  exp     - Years of experience\n  cert    - My certifications\n  clear   - Clear terminal\n  help    - Show this help',
  whoami: `${personalInfo.name}\n${personalInfo.title}\n${personalInfo.tagline}`,
  contact: `Email: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLocation: ${personalInfo.location}`,
  exp: '5+ years of DevOps engineering experience across 6 companies.',
  cert: 'AWS Certified Solutions Architect – Associate (Issued Mar 2025)',
};

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { text: 'Welcome to Saravanan\'s terminal. Type "help" to get started.', isOutput: true },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const processCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    let response;
    if (trimmed === 'clear') {
      setOutput([]);
      return;
    } else if (trimmed === 'skills') {
      const allSkills = Object.entries(skills)
        .slice(0, 5)
        .map(([cat, items]) => `  ${cat}: ${items.slice(0, 5).join(', ')}${items.length > 5 ? '...' : ''}`)
        .join('\n');
      response = allSkills;
    } else if (commands[trimmed]) {
      response = commands[trimmed];
    } else {
      response = `Command not found: "${cmd}". Type "help" for available commands.`;
    }

    setOutput((prev) => [
      ...prev,
      { text: `$ ${cmd}`, isOutput: false },
      { text: response, isOutput: true },
    ]);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-xl glass flex items-center justify-center text-accent-cyan hover:bg-white/10 transition-all border border-white/10 shadow-lg shadow-black/30"
          aria-label="Open terminal"
        >
          <Terminal size={22} />
        </motion.button>
      )}

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 z-50 w-[90vw] sm:w-[400px] h-[350px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a1d2e] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-400" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-text-secondary font-mono flex items-center gap-1.5">
                <Terminal size={12} className="text-accent-cyan" />
                devops-terminal
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close terminal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal Body */}
            <div
              ref={outputRef}
              className="bg-[#0D0F1F]/95 backdrop-blur-xl h-[calc(100%-40px)] p-4 overflow-y-auto font-mono text-xs"
              onClick={() => inputRef.current?.focus()}
            >
              {output.map((line, i) => (
                <div key={i} className="mb-1 leading-relaxed">
                  {line.isOutput ? (
                    <span className="text-text-secondary whitespace-pre-line">{line.text}</span>
                  ) : (
                    <span>
                      <span className="text-accent-green">➜</span>{' '}
                      <span className="text-accent-cyan">~/portfolio</span>{' '}
                      <span className="text-text-primary">{line.text}</span>
                    </span>
                  )}
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center mt-1">
                <span className="text-accent-green mr-1">➜</span>
                <span className="text-accent-cyan mr-1">~/portfolio</span>
                <span className="text-text-primary mr-1">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none border-none text-text-primary caret-accent-cyan"
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
