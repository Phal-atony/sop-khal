import { motion } from 'framer-motion';
import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Github,
  LayoutDashboard,
  Server,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Wand2,
  Zap,
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const skillCategories = [
  {
    title: 'AI & ML',
    skills: [
      { name: 'LLM Integration', value: 85, icon: BrainCircuit },
      { name: 'Prompt Engineering', value: 82, icon: Sparkles },
      { name: 'AI Automation', value: 78, icon: Bot },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', value: 88, icon: Server },
      { name: 'REST APIs', value: 90, icon: Zap },
      { name: 'Payment APIs', value: 86, icon: CreditCard },
      { name: 'Database Design', value: 84, icon: Database },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'VPS & Deployment', value: 87, icon: Cloud },
      { name: 'Git & GitHub', value: 90, icon: Github },
      { name: 'Cloudflare Setup', value: 86, icon: ShieldCheck },
      { name: 'Vercel / Render', value: 88, icon: LayoutDashboard },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React & TypeScript', value: 92, icon: Code2 },
      { name: 'Tailwind CSS', value: 94, icon: Wand2 },
      { name: 'Responsive UI', value: 91, icon: Smartphone },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-white/[0.05] bg-[#07070d]/70 py-16 sm:py-20">
      <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-purple-600/8 blur-3xl" />

      <div className="section-shell relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-12 max-w-3xl"
        >
          <motion.p variants={fadeInUp} className="eyebrow">Skills</motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Tools I use to build <span className="gradient-text">modern products</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Same card layout as the reference: purple icons, percentage labels, and smooth animated progress bars.
          </motion.p>
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-7 flex items-center gap-4">
                <span className="h-px w-6 bg-violet-500" />
                <h3 className="text-xl font-black tracking-tight text-slate-200 sm:text-2xl">{category.title}</h3>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="group rounded-[1.45rem] border border-white/[0.09] bg-[#101018]/88 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_18px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:border-violet-500/35 hover:bg-[#13111f]"
                    >
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/14 text-violet-400 transition duration-300 group-hover:bg-violet-500/20 group-hover:text-violet-300">
                            <Icon className="h-5 w-5" />
                          </span>
                          <h4 className="truncate text-base font-black text-slate-100 sm:text-lg">{skill.name}</h4>
                        </div>
                        <span className="shrink-0 text-xs font-bold text-violet-400">{skill.value}%</span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.95, ease: 'easeOut', delay: 0.12 + categoryIndex * 0.08 + index * 0.06 }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-600 via-violet-500 to-purple-400 shadow-[0_0_24px_rgba(139,92,246,0.38)]"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
