import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe2, Mail, MapPin, Send } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { icon: MapPin, label: 'Location', value: 'Cambodia', href: null },
  { icon: Globe2, label: 'Website', value: 'JASMINTOPUP', href: 'https://www.jasmintopup.site' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 2600);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-[#07020f]/55">
      <div className="purple-orb -right-24 top-16 h-96 w-96 opacity-50" />
      <div className="purple-orb -left-32 bottom-0 h-80 w-80 opacity-45" />
      <div className="section-shell relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerContainer} className="mx-auto max-w-3xl text-center">
          <motion.p variants={fadeInUp} className="eyebrow">Contact</motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Have a project in mind? <span className="gradient-text">Send a message</span>.
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-sm leading-7 text-violet-100/58 sm:text-base">
            Let’s talk about your website, top-up platform, admin dashboard, or payment integration.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }} className="glass-card rounded-[2rem] p-5 sm:p-7">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/15 text-emerald-300">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black">Message Ready!</h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-violet-100/58">This frontend form is ready for a backend or Telegram/email integration.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-violet-200/55">Name</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={updateForm}
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-violet-300/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition placeholder:text-violet-100/25 focus:border-violet-300/35 focus:bg-black/45"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-violet-200/55">Email</span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateForm}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-violet-300/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition placeholder:text-violet-100/25 focus:border-violet-300/35 focus:bg-black/45"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-violet-200/55">Subject</span>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={updateForm}
                    required
                    placeholder="Project subject"
                    className="w-full rounded-2xl border border-violet-300/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition placeholder:text-violet-100/25 focus:border-violet-300/35 focus:bg-black/45"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-violet-200/55">Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateForm}
                    required
                    rows={7}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-violet-300/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition placeholder:text-violet-100/25 focus:border-violet-300/35 focus:bg-black/45"
                  />
                </label>
                <button type="submit" disabled={loading} className="purple-button w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.aside initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const body = (
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/48">{info.label}</p>
                    <p className="mt-1 font-black text-white">{info.value}</p>
                  </div>
                </div>
              );

              return (
                <motion.div key={info.label} variants={staggerItem}>
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="glass-card block rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30">
                      {body}
                    </a>
                  ) : (
                    <div className="glass-card rounded-3xl p-5">{body}</div>
                  )}
                </motion.div>
              );
            })}

            <motion.div variants={staggerItem} className="glass-card overflow-hidden rounded-[2rem] p-3">
              <iframe
                title="Cambodia map"
                className="h-64 w-full rounded-[1.4rem] border-0 grayscale invert hue-rotate-180 saturate-150"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=102.0%2C9.8%2C107.8%2C14.8&layer=mapnik&marker=12.5657%2C104.9910"
              />
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
