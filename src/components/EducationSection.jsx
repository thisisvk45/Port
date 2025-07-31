import React from 'react';
import { motion } from 'framer-motion';
import { School } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EducationSection() {
  const education = [
    {
      university: 'Wake Forest University',
      degree: 'MS in Business Analytics',
      timeline: '2025 – 2026',
      gpa: '3.65',
      courses: ['Statistical Modeling', 'Deep Learning', 'Time Series', 'NLP']
    },
    {
      university: 'Plaksha University',
      degree: 'B.Tech in Data Science, Minor in Business',
      timeline: '2021 – 2025',
      gpa: '3.65',
      courses: ['Econometrics', 'Algorithm Design', 'Applied ML', 'Finance']
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 transition-colors duration-300 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Education & Credentials
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The academic foundation for my technical and business expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition-colors">
                        {edu.university}
                      </CardTitle>
                      <p className="text-amber-600 dark:text-amber-400 font-semibold">{edu.degree}</p>
                    </div>
                    <Badge variant="outline" className="mt-1">{edu.timeline}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(course => (
                      <Badge key={course} variant="secondary" className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}