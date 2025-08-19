import { Users, Target, Heart, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "We believe in the power of shared knowledge and collective growth."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Authentic Experiences",
      description: "Real stories from real people to help you navigate your career journey."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empowerment",
      description: "Empowering students and professionals to achieve their career aspirations."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to providing high-quality resources and experiences."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Co-Founder & CEO",
      description: "Former Meta recruiter with 8+ years in tech talent acquisition.",
      image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & CTO",
      description: "Ex-Google engineer passionate about building platforms that matter.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Community",
      description: "Career counselor dedicated to helping students transition to industry.",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "David Kumar",
      role: "Head of Content",
      description: "Former LinkedIn content strategist with expertise in career development.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "5K+", label: "Interview Experiences" },
    { number: "500+", label: "Partner Companies" },
    { number: "95%", label: "Success Rate" }
  ];

  const partners = [
    "Google", "Microsoft", "Amazon", "Meta", "Netflix", "Apple", "Tesla", "Stripe"
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
              Our Mission is Your{" "}
              <span className="bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
                Success
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              XShare bridges the gap between campus and career by creating a platform where 
              authentic experiences are shared, connections are built, and careers are accelerated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  XShare was born from a simple observation: the most valuable career advice 
                  comes from those who've walked the path before you. As recent graduates ourselves, 
                  we experienced firsthand the challenges of transitioning from campus to career.
                </p>
                <p>
                  We realized that while there were countless generic career resources available, 
                  what students and professionals really needed were authentic, detailed experiences 
                  from real people at real companies.
                </p>
                <p>
                  Today, XShare has evolved into a thriving community where knowledge is shared freely, 
                  connections are made naturally, and career growth happens organically. We're proud 
                  to have helped thousands of individuals take the next step in their professional journey.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-teal-500 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at XShare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals dedicated to revolutionizing career development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600">
              Our community includes professionals from top organizations worldwide
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <span className="text-gray-700 font-semibold text-sm">{partner}</span>
              </div>
            ))}
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
              Join Our Mission
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Be part of a community that's transforming how people navigate their career journeys. 
              Together, we can make career growth accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;