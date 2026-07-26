import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';
import GradientOrbs from './GradientOrbs';

const floatingBadges = [
  { label: 'Python', top: '12%', left: '8%', delay: 0 },
  { label: 'SQL', top: '22%', right: '6%', delay: 0.5 },
  { label: 'ML', top: '68%', left: '4%', delay: 1 },
  { label: 'React', bottom: '14%', right: '10%', delay: 1.5 },
  { label: 'Azure', top: '45%', left: '0%', delay: 2 },
  { label: 'Data Science', bottom: '8%', left: '20%', delay: 2.5 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <GradientOrbs variant="hero" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-6"
            >
              <Sparkles size={14} />
              Open to Internships & Full-time Roles
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4"
            >
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">{profile.name}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl sm:text-2xl text-slate-300 font-medium mb-4"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              variants={item}
              className="text-slate-400 text-base leading-relaxed max-w-xl mb-8"
            >
              {profile.subtitle}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                View My Work
                <ArrowRight size={16} />
              </button>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            {/* Rotating rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full border border-white/5 animate-spin-slow" />
              <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-500/10 animate-spin-slower" />
              <div className="absolute w-[220px] h-[220px] rounded-full border border-blue-500/10 animate-spin-slow" />
            </div>

            {/* Central glass card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-64 h-64 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center shadow-2xl"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                <span className="text-3xl font-bold text-white">NM</span>
              </div>
              <p className="text-white font-semibold">{profile.name}</p>
              <p className="text-cyan-400 text-xs mt-1">{profile.tagline}</p>
              <div className="mt-4 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-400">Available for work</span>
              </div>
            </motion.div>

            {/* Floating badges */}
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' }}
                style={{ top: badge.top, left: badge.left, right: badge.right, bottom: badge.bottom }}
                className="absolute px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-200 shadow-lg"
              >
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 text-xs flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
}
