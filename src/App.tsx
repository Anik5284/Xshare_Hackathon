import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './hooks/useAuth';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ExperienceLibrary from './pages/ExperienceLibrary';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/features" element={<Features />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/experience-library" element={
                <ProtectedRoute>
                  <ExperienceLibrary />
                </ProtectedRoute>
              } />
              <Route path="/forum" element={
                <ProtectedRoute>
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">Q&A Forum</h1>
                      <p className="text-xl text-gray-600">Coming soon! The forum feature is under development.</p>
                    </div>
                  </div>
                </ProtectedRoute>
              } />
              <Route path="/resources" element={
                <ProtectedRoute>
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Hub</h1>
                      <p className="text-xl text-gray-600">Coming soon! The resource hub is under development.</p>
                    </div>
                  </div>
                </ProtectedRoute>
              } />
              <Route path="/rewards" element={
                <ProtectedRoute>
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">Rewards System</h1>
                      <p className="text-xl text-gray-600">Coming soon! The rewards system is under development.</p>
                    </div>
                  </div>
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">User Profile</h1>
                      <p className="text-xl text-gray-600">Coming soon! The profile page is under development.</p>
                    </div>
                  </div>
                </ProtectedRoute>
              } />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;