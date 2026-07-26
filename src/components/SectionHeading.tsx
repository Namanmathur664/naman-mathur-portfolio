import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, light }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3">
        {eyebrow}
      </span>
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500" />
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500" />
      </div>
    </motion.div>
  );
}
