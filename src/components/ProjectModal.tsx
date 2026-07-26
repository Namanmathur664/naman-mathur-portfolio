import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Github, ExternalLink, X, Calendar, Target, CheckCircle2 } from 'lucide-react';
import type { projects } from '@/data/portfolio';

type Project = (typeof projects)[number];

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-slate-900 border border-white/10 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-10"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Header visual */}
            <div className={`relative h-44 bg-gradient-to-br ${project.color} overflow-hidden`}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
              {(() => {
                const Icon = (Icons as any)[project.icon] ?? Icons.Code2;
                return (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={64} className="text-white/80" />
                  </div>
                );
              })()}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                  <Calendar size={13} />
                  {project.date}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>

              <div className="mb-6">
                <p className="flex items-center gap-2 text-white font-medium text-sm mb-2">
                  <Target size={16} className="text-cyan-400" />
                  Problem
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
              </div>

              <div className="mb-6">
                <p className="text-white font-medium text-sm mb-3">Key Highlights</p>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-2 text-slate-300 text-sm"
                    >
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-white font-medium text-sm mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
