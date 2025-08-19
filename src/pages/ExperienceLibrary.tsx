import { useState } from 'react';
import { Search, Filter, Eye, Heart, Calendar, Building, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Experience } from '../types';

const ExperienceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const mockExperiences: Experience[] = [
    {
      id: '1',
      title: 'Software Engineer Interview at Google',
      company: 'Google',
      role: 'Software Engineer',
      author: 'Sarah Chen',
      authorRole: 'Software Engineer',
      date: '2024-01-15',
      difficulty: 'Hard',
      tags: ['Algorithms', 'System Design', 'Coding'],
      summary: 'Comprehensive 5-round interview process covering algorithms, system design, and behavioral questions.',
      content: 'The Google interview process was intense but well-structured...',
      likes: 234,
      views: 1205
    },
    {
      id: '2',
      title: 'Product Manager Role at Meta',
      company: 'Meta',
      role: 'Product Manager',
      author: 'Michael Rodriguez',
      authorRole: 'Product Manager',
      date: '2024-01-12',
      difficulty: 'Medium',
      tags: ['Product Strategy', 'Analytics', 'Leadership'],
      summary: 'Product sense, analytics, and leadership questions with real case studies from Meta products.',
      content: 'The Meta PM interview focused heavily on product thinking...',
      likes: 189,
      views: 892
    },
    {
      id: '3',
      title: 'Data Scientist Interview at Amazon',
      company: 'Amazon',
      role: 'Data Scientist',
      author: 'Emily Johnson',
      authorRole: 'Data Scientist',
      date: '2024-01-10',
      difficulty: 'Hard',
      tags: ['Machine Learning', 'Statistics', 'SQL'],
      summary: 'Technical deep-dive into ML algorithms, statistical analysis, and business case studies.',
      content: 'Amazon\'s data science interview was very thorough...',
      likes: 156,
      views: 743
    },
    {
      id: '4',
      title: 'Marketing Manager at Spotify',
      company: 'Spotify',
      role: 'Marketing Manager',
      author: 'David Kumar',
      authorRole: 'Marketing Manager',
      date: '2024-01-08',
      difficulty: 'Medium',
      tags: ['Digital Marketing', 'Growth', 'Analytics'],
      summary: 'Creative marketing challenges and growth strategy discussions for music streaming platform.',
      content: 'Spotify\'s marketing interview was very creative and data-driven...',
      likes: 98,
      views: 567
    },
    {
      id: '5',
      title: 'Frontend Developer at Netflix',
      company: 'Netflix',
      role: 'Frontend Developer',
      author: 'Lisa Wang',
      authorRole: 'Frontend Developer',
      date: '2024-01-05',
      difficulty: 'Medium',
      tags: ['React', 'JavaScript', 'Performance'],
      summary: 'Frontend coding challenges focusing on React, performance optimization, and user experience.',
      content: 'Netflix really values performance and user experience in their frontend interviews...',
      likes: 145,
      views: 678
    },
    {
      id: '6',
      title: 'UX Designer Role at Apple',
      company: 'Apple',
      role: 'UX Designer',
      author: 'James Wilson',
      authorRole: 'UX Designer',
      date: '2024-01-03',
      difficulty: 'Hard',
      tags: ['Design Systems', 'User Research', 'Prototyping'],
      summary: 'Design thinking process, portfolio review, and hands-on design challenges for Apple products.',
      content: 'Apple\'s design interview process is incredibly thorough and detail-oriented...',
      likes: 203,
      views: 934
    }
  ];

  const companies = ['All', 'Google', 'Meta', 'Amazon', 'Apple', 'Netflix', 'Spotify', 'Microsoft'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredExperiences = mockExperiences.filter(exp => {
    const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exp.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || exp.company === selectedFilter;
    const matchesDifficulty = selectedDifficulty === 'all' || exp.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesFilter && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCompanyLogo = (company: string) => {
    const colors = {
      Google: 'from-blue-500 to-green-500',
      Meta: 'from-blue-600 to-purple-600',
      Amazon: 'from-orange-400 to-yellow-400',
      Apple: 'from-gray-500 to-gray-700',
      Netflix: 'from-red-600 to-red-700',
      Spotify: 'from-green-500 to-green-600',
      Microsoft: 'from-blue-500 to-blue-600'
    };
    
    return colors[company as keyof typeof colors] || 'from-gray-400 to-gray-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn from thousands of real interview experiences shared by professionals from top companies worldwide.
          </p>
          <Link
            to="/experience/new"
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200"
          >
            Share Your Experience
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search experiences, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
              />
            </div>

            {/* Company Filter */}
            <div className="relative">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
              >
                {companies.map(company => (
                  <option key={company} value={company === 'All' ? 'all' : company}>
                    {company}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty === 'All' ? 'all' : difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-orange-600 mb-2">{mockExperiences.length}</div>
            <div className="text-gray-600">Total Experiences</div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
            <div className="text-gray-600">Companies</div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">Job Roles</div>
          </motion.div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredExperiences.length} of {mockExperiences.length} experiences
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {filteredExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getCompanyLogo(experience.company)} rounded-lg flex items-center justify-center`}>
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                        <p className="text-gray-600">{experience.company} • {experience.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{experience.summary}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(experience.difficulty)}`}>
                      {experience.difficulty}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{experience.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(experience.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{experience.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{experience.likes}</span>
                    </div>
                  </div>

                  <Link
                    to={`/experience/${experience.id}`}
                    className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
                  >
                    <span>Read Full Experience</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {filteredExperiences.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200">
              Load More Experiences
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No experiences found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or filters to find more experiences.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
                setSelectedDifficulty('all');
              }}
              className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
            >
              Clear all filters
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ExperienceLibrary;