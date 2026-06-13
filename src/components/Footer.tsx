import { motion } from 'framer-motion';
import { ArrowUpRight, Globe2, Mail, MapPin } from 'lucide-react';
import { smoothScrollToSection } from '../lib/smoothScroll';
import footerLogo from '../assets/footer-logo.jpg';

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
  const scrollTo = (id: string) => smoothScrollToSection(id, { offset: 84 });

  return (
    <footer className="relative overflow-hidden bg-[#06020d] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <div className="purple-orb left-1/2 top-0 h-80 w-80 -translate-x-1/2 opacity-30" />
      <div className="section-shell relative z-10 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <button onClick={() => scrollTo('home')} className="mb-5 flex items-center gap-3">
              <span className="relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-violet-300/20 bg-violet-500/10 shadow-[0_14px_32px_rgba(139,92,246,0.18)]">
                <img src={footerLogo} alt="Sokphal logo" className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10" />
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
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-violet-200/55">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:phaltp1@gmail.com" className="flex items-center gap-3 rounded-2xl border border-violet-300/10 bg-white/[0.03] p-3 text-violet-100/65 transition hover:border-violet-300/25 hover:text-white">
                <Mail className="h-4 w-4 text-violet-300" /> phaltp1@gmail.com
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-violet-300/10 bg-white/[0.03] p-3 text-violet-100/65">
                <MapPin className="h-4 w-4 text-violet-300" /> Cambodia
              </div>
              <a href="https://www.jasmintopup.site" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-2xl border border-violet-300/10 bg-white/[0.03] p-3 text-violet-100/65 transition hover:border-violet-300/25 hover:text-white">
                <span className="flex items-center gap-3"><Globe2 className="h-4 w-4 text-violet-300" /> JASMINTOPUP</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-violet-300/10 pt-7 text-center text-xs font-semibold text-violet-100/40 sm:flex-row sm:text-left">
          <p>© 2026 Sokphal. All rights reserved.</p>
          <p>Premium purple portfolio · Founder of JASMINTOPUP</p>
        </div>
      </div>
    </footer>
  );
}
