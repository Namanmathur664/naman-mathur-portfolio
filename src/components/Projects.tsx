import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { projects, type ProjectCategory } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import GradientOrbs from './GradientOrbs';
import ProjectModal from './ProjectModal';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const categories: ProjectCategory[] = ['All', 'ML/AI', 'Full-Stack', 'Database', 'Cloud', 'Analytics'];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <GradientOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of full-stack, database, machine-learning, and cloud projects — each solving a real workflow problem."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {featured.map((project, i) => {
              const Icon = (Icons as any)[project.icon] ?? Icons.Code2;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelected(project)}
                  className="group relative md:col-span-1 cursor-pointer rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all overflow-hidden"
                >
                  {/* Visual top */}
                  <div className={`relative h-40 bg-gradient-to-br ${project.color} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon size={56} className="text-white/80" />
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm text-[10px] font-semibold text-white uppercase tracking-wider">
                      Featured
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                      <ArrowUpRight size={18} className="text-slate-500 group-hover:text-cyan-400 group-hover:rotate-45 transition-all" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-[11px] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Rest of projects */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((project, i) => {
              const Icon = (Icons as any)[project.icon] ?? Icons.Code2;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelected(project)}
                  className="group relative cursor-pointer rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all overflow-hidden"
                >
                  <div className={`relative h-32 bg-gradient-to-br ${project.color} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon size={44} className="text-white/80" />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold">{project.name}</h3>
                      <ArrowUpRight size={16} className="text-slate-500 group-hover:text-cyan-400 group-hover:rotate-45 transition-all" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 text-[11px] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
