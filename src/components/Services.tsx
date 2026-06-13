import { motion } from 'framer-motion';
import { ArrowUpRight, CreditCard, LayoutDashboard, Paintbrush, ShieldCheck, Smartphone, Workflow } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const services = [
  {
    icon: Workflow,
    title: 'Full Stack Web Development',
    description: 'Modern business websites with clean structure, reusable components, responsive pages, and production-ready flow.',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard Development',
    description: 'Control panels for orders, products, customers, banners, settings, logs, and simple business management.',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
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
  },
];

export default function Services() {
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
      </div>
    </section>
  );
}
