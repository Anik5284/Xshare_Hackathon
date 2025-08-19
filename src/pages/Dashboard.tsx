import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, Download, Award, User, TrendingUp, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  const quickStats = [
    { label: 'Experiences Shared', value: '3', icon: <BookOpen className="w-5 h-5" />, color: 'text-blue-600' },
    { label: 'Questions Asked', value: '7', icon: <MessageSquare className="w-5 h-5" />, color: 'text-green-600' },
    { label: 'Resources Downloaded', value: '12', icon: <Download className="w-5 h-5" />, color: 'text-purple-600' },
    { label: 'Points Earned', value: user?.points || 0, icon: <Award className="w-5 h-5" />, color: 'text-orange-600' }
  ];

  const recentActivity = [
    { type: 'shared', content: 'Shared experience: Software Engineer Interview at Google', time: '2 hours ago' },
    { type: 'answered', content: 'Answered question: "What to expect in system design interviews?"', time: '1 day ago' },
    { type: 'downloaded', content: 'Downloaded Resume Template for Tech Roles', time: '3 days ago' },
    { type: 'earned', content: 'Earned "First Share" badge', time: '1 week ago' }
  ];

  const recommendations = [
    { title: 'Share Your Recent Interview', description: 'Help others by sharing your latest interview experience', action: 'Share Now', link: '/experience-library' },
    { title: 'Join Q&A Discussions', description: 'Answer questions in your area of expertise', action: 'Browse Questions', link: '/forum' },
    { title: 'Download Career Resources', description: 'Get the latest templates and guides', action: 'Explore Resources', link: '/resources' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-orange-500 to-teal-500 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-orange-100 text-lg">Ready to advance your career journey today?</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-orange-100 uppercase tracking-wide">Your Role</div>
              <div className="text-2xl font-semibold capitalize">{user?.role}</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} bg-opacity-10 p-3 rounded-lg`}>
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 text-orange-600 mr-2" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Share Experience', desc: 'Share your latest interview experience', link: '/experience-library', icon: <BookOpen className="w-6 h-6" />, color: 'bg-blue-500' },
                { title: 'Ask Question', desc: 'Get help from the community', link: '/forum', icon: <MessageSquare className="w-6 h-6" />, color: 'bg-green-500' },
                { title: 'Browse Resources', desc: 'Download templates and guides', link: '/resources', icon: <Download className="w-6 h-6" />, color: 'bg-purple-500' },
                { title: 'View Rewards', desc: 'Check your points and badges', link: '/rewards', icon: <Award className="w-6 h-6" />, color: 'bg-orange-500' }
              ].map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`${action.color} p-2 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                      {action.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{action.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{action.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Profile Summary */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 text-orange-600 mr-2" />
              Profile Summary
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Current Points</span>
                <span className="font-semibold text-orange-600">{user?.points}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Badges Earned</span>
                <span className="font-semibold text-gray-900">{user?.badges?.length || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Member Since</span>
                <span className="font-semibold text-gray-900">
                  {user?.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : 'Today'}
                </span>
              </div>
              
              {user?.badges && user.badges.length > 0 && (
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Badges</h4>
                  {user.badges.slice(0, 2).map((badge, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{badge.icon}</span>
                      <span className="text-sm text-gray-600">{badge.name}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <Link
                to="/profile"
                className="block w-full bg-orange-600 text-white text-center py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors duration-300"
              >
                View Full Profile
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Recent Activity */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 text-orange-600 mr-2" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-b-0">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 mb-1">{activity.content}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
              Recommendations
            </h2>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors duration-300">
                  <h3 className="font-semibold text-gray-900 mb-2">{rec.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                  <Link
                    to={rec.link}
                    className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300"
                  >
                    {rec.action}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;