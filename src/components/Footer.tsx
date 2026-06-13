import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
import { ArrowUpRight, Globe2, Mail, MapPin } from 'lucide-react';
>>>>>>> ee6f415 (fixed damn)

const footerLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Services', id: 'services' },
  { name: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
<<<<<<< HEAD
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">YN</span>
              </div>
              <span className="font-semibold">Your Name</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer &amp; Founder of JASMINTOPUP. Building modern, secure web applications and digital platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-gray-400 text-sm hover:text-violet-400 transition-colors"
                >
=======
    <footer className="relative overflow-hidden bg-[#06020d] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <div className="purple-orb left-1/2 top-0 h-80 w-80 -translate-x-1/2 opacity-30" />
      <div className="section-shell relative z-10 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <button onClick={() => scrollTo('home')} className="mb-5 flex items-center gap-3">
              <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-violet-300/20 bg-violet-500/10">
                <span className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-500 opacity-80" />
                <span className="relative text-base font-black text-white">S</span>
              </span>
              <span className="text-lg font-black tracking-tight">&lt;Sokphal<span className="text-violet-400">/&gt;</span></span>
            </button>
            <p className="max-w-sm text-sm leading-7 text-violet-100/55">
              Full Stack Developer &amp; Founder of JASMINTOPUP. Building modern websites, dashboards, payment systems, and digital top-up platforms.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-violet-200/55">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)} className="rounded-xl px-3 py-2 text-left text-sm font-bold text-violet-100/55 transition hover:bg-white/[0.04] hover:text-violet-200">
>>>>>>> ee6f415 (fixed damn)
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                Email:{' '}
                <a href="mailto:hello@example.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                  hello@example.com
                </a>
              </p>
              <p className="text-gray-400">
                Location: <span className="text-white">Cambodia</span>
              </p>
              <p className="text-gray-400">
                Website:{' '}
                <a
                  href="https://www.jasmintopup.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  JASMINTOPUP
                </a>
              </p>
=======
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-violet-200/55">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:hello@example.com" className="flex items-center gap-3 rounded-2xl border border-violet-300/10 bg-white/[0.03] p-3 text-violet-100/65 transition hover:border-violet-300/25 hover:text-white">
                <Mail className="h-4 w-4 text-violet-300" /> hello@example.com
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-violet-300/10 bg-white/[0.03] p-3 text-violet-100/65">
                <MapPin className="h-4 w-4 text-violet-300" /> Cambodia
              </div>
              <a href="https://www.jasmintopup.site" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-2xl border border-violet-300/10 bg-white/[0.03] p-3 text-violet-100/65 transition hover:border-violet-300/25 hover:text-white">
                <span className="flex items-center gap-3"><Globe2 className="h-4 w-4 text-violet-300" /> JASMINTOPUP</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
>>>>>>> ee6f415 (fixed damn)
            </div>
          </motion.div>
        </div>

<<<<<<< HEAD
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">&copy; 2026 Your Name. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Founder of JASMINTOPUP</p>
          </div>
=======
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-violet-300/10 pt-7 text-center text-xs font-semibold text-violet-100/40 sm:flex-row sm:text-left">
          <p>© 2026 Sokphal. All rights reserved.</p>
          <p>Premium purple portfolio · Founder of JASMINTOPUP</p>
>>>>>>> ee6f415 (fixed damn)
        </div>
      </div>
    </footer>
  );
}
