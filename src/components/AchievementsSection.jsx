import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Zap, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AchievementsSection() {
  const achievements = [
    { text: 'Built ₹26 Cr-saving optimizer at ABG', year: '2025', icon: Trophy, color: 'text-amber-500' },
    { text: 'Published research for Govt. of India via ISB', year: '2024', icon: Award, color: 'text-blue-500' },
    { text: 'Created United Airlines AI chatbot saving $41K/month', year: '2024', icon: Zap, color: 'text-purple-500' },
    { text: 'Conducted ESG-financial correlation study on 300+ companies', year: '2023', icon: Shield, color: 'text-green-500' },
    { text: 'Selected for 6+ internships across Snap, HP, Airtel, ABG', year: '', icon: Star, color: 'text-yellow-500' },
    { text: 'Led 30+ fellows as UN Millennium Campus Director', year: '2022', icon: Users, color: 'text-pink-500' }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Key Achievements
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Highlights of my professional and leadership accomplishments.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-700`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">{item.text}</p>
                  </div>
                  {item.year && (
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 flex-shrink-0">
                      {item.year}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}