import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  Building2,
  Landmark,
  BarChart,
  MessageCircle,
  Database,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const journeyData = [
  {
    company: 'Snapchat',
    title: 'AR Extern',
    timeline: 'July 2025 – August 2025',
    points: [
      'Contributed to ML-powered AR lens prototyping via Lens Studio',
      'Designed UX flow for real-time gesture-based triggers',
      'Gained practical exposure to live AR product dev at scale'
    ],
    highlight: { type: 'Tools', content: 'Lens Studio, Python, UX Flow Mapping' },
    icon: Camera,
    color: 'border-yellow-400',
    gradient: 'from-yellow-400 to-amber-500'
  },
  {
    company: 'Aditya Birla Group',
    title: 'AI Intern',
    timeline: 'January 2025 – June 2025',
    points: [
      'Saved ₹26 crore/year via route optimization using clustering and predictive analytics',
      'Modeled 70+ supply chain entities with LangChain + Neo4j',
      'Reduced delivery times by 23% across 100+ Indian districts'
    ],
    highlight: { type: 'Outcome', content: '₹26 Cr Saved, 23% Faster Delivery' },
    icon: Building2,
    color: 'border-purple-400',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    company: 'Indian School of Business',
    title: 'Research Intern (Govt. of India Project)',
    timeline: 'June 2024 – August 2024',
    points: [
      'Digitized MSME docs via InceptionV3 & ResNet OCR pipeline',
      'Built PostgreSQL + MongoDB hybrid data lake for scalable ingestion',
      'Increased pipeline throughput by 15% using REST APIs + automation'
    ],
    highlight: { type: 'Impact', content: 'Enabled faster MSME data access' },
    icon: Landmark,
    color: 'border-blue-400',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    company: 'HP',
    title: 'Venture Analytics Extern',
    timeline: 'April 2024 – May 2024',
    points: [
      'Assessed 20+ tech startups for VC evaluation using Python dashboards',
      'Built forecast models to map innovation adoption across domains',
      'Delivered insights that influenced investment committee decisions'
    ],
    highlight: { type: 'Tools', content: 'Python, Forecasting, Venture Analysis' },
    icon: BarChart,
    color: 'border-cyan-400',
    gradient: 'from-cyan-400 to-teal-500'
  },
  {
    company: 'Omdena',
    title: 'GPT-3 Mental Health Chatbot',
    timeline: 'Feb 2024 – Apr 2024',
    points: [
      'Developed GPT-3 mental health chatbot with personalized NLP flow',
      'Integrated sentiment-tracking via BERT loops for adaptive feedback',
      'Boosted user engagement by 40% in live deployment'
    ],
    highlight: { type: 'Result', content: '40% Engagement Boost' },
    icon: MessageCircle,
    color: 'border-emerald-400',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    company: 'Airtel',
    title: 'Machine Learning Intern',
    timeline: 'June 2023 – Aug 2023',
    points: [
      'Automated 10M+ row processing pipeline with Spark + GPU',
      'Reduced scraping latency 30% using multithreading + BeautifulSoup',
      'Enhanced clustering pipeline, boosting model stability by 20%'
    ],
    highlight: { type: 'Highlight', 'content': 'Processed 10M+ rows' },
    icon: Database,
    color: 'border-red-400',
    gradient: 'from-red-500 to-pink-500'
  }
];

export default function CareerProjectsSection() {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Where Ideas Became Outcomes
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A timeline of my professional journey, showcasing key projects and their impact.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 -translate-x-1/2" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start md:items-center gap-6"
              >
                <div className="hidden md:block absolute left-1/2 w-full">
                  <div className={`md:w-1/2 ${index % 2 !== 0 ? 'ml-auto' : ''}`}></div>
                </div>
                
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-4 md:translate-y-0 ring-4 ring-slate-50 dark:ring-slate-900 shadow-lg`}>
                  <item.icon className="w-4 h-4" />
                </div>

                <div className={`w-full ml-12 md:ml-0 md:w-5/12 ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                  <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-l-4 ${item.color} shadow-lg">
                    <CardContent className="p-6">
                      <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-1">{item.timeline}</p>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{item.company}</h3>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">{item.title}</h4>
                      
                      <ul className="space-y-2 mb-4">
                        {item.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Badge variant="secondary" className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-600">
                        <span className="font-semibold mr-1.5">{item.highlight.type}:</span>
                        {item.highlight.content}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <blockquote className="text-lg italic text-slate-600 dark:text-slate-400 border-l-4 border-amber-500 pl-4 inline-block">
            Real impact isn’t about buzzwords — it’s about results you can measure.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
