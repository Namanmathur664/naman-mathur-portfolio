import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import GradientOrbs from './GradientOrbs';

type Status = 'idle' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    // NOTE: No email backend is configured in this template.
    // To enable real email delivery, connect a service such as:
    //   - Formspree (set the form `action` to your Formspree endpoint)
    //   - EmailJS (call emailjs.sendForm with your service/template IDs)
    //   - Resend / a Supabase Edge Function (POST to your endpoint)
    // Until a backend is connected, we surface a clear "not configured" state
    // rather than faking a successful send.
    setStatus('error');
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: 'GitHub', value: '@namanmathur664', href: profile.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin || '#' },
    { icon: MapPin, label: 'Location', value: profile.location, href: '#' },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <GradientOrbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="I'm actively open to internships, full-time roles, and collaboration. The fastest way to reach me is email."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs">{c.label}</p>
                  <p className="text-white font-medium text-sm">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-sm border border-white/10"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                error={errors.name}
                placeholder="Your name"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                error={errors.email}
                placeholder="you@example.com"
              />
            </div>
            <Field
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
              error={errors.subject}
              placeholder="What's this about?"
            />
            <div className="mb-5">
              <label className="block text-slate-300 text-sm font-medium mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell me about the opportunity..."
                className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-slate-500 text-sm outline-none transition-colors ${
                  errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-cyan-500/50'
                }`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <Send size={16} />
              Send Message
            </button>

            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                <CheckCircle2 size={16} />
                Thanks! Your message has been sent.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>
                  The contact form isn't connected to an email backend yet. Please reach me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="underline font-medium">{profile.email}</a>.
                </span>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-slate-300 text-sm font-medium mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-slate-500 text-sm outline-none transition-colors ${
          error ? 'border-red-500/50' : 'border-white/10 focus:border-cyan-500/50'
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
