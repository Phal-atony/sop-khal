import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';
import jasmintopupBanner from '../assets/jasmintopup-banner.png';

const project = {
  title: 'JASMINTOPUP',
  description: 'JASMINTOPUP is a fast and secure game top-up website and easy KHQR payment.',
  tags: ['NextJS', 'AutoAPI'],
  href: 'https://www.jasmintopup.site',
  image: jasmintopupBanner,
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="purple-orb -left-28 top-32 h-96 w-96 opacity-50" />
      <div className="section-shell relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={fadeInUp} className="eyebrow">
            Featured Project
          </motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Premium project <span className="gradient-text">showcase</span>.
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-sm leading-7 text-violet-100/58 sm:text-base">
            Clean project card with image, title, short description, and technology tags.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.a
            variants={staggerItem}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group mx-auto block w-full max-w-3xl overflow-hidden rounded-[2.25rem] border border-violet-300/12 transition duration-300 hover:-translate-y-2 hover:border-violet-300/30 hover:shadow-[0_24px_80px_rgba(76,29,149,0.22)]"
          >
            <div className="relative overflow-hidden border-b border-violet-300/10">
              <img
                src={project.image}
                alt={project.title}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[320px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              <div className="pointer-events-none absolute right-5 top-5 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-4 py-2 text-xs font-black text-white shadow-lg shadow-violet-600/30 sm:right-6 sm:top-6">
                Featured
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                {project.title}
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100/62 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-500/40 bg-violet-600/20 px-5 py-2.5 text-sm font-bold text-violet-100 shadow-[0_8px_24px_rgba(139,92,246,0.18),inset_0_1px_0_rgba(255,255,255,0.06)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
