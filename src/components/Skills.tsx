import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { skills } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import GradientOrbs from './GradientOrbs';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <GradientOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="A practical toolkit built across full-stack development, databases, machine learning, and cloud."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => {
            const Icon = (Icons as any)[group.icon] ?? Icons.Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-colors overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/15 transition-colors" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.08 + si * 0.03 }}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-xs font-medium hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
