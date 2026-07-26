import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { certifications } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import GradientOrbs from './GradientOrbs';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <GradientOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified credentials"
          subtitle="Industry-recognized certifications across cloud, AI, data, and core computer science."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => {
            const Icon = (Icons as any)[cert.icon] ?? Icons.Award;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative p-5 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-colors overflow-hidden"
              >
                <div className={`absolute -right-6 -top-6 w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity`} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <Icon size={22} />
                </div>

                <h3 className="text-white font-semibold text-sm leading-snug mb-2 min-h-[2.5rem]">{cert.name}</h3>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-slate-400 text-xs font-medium">{cert.issuer}</span>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[10px] font-semibold uppercase tracking-wider">
                    Certified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
