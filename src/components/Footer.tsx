import { motion } from 'framer-motion';

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
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

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
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">&copy; 2026 Your Name. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Founder of JASMINTOPUP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
