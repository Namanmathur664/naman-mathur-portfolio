import { motion } from 'framer-motion';
import { FileText, BookOpen, Calendar, Tag } from 'lucide-react';
import { research } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import GradientOrbs from './GradientOrbs';

export default function Research() {
  return (
    <section id="research" className="relative py-24 overflow-hidden">
      <GradientOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Research"
          title="Published work"
          subtitle="Peer-reviewed research contributions presented at international conferences."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {research.map((paper, i) => (
            <motion.article
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-colors overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/15 transition-colors" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FileText size={22} />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                  <Calendar size={12} />
                  {paper.year}
                </span>
              </div>

              <h3 className="text-white font-semibold text-lg mb-1">{paper.title}</h3>
              <p className="text-cyan-400 text-sm font-medium mb-4">{paper.conference}</p>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{paper.description}</p>

              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <Tag size={13} />
                <span>{paper.area}</span>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-slate-400 text-xs">
                <BookOpen size={14} className="text-cyan-400" />
                International Conference Publication
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
