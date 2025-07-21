import React from 'react';
import { BookOpen, User, Award, Settings } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-purple-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              EduInformatika
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BookOpen },
              { id: 'profile', label: 'Profil', icon: User },
              { id: 'achievements', label: 'Prestasi', icon: Award },
              { id: 'settings', label: 'Pengaturan', icon: Settings }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onViewChange(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentView === id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-2 rounded-full">
              <User className="h-5 w-5 text-white" />
            </div>
            <span className="hidden sm:block font-medium text-gray-700">Siswa Informatika</span>
          </div>
        </div>
      </div>
    </header>
  );
};