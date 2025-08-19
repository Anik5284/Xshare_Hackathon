import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'professional' | 'mentor';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('xshare_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock login validation
    if (email === 'demo@xshare.com' && password === 'password') {
      const mockUser: User = {
        id: '1',
        name: 'Demo User',
        email: email,
        role: 'student',
        points: 1250,
        badges: [
          {
            id: '1',
            name: 'First Share',
            description: 'Shared your first interview experience',
            icon: '🌟',
            earnedAt: new Date()
          }
        ],
        joinedAt: new Date()
      };
      
      setUser(mockUser);
      localStorage.setItem('xshare_user', JSON.stringify(mockUser));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      points: 0,
      badges: [],
      joinedAt: new Date()
    };
    
    setUser(newUser);
    localStorage.setItem('xshare_user', JSON.stringify(newUser));
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('xshare_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};