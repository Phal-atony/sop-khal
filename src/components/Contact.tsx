import { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Mail, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react';
=======
import { CheckCircle2, Globe2, Mail, MapPin, Send } from 'lucide-react';
>>>>>>> ee6f415 (fixed damn)
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { icon: MapPin, label: 'Location', value: 'Cambodia', href: null },
<<<<<<< HEAD
  { icon: Globe, label: 'Website', value: 'JASMINTOPUP', href: 'https://www.jasmintopup.site' },
=======
  { icon: Globe2, label: 'Website', value: 'JASMINTOPUP', href: 'https://www.jasmintopup.site' },
>>>>>>> ee6f415 (fixed damn)
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-violet-400 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Together</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-center">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text" id="name" name="name" value={form.name} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message" name="message" value={form.message} onChange={handleChange} required rows={5}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-purple-500/30 transition-colors">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              );
              return (
                <motion.div key={i} variants={staggerItem} whileHover={{ x: 5 }} className="group">
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:border-violet-500/30 hover:bg-slate-800/50 transition-all"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5">
                      {content}
                    </div>
=======
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
>>>>>>> ee6f415 (fixed damn)
                  )}
                </motion.div>
              );
            })}
<<<<<<< HEAD
            <motion.div
              variants={staggerItem}
              className="bg-gradient-to-br from-violet-600/10 to-purple-600/10 border border-violet-500/20 rounded-xl p-6"
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm currently available for freelance projects. Whether you need a new website, dashboard, or payment
                integration, feel free to reach out.
              </p>
            </motion.div>
          </motion.div>
=======

            <motion.div variants={staggerItem} className="glass-card overflow-hidden rounded-[2rem] p-3">
              <iframe
                title="Cambodia map"
                className="h-64 w-full rounded-[1.4rem] border-0 grayscale invert hue-rotate-180 saturate-150"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=102.0%2C9.8%2C107.8%2C14.8&layer=mapnik&marker=12.5657%2C104.9910"
              />
            </motion.div>
          </motion.aside>
>>>>>>> ee6f415 (fixed damn)
        </div>
      </div>
    </section>
  );
}
