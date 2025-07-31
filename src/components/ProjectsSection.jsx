import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, TrendingUp, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'AI Chatbot for United Airlines',
      description: 'Developed an intelligent NLP-based customer support chatbot that reduced response time by 75% and improved customer satisfaction scores.',
      tech: ['Python', 'NLP', 'TensorFlow', 'Flask', 'React'],
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/iam-vikas',
      demo: '#',
      impact: '75% faster response time'
    },
    {
      title: 'Predictive Maintenance System',
      description: 'Built LSTM-based time series forecasting models to predict equipment failures, reducing downtime by 60% for manufacturing operations.',
      tech: ['Python', 'LSTM', 'Time Series', 'Pandas', 'Scikit-learn'],
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500',
      github: 'https://github.com/iam-vikas',
      demo: '#',
      impact: '60% reduction in downtime'
    },
    {
      title: 'ESG vs Financial Performance',
      description: 'Automated data extraction using Python and Selenium to analyze the correlation between ESG scores and financial performance across S&P 500 companies.',
      tech: ['Python', 'Selenium', 'Pandas', 'Matplotlib', 'Statistical Analysis'],
      icon: Shield,
      gradient: 'from-purple-500 to-indigo-500',
      github: 'https://github.com/iam-vikas',
      demo: '#',
      impact: 'S&P 500 analysis'
    },
    {
      title: 'Real-time Fraud Detection',
      description: 'Implemented ML algorithms for real-time credit card fraud detection with 99.2% accuracy using ensemble methods and feature engineering.',
      tech: ['Python', 'XGBoost', 'Random Forest', 'Apache Kafka', 'Docker'],
      icon: Shield,
      gradient: 'from-red-500 to-pink-500',
      github: 'https://github.com/iam-vikas',
      demo: '#',
      impact: '99.2% accuracy rate'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Developed optimization algorithms to minimize supply chain costs while maintaining service levels, saving $2M annually for a Fortune 500 client.',
      tech: ['Python', 'OR-Tools', 'Linear Programming', 'PostgreSQL', 'Dash'],
      icon: Zap,
      gradient: 'from-orange-500 to-yellow-500',
      github: 'https://github.com/iam-vikas',
      demo: '#',
      impact: '$2M annual savings'
    },
    {
      title: 'Customer Segmentation Platform',
      description: 'Built an automated customer segmentation platform using clustering algorithms, improving marketing campaign effectiveness by 45%.',
      tech: ['Python', 'K-Means', 'PCA', 'Flask', 'D3.js', 'AWS'],
      icon: Brain,
      gradient: 'from-teal-500 to-blue-500',
      github: 'https://github.com/iam-vikas',
      demo: '#',
      impact: '45% better campaigns'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Innovative solutions that solve real-world problems through data science and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-slate-800 border-0 shadow-xl overflow-hidden">
                <CardHeader className="relative p-0">
                  <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 font-medium">
                          {project.impact}
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-white/10 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-4 h-4 bg-white/10 rounded-full"></div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 group/btn"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        Demo
                      </a>
                    </Button>
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