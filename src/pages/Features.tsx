import { BookOpen, MessageSquare, Download, Award, Search, Filter, Users, TrendingUp, Shield, Zap, Heart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Features = () => {
  const mainFeatures = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Experience Library",
      description: "Access thousands of detailed interview experiences from top companies across industries.",
      features: ["Real interview questions", "Company-specific insights", "Detailed feedback", "Success strategies"],
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Q&A Forum",
      description: "Get your questions answered by industry professionals and experienced community members.",
      features: ["Expert answers", "Community voting", "Topic categorization", "Real-time discussions"],
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Resource Hub",
      description: "Download professionally crafted templates, guides, and tools to accelerate your career.",
      features: ["Resume templates", "Cover letter guides", "Interview checklists", "Salary negotiation tips"],
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rewards System",
      description: "Earn points and badges for contributing to the community and helping others succeed.",
      features: ["Point-based system", "Achievement badges", "Leaderboards", "Exclusive rewards"],
      color: "from-orange-500 to-orange-600",
      // Added a direct link to an Unsplash photo for testing.
      image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const additionalFeatures = [
    { icon: <Search className="w-6 h-6" />, title: "Advanced Search", description: "Find exactly what you need with powerful search and filtering capabilities." },
    { icon: <Filter className="w-6 h-6" />, title: "Smart Filters", description: "Filter content by company, role, difficulty level, and more." },
    { icon: <Users className="w-6 h-6" />, title: "Community Network", description: "Connect with professionals in your industry and build valuable relationships." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Career Tracking", description: "Track your progress and see how your career journey unfolds over time." },
    { icon: <Shield className="w-6 h-6" />, title: "Privacy First", description: "Your personal information is protected with enterprise-grade security." },
    { icon: <Zap className="w-6 h-6" />, title: "Real-time Updates", description: "Get notified instantly about new content, answers, and community activity." },
    { icon: <Heart className="w-6 h-6" />, title: "Personalized Feed", description: "Receive content recommendations tailored to your interests and career goals." },
    { icon: <Globe className="w-6 h-6" />, title: "Global Community", description: "Connect with professionals from around the world and diverse backgrounds." }
  ];

  const comparisonTable = [
    { feature: "Interview Experiences", xshare: true, competitor1: false, competitor2: true },
    { feature: "Q&A Forum", xshare: true, competitor1: true, competitor2: false },
    { feature: "Resource Downloads", xshare: true, competitor1: false, competitor2: true },
    { feature: "Gamification", xshare: true, competitor1: false, competitor2: false },
    { feature: "Community Network", xshare: true, competitor1: true, competitor2: false },
    { feature: "Mobile Responsive", xshare: true, competitor1: false, competitor2: true },
    { feature: "Free Access", xshare: true, competitor1: false, competitor2: false },
    { feature: "Expert Verification", xshare: true, competitor1: false, competitor2: true }
  ];

  return (
    <div className="space-y-20 bg-white">
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
              Powerful{" "}
              <span className="bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Discover all the tools and resources you need to accelerate your career journey
              and achieve your professional goals.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Using Features
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in your career journey, all in one place
            </p>
          </motion.div>

          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Text Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={
                      feature.title === 'Experience Library' ? '/experience-library' :
                      feature.title === 'Q&A Forum' ? '/forum' :
                      feature.title === 'Resource Hub' ? '/resources' :
                      '/rewards'
                    }
                    className="inline-flex items-center mt-6 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
                  >
                    Explore {feature.title}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Image Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl transform rotate-3`}></div>
                    <div className="relative rounded-2xl shadow-2xl overflow-hidden h-96">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover more tools and capabilities that make XShare your complete career companion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group p-px rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Colorful gradient border on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-teal-500 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

                {/* Card content */}
                <div className="relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 transform group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How XShare Compares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how XShare stacks up against other career platforms
            </p>
          </motion.div>

          <motion.div
            className="relative group p-px rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Colorful gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-teal-500 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

            {/* Main content container */}
            <div className="relative bg-white rounded-2xl shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-orange-600">XShare</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Competitor A</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {row.xshare ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.competitor1 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.competitor2 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to explore all features?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already using XShare to accelerate their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Today
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;