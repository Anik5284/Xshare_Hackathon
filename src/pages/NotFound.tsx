import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-8xl md:text-9xl font-bold text-orange-600 mb-4">404</div>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full mb-6"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="pt-8 border-t border-gray-200 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="space-y-2">
              {[
                { name: 'Experience Library', path: '/experience-library' },
                { name: 'Q&A Forum', path: '/forum' },
                { name: 'Resource Hub', path: '/resources' },
                { name: 'About Us', path: '/about' }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-orange-600 hover:text-orange-700 transition-colors duration-200 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 p-6 bg-orange-50 border border-orange-200 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-start space-x-3">
            <Search className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Looking for something specific?</h4>
              <p className="text-gray-700 text-sm">
                Try using our search feature or browse through our main sections to find what you need.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;