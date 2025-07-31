import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function BlogSection() {
  const blogPosts = [
    {
      title: 'The Future of Data Analytics in Business Decision Making',
      summary: 'Exploring how advanced analytics and AI are revolutionizing the way businesses make strategic decisions, with real-world case studies from Fortune 500 companies.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Data Science',
      url: 'https://medium.com/@vikas.msba'
    },
    {
      title: 'Building Scalable ML Pipelines: Lessons from Production',
      summary: 'A comprehensive guide to designing and implementing machine learning pipelines that scale, covering everything from data ingestion to model deployment.',
      date: '2023-12-10',
      readTime: '12 min read',
      category: 'Machine Learning',
      url: 'https://medium.com/@vikas.msba'
    },
    {
      title: 'ESG Investing: Where Data Science Meets Sustainable Finance',
      summary: 'Deep dive into how quantitative methods are being used to evaluate ESG factors and their impact on long-term financial performance.',
      date: '2023-11-22',
      readTime: '10 min read',
      category: 'Finance',
      url: 'https://medium.com/@vikas.msba'
    }
  ];

  const categoryColors = {
    'Data Science': 'from-blue-500 to-cyan-500',
    'Machine Learning': 'from-purple-500 to-indigo-500',
    'Finance': 'from-green-500 to-emerald-500'
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Thoughts on data science, technology trends, and building impactful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-slate-700 border-0 shadow-xl overflow-hidden">
                <CardHeader className="p-0">
                  <div className={`h-24 bg-gradient-to-br ${categoryColors[post.category]} relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute bottom-3 left-4">
                      <Badge className="bg-white/20 text-white border-white/30 font-medium">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/10 rounded-full"></div>
                    <div className="absolute top-6 right-8 w-3 h-3 bg-white/10 rounded-full"></div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {post.summary}
                  </p>
                  
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn hover:bg-amber-50 dark:hover:bg-amber-900/20"
                    asChild
                  >
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Read More
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-amber-200 hover:bg-amber-50 dark:border-amber-800 dark:hover:bg-amber-900/20"
            asChild
          >
            <a href="https://medium.com/@vikas.msba" target="_blank" rel="noopener noreferrer">
              <span className="mr-2">View All Articles</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}