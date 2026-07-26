import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import GradientOrbs from './GradientOrbs';
import { Code2, Database, Brain, Cloud } from 'lucide-react';

const focusAreas = [
  { icon: Code2, label: 'Full-Stack Engineering', desc: 'React, Node.js, Express, Flask' },
  { icon: Database, label: 'Database Architecture', desc: 'MySQL, SQL Server, schema design' },
  { icon: Brain, label: 'Machine Learning', desc: 'Scikit-learn, Pandas, model deployment' },
  { icon: Cloud, label: 'Cloud Integration', desc: 'Microsoft Azure deployment' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <GradientOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="About Me"
          title="A bit about who I am"
          subtitle="CS Engineering student focused on building data-driven, full-stack, and machine-learning applications from concept to deployment."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-slate-300 leading-relaxed"
          >
            <p>
              I'm a <span className="text-cyan-400 font-medium">Computer Science & Engineering</span> student at
              Manav Rachna College of Engineering, currently maintaining a CGPA of 8.60/10. My academic journey
              is grounded in core CS fundamentals — data structures, operating systems, DBMS, computer networks,
              and architecture — and extends into applied building.
            </p>
            <p>
              I gravitate toward projects that span the full stack: designing normalized relational databases,
              building REST APIs with Node/Express and Flask, crafting React interfaces, and deploying
              machine-learning models end to end. I've shipped systems ranging from a student-grade prediction
              ML pipeline to a cloud-hosted Azure student management platform.
            </p>
            <p>
              My approach is to <span className="text-cyan-400 font-medium">solve the real problem first</span> —
              understand the workflow, model the data correctly, then layer in the interface and intelligence.
              I'm actively seeking internships and full-time roles where I can apply this end-to-end mindset to
              meaningful products.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {focusAreas.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <f.icon size={18} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{f.label}</p>
                    <p className="text-slate-400 text-xs">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-white/10 overflow-hidden group"
              >
                <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-colors" />
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
