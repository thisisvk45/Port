import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, FileText } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vikas-kumar-19a6741b4/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      url: 'https://github.com/iam-vikas',
      label: 'GitHub'
    },
    {
      icon: FileText,
      url: 'https://medium.com/@vikas.msba',
      label: 'Medium'
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Let's build something{' '}
              <span className="gradient-text">meaningful</span>.
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Data science isn't just about algorithms — it's about creating solutions that make a real difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-amber-500/25">
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-slate-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>by Vikas Kumar</span>
              </div>
              
              <div className="text-slate-400 text-sm">
                <p>MS Business Analytics '26 • Wake Forest University</p>
              </div>
              
              <div className="text-slate-400 text-sm">
                © 2024 All rights reserved.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}