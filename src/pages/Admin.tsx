import { Link } from 'react-router-dom';
import { Users, FileText, BarChart2, UserPlus, Shield, FileCheck, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
// For the chart, you would need to install a library like recharts:
// npm install recharts
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const { user } = useAuth();

  // Platform-wide statistics
  const platformStats = [
    { label: 'Total Users', value: '1,428', icon: <Users className="w-6 h-6" />, color: 'text-blue-600' },
    { label: 'Total Experiences', value: '3,210', icon: <FileText className="w-6 h-6" />, color: 'text-green-600' },
    { label: 'New Sign-ups (24h)', value: '15', icon: <UserPlus className="w-6 h-6" />, color: 'text-purple-600' },
    { label: 'Pending Approval', value: '8', icon: <FileCheck className="w-6 h-6" />, color: 'text-orange-600' }
  ];

  // Data for the user growth chart
  const userGrowthData = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 500 },
    { name: 'Apr', users: 780 },
    { name: 'May', users: 620 },
    { name: 'Jun', users: 950 },
    { name: 'Jul', users: 1428 },
  ];
  
  const recentSignUps = [
      { name: 'Alice Johnson', email: 'alice@example.com', role: 'Student', joined: '2 hours ago' },
      { name: 'Bob Williams', email: 'bob@example.com', role: 'Professional', joined: '5 hours ago' },
      { name: 'Charlie Brown', email: 'charlie@example.com', role: 'Student', joined: '1 day ago' },
  ];
  
  const contentToReview = [
      { type: 'Experience', title: 'Software Engineer at Meta', author: 'Jane Doe', submitted: '45 minutes ago' },
      { type: 'Question', title: 'Best way to prepare for FAANG?', author: 'John Smith', submitted: '3 hours ago' },
      { type: 'Resource', title: 'Ultimate System Design Guide', author: 'Emily White', submitted: '8 hours ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Admin Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center">
                <Shield className="w-8 h-8 mr-3" />
                Admin Dashboard
              </h1>
              <p className="text-gray-300 text-lg">Platform overview and management panel.</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 uppercase tracking-wide">Admin User</div>
              <div className="text-2xl font-semibold capitalize">{user?.name}</div>
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {platformStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
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

        {/* Main Grid: Analytics and Quick Management Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* User Growth Analytics */}
          <motion.div
            className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BarChart2 className="w-6 h-6 text-orange-600 mr-2" />
              User Growth
            </h2>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#ea580c" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Quick Admin Actions */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Admin Actions</h2>
            <div className="space-y-3">
              <Link to="/admin/users" className="flex items-center p-3 bg-gray-100 hover:bg-orange-100 rounded-lg transition-colors">
                <Users className="w-5 h-5 text-gray-700 mr-3" /> Manage Users
              </Link>
              <Link to="/admin/content" className="flex items-center p-3 bg-gray-100 hover:bg-orange-100 rounded-lg transition-colors">
                <FileCheck className="w-5 h-5 text-gray-700 mr-3" /> Content Moderation
              </Link>
               <Link to="/admin/search" className="flex items-center p-3 bg-gray-100 hover:bg-orange-100 rounded-lg transition-colors">
                <Search className="w-5 h-5 text-gray-700 mr-3" /> Search Platform
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Management Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            
          {/* Recent Sign-ups */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Sign-ups</h2>
            <div className="space-y-4">
              {recentSignUps.map((user, index) => (
                <div key={index} className="flex items-center justify-between pb-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700">{user.role}</p>
                    <p className="text-xs text-gray-400">{user.joined}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Content for Review */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Content for Review</h2>
            <div className="space-y-4">
              {contentToReview.map((item, index) => (
                <div key={index} className="flex items-start pb-2 border-b border-gray-100 last:border-b-0">
                  <span className={`text-xs font-semibold uppercase px-2 py-1 rounded-md mr-3 mt-1 ${
                      item.type === 'Experience' ? 'bg-blue-100 text-blue-800' :
                      item.type === 'Question' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                  }`}>{item.type}</span>
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">by {item.author} - <span className="text-xs text-gray-400">{item.submitted}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;