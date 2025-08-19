import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { path: '/', label: 'Home', public: true },
    { path: '/about', label: 'About', public: true },
    { path: '/features', label: 'Features', public: true },
    { path: '/experience-library', label: 'Experience Library', public: false },
    { path: '/forum', label: 'Q&A Forum', public: false },
    { path: '/resources', label: 'Resource Hub', public: false },
    { path: '/rewards', label: 'Rewards', public: false },
    { path: '/contact', label: 'Contact', public: true },
  ];

  const publicNavLinks = navLinks.filter(link => link.public || isAuthenticated);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">XShare</h1>
                <p className="text-xs text-gray-600 -mt-1">From Campus to Career</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {publicNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-orange-600 ${
                    location.pathname === link.path
                      ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Auth Buttons / User Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
                  >
                    <User className="w-5 h-5" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors duration-200"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                {publicNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-orange-600'
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {isAuthenticated ? (
                  <div className="border-t border-gray-200 pt-4 space-y-4">
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
                    >
                      <User className="w-5 h-5" />
                      <span className="text-sm font-medium">{user?.name}</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-200"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <Link
                      to="/login"
                      className="block text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-orange-700 transition-colors duration-200"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">X</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">XShare</h3>
                  <p className="text-sm text-gray-400">From Campus to Career</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering students and professionals to share knowledge, build connections, 
                and accelerate career growth through authentic experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/experience-library" className="hover:text-orange-400 transition-colors">Experience Library</Link></li>
                <li><Link to="/forum" className="hover:text-orange-400 transition-colors">Q&A Forum</Link></li>
                <li><Link to="/resources" className="hover:text-orange-400 transition-colors">Resources</Link></li>
                <li><Link to="/rewards" className="hover:text-orange-400 transition-colors">Rewards</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2025 XShare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;