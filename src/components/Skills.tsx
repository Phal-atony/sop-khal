import { motion } from 'framer-motion';
import { Code, Server, Database, Shield } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const categories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'from-fuchsia-500 to-pink-500',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Next.js API Routes', level: 85 },
      { name: 'REST APIs', level: 85 },
      { name: 'Prisma ORM', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    title: 'Database & Hosting',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Neon PostgreSQL', level: 80 },
      { name: 'Vercel', level: 85 },
      { name: 'Render', level: 75 },
      { name: 'Cloudflare', level: 80 },
      { name: 'Git & GitHub', level: 90 },
    ],
  },
  {
    title: 'Security & Payments',
    icon: Shield,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Admin Authentication', level: 85 },
      { name: 'Rate Limiting', level: 80 },
      { name: 'Payment Webhooks', level: 80 },
      { name: 'KHQR Integration', level: 85 },
      { name: 'Security Headers', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-violet-400 font-semibold text-sm uppercase tracking-wider">
            Skills &amp; Expertise
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Work With</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Focused on modern web technologies for building scalable and secure applications that solve real business problems.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={ci}
                variants={staggerItem}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:border-violet-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <div key={si}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: ci * 0.1 + si * 0.05, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
