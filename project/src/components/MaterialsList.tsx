import React from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Clock, Play } from 'lucide-react';

interface MaterialsListProps {
  onBack: () => void;
}

export const MaterialsList: React.FC<MaterialsListProps> = ({ onBack }) => {
  const allMaterials = [
    { title: 'Pengenalan Algoritma dan Flowchart', topic: 'Pemrograman Dasar', completed: true, duration: '45 min' },
    { title: 'Variabel dan Tipe Data', topic: 'Pemrograman Dasar', completed: true, duration: '30 min' },
    { title: 'HTML Fundamentals', topic: 'Pengembangan Web', completed: true, duration: '60 min' },
    { title: 'CSS Styling dan Layout', topic: 'Pengembangan Web', completed: true, duration: '75 min' },
    { title: 'Konsep Dasar Database', topic: 'Basis Data', completed: true, duration: '40 min' },
    { title: 'JavaScript Dasar', topic: 'Pengembangan Web', completed: false, duration: '90 min' },
    { title: 'Entity Relationship Diagram', topic: 'Basis Data', completed: false, duration: '50 min' },
    { title: 'Struktur Kontrol Programming', topic: 'Pemrograman Dasar', completed: false, duration: '65 min' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={onBack}
          className="p-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Semua Materi Pembelajaran</h1>
          <p className="text-gray-600">Daftar lengkap materi yang tersedia</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="space-y-4">
          {allMaterials.map((material, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${
                  material.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  {material.completed ? (
                    <CheckCircle className="h-5 w-5 text-white" />
                  ) : (
                    <Play className="h-5 w-5 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {material.title}
                  </h3>
                  <p className="text-sm text-gray-600">{material.topic}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{material.duration}</span>
                </div>
                {material.completed && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Selesai
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};