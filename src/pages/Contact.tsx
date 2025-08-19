import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "support@xshare.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM PST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Schedule an appointment"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant support online"
    }
  ];

  const faqItems = [
    {
      question: "How do I share my interview experience?",
      answer: "After creating an account, navigate to the Experience Library and click 'Share Your Experience'. Fill out the form with details about your interview process, questions asked, and tips for future candidates."
    },
    {
      question: "Is XShare free to use?",
      answer: "Yes! XShare is completely free for all users. We believe career development resources should be accessible to everyone, regardless of their financial situation."
    },
    {
      question: "How can I earn points and badges?",
      answer: "You earn points by actively participating in the community: sharing experiences, answering questions, helping others, and contributing valuable content. Badges are awarded for specific achievements and milestones."
    },
    {
      question: "Can companies use XShare for recruiting?",
      answer: "We have partnership programs for companies interested in connecting with our community. Please contact us to learn more about our recruiting solutions and partnership opportunities."
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Have questions about XShare? Want to share feedback? We'd love to hear from you. 
              Our team is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 mx-auto">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-orange-600 mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none"
                      placeholder="Tell us more about your question or feedback..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-xl">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-700 text-sm">
                      We typically respond to all inquiries within 24 hours during business days. 
                      For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Get Help</h2>
            <p className="text-xl text-gray-600">Explore these additional resources for quick answers</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Help Center",
                description: "Browse our comprehensive knowledge base with step-by-step guides and tutorials.",
                link: "/help",
                icon: <MessageSquare className="w-8 h-8" />
              },
              {
                title: "Community Forum",
                description: "Connect with other users and get answers from the XShare community.",
                link: "/forum",
                icon: <MessageSquare className="w-8 h-8" />
              },
              {
                title: "Video Tutorials",
                description: "Watch detailed video guides on how to make the most of XShare features.",
                link: "/tutorials",
                icon: <MessageSquare className="w-8 h-8" />
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 mx-auto">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;