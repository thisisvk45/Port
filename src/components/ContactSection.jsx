import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Form submitted:", formData);
      
      // simulate a fake API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };
  

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kumav25@wfu.edu',
      href: 'mailto:kumav25@wfu.edu'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Winston-Salem, NC',
      href: null
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Calls & Meetings',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Let's Build Something
          </h2>
          <p className="text-2xl gradient-text font-semibold mb-4">
            Meaningful Together
          </p>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have an interesting project or opportunity? I'd love to hear from you and explore how we can collaborate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-white dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Send className="w-6 h-6 text-amber-500" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitStatus && (
                  <Alert className={`mb-6 ${submitStatus === 'success' ? 'border-green-200 bg-green-50 dark:bg-green-900/20' : 'border-red-200 bg-red-50 dark:bg-red-900/20'}`}>
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800 dark:text-green-200">
                          Thank you! Your message has been sent successfully. I'll get back to you soon.
                        </AlertDescription>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-red-800 dark:text-red-200">
                          Sorry, there was an error sending your message. Please try again.
                        </AlertDescription>
                      </>
                    )}
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 border-slate-200 dark:border-slate-600 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 border-slate-200 dark:border-slate-600 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none border-slate-200 dark:border-slate-600 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                Whether you're looking for a data scientist, have a business challenge to solve, or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-semibold text-slate-900 dark:text-slate-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200/50 dark:border-amber-700/50">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Currently Seeking
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Full-time opportunities in Data Science, Analytics, and ML Engineering roles starting May 2026.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}