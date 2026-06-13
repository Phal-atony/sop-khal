import { motion } from 'framer-motion';
import { ArrowUpRight, Globe2, LayoutDashboard, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const projects = [
  {
    icon: Globe2,
    title: 'JASMINTOPUP',
    category: 'Top-up Platform',
    description: 'A digital top-up platform with products, checkout flow, KHQR payment, order tracking, and customer-focused UI.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'KHPay', 'Cloudflare'],
    href: 'https://www.jasmintopup.site',
    featured: true,
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard System',
    category: 'Business Control Panel',
    description: 'A modern admin panel with orders, games, customers, products, banners, settings, and secure admin workflow.',
    tags: ['Dashboard', 'Orders', 'Customers', 'Analytics'],
    href: '#contact',
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'Premium Portfolio Website',
    category: 'Personal Branding',
    description: 'A smooth animated portfolio for showcasing skills, services, projects, experience, and contact details.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Responsive'],
    href: '#home',
    featured: false,
  },
];

function ProjectMockup({ featured }: { featured: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-violet-300/10 bg-[#0d041a] p-3 ${featured ? 'h-48 sm:h-60' : 'h-40'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(168,85,247,0.36),transparent_56%)]" />
      <div className="relative h-full rounded-2xl border border-white/10 bg-black/30 p-3">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="grid h-[calc(100%-1.75rem)] grid-cols-[0.7fr_1fr] gap-3">
          <div className="space-y-2">
            <div className="h-6 rounded-lg bg-violet-400/25" />
            <div className="h-4 rounded-lg bg-white/10" />
            <div className="h-4 w-2/3 rounded-lg bg-white/10" />
            <div className="mt-4 h-16 rounded-2xl bg-gradient-to-br from-violet-500/25 to-fuchsia-500/10" />
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-violet-700/25 via-fuchsia-700/15 to-black/20 p-3">
            <div className="mb-3 h-3 w-20 rounded-full bg-white/20" />
            <div className="grid grid-cols-2 gap-2">
              <span className="h-12 rounded-xl bg-white/10" />
              <span className="h-12 rounded-xl bg-violet-400/20" />
              <span className="h-12 rounded-xl bg-fuchsia-400/15" />
              <span className="h-12 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const handleLink = (href: string) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="purple-orb -left-28 top-32 h-96 w-96 opacity-50" />
      <div className="section-shell relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerContainer} className="mx-auto max-w-3xl text-center">
          <motion.p variants={fadeInUp} className="eyebrow">Featured Projects</motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Real products and platforms, <span className="gradient-text">built with care</span>.
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-sm leading-7 text-violet-100/58 sm:text-base">
            Projects focused on top-up business, dashboard systems, customer experience, and performance.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                variants={staggerItem}
                className={`glass-card group rounded-[2rem] p-4 transition duration-300 hover:-translate-y-2 hover:border-violet-300/30 ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                <ProjectMockup featured={project.featured} />
                <div className="p-2 pt-5 sm:p-4 sm:pt-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300/65">{project.category}</p>
                        <h3 className="text-xl font-black text-white">{project.title}</h3>
                      </div>
                    </div>
                    <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-200">0{index + 1}</span>
                  </div>
                  <p className="text-sm leading-7 text-violet-100/58">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-violet-300/12 bg-white/[0.035] px-3 py-1.5 text-xs font-bold text-violet-100/68">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.href.startsWith('http') ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="purple-button mt-6 py-2.5">
                      Visit Website <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <button onClick={() => handleLink(project.href)} className="ghost-button mt-6 py-2.5">
                      Project Details <ArrowUpRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
