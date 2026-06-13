import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Code2, LayoutDashboard, Gamepad2, CreditCard, Palette, ShieldCheck } from 'lucide-react';
=======
import { ArrowUpRight, CreditCard, LayoutDashboard, Paintbrush, ShieldCheck, Smartphone, Workflow } from 'lucide-react';
>>>>>>> ee6f415 (fixed damn)
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const services = [
  {
<<<<<<< HEAD
    icon: Code2,
    title: 'Full Stack Web Development',
    description: 'End-to-end web application development with modern frameworks, responsive design, and scalable architecture.',
    color: 'from-violet-500 to-purple-600',
=======
    icon: Workflow,
    title: 'Full Stack Web Development',
    description: 'Modern business websites with clean structure, reusable components, responsive pages, and production-ready flow.',
>>>>>>> ee6f415 (fixed damn)
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard Development',
<<<<<<< HEAD
    description: 'Custom admin panels with analytics, user management, real-time data visualization, and secure access controls.',
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Gamepad2,
    title: 'Game Top-up Website Development',
    description: 'Specialized platforms for game top-up services with order tracking, payment integration, and automated workflows.',
    color: 'from-emerald-500 to-teal-500',
=======
    description: 'Control panels for orders, products, customers, banners, settings, logs, and simple business management.',
>>>>>>> ee6f415 (fixed damn)
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
<<<<<<< HEAD
    description: 'Secure payment gateway integration including KHQR, webhooks, and automated transaction processing.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Website Design',
    description: 'Modern, clean, and user-friendly interfaces with attention to detail and professional aesthetics.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: ShieldCheck,
    title: 'Website Security Hardening',
    description: 'Security implementation including authentication, rate limiting, security headers, and vulnerability protection.',
    color: 'from-yellow-500 to-orange-500',
=======
    description: 'Secure checkout UI, KHQR/payment flow, order status handling, and clear customer payment experience.',
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Website Design',
    description: 'Dark premium visuals, purple branding, glass cards, smooth hover states, and animation details.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive Design',
    description: 'Layouts that look clean on phone, tablet, and desktop with spacing tuned for real users.',
  },
  {
    icon: ShieldCheck,
    title: 'Website Security Setup',
    description: 'Basic hardening, protected admin flows, safer frontend logic, and better production configuration habits.',
>>>>>>> ee6f415 (fixed damn)
  },
];

export default function Services() {
<<<<<<< HEAD
  return (
    <section id="services" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-violet-400 font-semibold text-sm uppercase tracking-wider">
            What I Offer
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Services I{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Provide</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional web development services tailored for businesses and individuals looking to build impactful digital products.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} variants={staggerItem} whileHover={{ scale: 1.02, y: -5 }} className="group relative">
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:border-violet-500/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-violet-400 transition-colors">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
=======
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="purple-orb left-1/2 top-24 h-96 w-96 -translate-x-1/2 opacity-45" />
      <div className="section-shell relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerContainer} className="mx-auto max-w-3xl text-center">
          <motion.p variants={fadeInUp} className="eyebrow">Services</motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            End-to-end help for <span className="gradient-text">web businesses</span>.
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-sm leading-7 text-violet-100/58 sm:text-base">
            I can help build websites, dashboards, payment flows, and polished product pages.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.title} variants={staggerItem} className="glass-card group relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-300/30">
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-violet-300/12 bg-white/[0.03] px-3 py-1 text-xs font-bold text-violet-100/45">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-black text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-violet-100/56">{service.description}</p>
                  <button onClick={scrollToContact} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-violet-300 transition hover:text-violet-100">
                    Start Project <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
>>>>>>> ee6f415 (fixed damn)
      </div>
    </section>
  );
}
