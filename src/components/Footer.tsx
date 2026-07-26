import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-slate-950/50">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute -top-10 right-1/4 w-72 h-72 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {profile.name.split(' ')[0]}
              </span>
              <span className="text-slate-300">.dev</span>
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{profile.tagline}</p>
            <div className="flex items-center gap-3 mt-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Github size={16} />
              </a>
              <a href={profile.linkedin || '#'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Linkedin size={16} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Let's connect</p>
            <p className="text-slate-400 text-sm mb-4">Open to internships, full-time roles, and collaboration.</p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <Mail size={15} />
              Get in touch
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {year} {profile.name}. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 text-xs transition-colors"
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
