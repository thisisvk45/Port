import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Github, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vikas-kumar-19a6741b4/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      url: 'https://github.com/thisisvk45',
      label: 'GitHub'
    },
    {
      icon: FileText,
      url: 'https://medium.com/@imvk45',
      label: 'Medium'
    },
    {
      icon: Mail,
      url: 'mailto:kumav25@wfu.edu',
      label: 'Email'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turning data into{' '}
            <span className="gradient-text">decisions</span>.{' '}
            <br className="hidden sm:block" />
            Building with{' '}
            <span className="gradient-text">purpose</span>.
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span className="font-semibold text-slate-900 dark:text-slate-100">Vikas</span> — a data-driven problem solver 
            blending analytics, ML, and strategy to make things better.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </Button>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center text-slate-500 dark:text-slate-400"
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}