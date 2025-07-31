import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Zap,
  Heart,
  Users2
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ImpactSection() {
  const metrics = [
    {
      icon: '💸',
      number: '₹26 Crore',
      subtitle: 'Saved through route optimization',
      color: 'from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30',
    },
    {
      icon: '🤖',
      number: '40%',
      subtitle: 'Increase in chatbot engagement',
      color: 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30',
    },
    {
      icon: '🏢',
      number: '6+',
      subtitle: 'Internships across Fortune 500',
      color: 'from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30',
    },
    {
      icon: '🧠',
      number: '70+',
      subtitle: 'Entities in AI knowledge graphs',
      color: 'from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30',
    },
    {
      icon: '🚚',
      number: '23%',
      subtitle: 'Reduction in delivery times',
      color: 'from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30',
    },
    {
      icon: '📈',
      number: '88%',
      subtitle: 'Accuracy in predictive models',
      color: 'from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30',
    }
  ];

  const valuePillars = [
    {
      icon: Brain,
      title: 'Data-Driven Thinking',
      description: 'Every choice is backed by data. Every result is measured.',
    },
    {
      icon: Zap,
      title: 'Impact Focus',
      description: 'Solutions that drive clear business outcomes and real-world change.',
    },
    {
      icon: Heart,
      title: 'Innovation Mindset',
      description: 'Pushing boundaries with new tech like GPT, LLMs, and graph AI.',
    },
    {
      icon: Users2,
      title: 'Collaborative Leadership',
      description: 'Leading teams, mentoring peers, and executing high-stakes deliverables.',
    }
  ];

  return (
    <section id="impact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br ${metric.color} border-0 h-full`}>
                    <CardContent className="p-5">
                      <div className="text-3xl mb-3">{metric.icon}</div>
                      <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                        {metric.number}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300 leading-tight">
                        {metric.subtitle}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Bridging the gap between <span className="text-sky-500">data</span> and <span className="text-green-500">decisions</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              With a unique blend of machine learning expertise and strategic problem solving, I transform messy datasets into meaningful outcomes — whether it’s optimizing logistics across India or automating chat interactions at scale.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
              From saving ₹26 crores with smart freight routing to improving user engagement through responsive NLP systems, my journey cuts across industries, always anchored in one thing: real impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valuePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/50 dark:bg-slate-800/50 p-6 h-full border-slate-200/80 dark:border-slate-700/80">
                    <div className="flex items-center gap-3 mb-3">
                      <pillar.icon className="w-6 h-6 text-amber-500" />
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">{pillar.title}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {pillar.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}