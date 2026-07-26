import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import GradientOrbs from './GradientOrbs';

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <GradientOrbs />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="A consistent academic record across engineering and schooling."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 top-2 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-slate-950 sm:-translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50" />

                {/* Spacer for desktop alternating */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <div className="flex-1 sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                  <div className="group p-5 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      <GraduationCap size={18} className="text-cyan-400" />
                      <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                        <Calendar size={12} />
                        {edu.duration}
                      </span>
                      {edu.current && (
                        <span className="px-2 py-0.5 rounded-md bg-green-500/10 text-green-400 text-[10px] font-semibold uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-semibold text-lg">{edu.institution}</h3>
                    <p className="text-cyan-400 text-sm mt-1">{edu.degree}</p>
                    <p className="text-slate-400 text-sm mt-2">{edu.detail}</p>
                    <p className={`inline-flex items-center gap-1 text-slate-500 text-xs mt-2 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                      <MapPin size={12} />
                      {edu.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
