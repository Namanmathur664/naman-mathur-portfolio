import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { achievements } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import GradientOrbs from './GradientOrbs';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <GradientOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones worth noting"
          subtitle="Research publications and competitive recognitions that mark key points in my journey."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((a, i) => {
            const Icon = (Icons as any)[a.icon] ?? Icons.Trophy;
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-colors overflow-hidden"
              >
                <div className={`absolute -right-10 -top-10 w-28 h-28 rounded-full bg-gradient-to-br ${a.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-white shadow-lg`}>
                    <Icon size={26} />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                    {a.year}
                  </span>
                </div>

                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                  {a.type}
                </span>
                <h3 className="text-white font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
