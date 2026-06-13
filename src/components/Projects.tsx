import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const featured = {
  title: 'JASMINTOPUP',
  subtitle: 'Game Top-up Platform',
  description:
    'A modern Cambodian game top-up website with KHQR payment, order tracking, admin dashboard, product management, promo codes, customer management, and secure checkout flow.',
  website: 'https://www.jasmintopup.site',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'KHQR Payment', 'Cloudflare'],
  features: [
    'Game top-up ordering',
    'KHQR checkout',
    'Admin dashboard',
    'Order management',
    'Telegram notification',
    'Promo code system',
    'Secure authentication',
    'Responsive mobile design',
  ],
};

const others = [
  {
    title: 'Admin Dashboard System',
    description: 'Comprehensive admin dashboard with analytics, user management, and real-time data visualization.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    tags: ['Dashboard', 'Analytics'],
  },
  {
    title: 'Game Tournament Registration',
    description: 'Platform for organizing and registering gaming tournaments with bracket systems and live updates.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    tags: ['Gaming', 'Registration'],
  },
  {
    title: 'Digital Product Store',
    description: 'E-commerce platform for digital products with instant delivery and automated payment processing.',
    techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Cloudflare'],
    tags: ['E-commerce', 'Digital'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-violet-400 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world applications built with modern technologies, focused on performance, security, and user experience.
          </motion.p>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] bg-gradient-to-br from-violet-600/20 to-purple-600/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-violet-500/30"
                    >
                      <Sparkles className="w-12 h-12 text-white" />
                    </motion.div>
                    <p className="text-gray-400">Live Project</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <div className="mb-4">
                  <span className="text-violet-400 text-sm font-medium">MAIN PROJECT</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">{featured.title}</h3>
                <p className="text-gray-400 mb-4">{featured.subtitle}</p>
                <p className="text-gray-300 mb-6">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.techStack.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-gray-300">{t}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {featured.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <motion.a
                  href={featured.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {others.map((p, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-4 group-hover:from-violet-600/20 group-hover:to-purple-600/20 transition-all">
                <Github className="w-6 h-6 text-gray-400 group-hover:text-violet-400 transition-colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition-colors">{p.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t, ti) => (
                  <span key={ti} className="px-2 py-1 text-xs bg-slate-700/50 rounded-md text-gray-400">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.techStack.map((t, ti) => (
                  <span key={ti} className="px-2 py-1 text-xs bg-violet-500/10 border border-violet-500/20 rounded-md text-violet-400">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
