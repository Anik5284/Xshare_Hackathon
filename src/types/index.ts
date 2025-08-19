export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'professional' | 'mentor';
  avatar?: string;
  points: number;
  badges: Badge[];
  joinedAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  role: string;
  author: string;
  authorRole: string;
  date: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  summary: string;
  content: string;
  likes: number;
  views: number;
}

export interface Question {
  id: string;
  title: string;
  content: string;
  author: string;
  authorRole: string;
  tags: string[];
  votes: number;
  answers: Answer[];
  createdAt: Date;
}

export interface Answer {
  id: string;
  content: string;
  author: string;
  authorRole: string;
  votes: number;
  isAccepted: boolean;
  createdAt: Date;
}

export interface Resource {
  id: string;
  title: string;
  type: 'template' | 'guide' | 'checklist' | 'mock-interview';
  description: string;
  downloadUrl?: string;
  category: string;
  featured: boolean;
}