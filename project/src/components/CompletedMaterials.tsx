import React from 'react';
import { ArrowLeft, Trophy, Calendar, Star, CheckCircle } from 'lucide-react';

interface CompletedMaterialsProps {
  onBack: () => void;
}

export const CompletedMaterials: React.FC<CompletedMaterialsProps> = ({ onBack }) => {
  const completedMaterials = [
    { 
      title: 'Pengenalan Algoritma dan Flowchart', 
      topic: 'Pemrograman Dasar', 
      completedDate: '2025-07-15',
      score: 95,
      duration: '45 min'
    },
    { 
      title: 'Variabel dan Tipe Data', 
      topic: 'Pemrograman Dasar', 
      completedDate: '2025-07-16',
      score: 88,
      duration: '30 min'
    },
    { 
      title: 'HTML Fundamentals', 
      topic: 'Pengembangan Web', 
      completedDate: '2025-07-17',
      score: 92,
      duration: '60 min'
    },
    { 
      title: 'CSS Styling dan Layout', 
      topic: 'Pengembangan Web', 
      completedDate: '2025-07-18',
      score: 90,
      duration: '75 min'
    },
    { 
      title: 'Konsep Dasar Database', 
      topic: 'Basis Data', 
      completedDate: '2025-07-19',
      score: 85,
      duration: '40 min'
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

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
          <h1 className="text-3xl font-bold text-gray-800">Materi yang Diselesaikan</h1>
          <p className="text-gray-600">Riwayat pembelajaran yang telah Anda selesaikan</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
          <Trophy className="h-8 w-8 mb-2" />
          <p className="text-2xl font-bold">{completedMaterials.length}</p>
          <p className="text-green-100">Total Diselesaikan</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
          <Star className="h-8 w-8 mb-2" />
          <p className="text-2xl font-bold">90</p>
          <p className="text-blue-100">Rata-rata Skor</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl p-6 text-white">
          <Calendar className="h-8 w-8 mb-2" />
          <p className="text-2xl font-bold">10</p>
          <p className="text-purple-100">Hari Aktif</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Riwayat Pembelajaran</h3>
        <div className="space-y-4">
          {completedMaterials.map((material, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{material.title}</h4>
                  <p className="text-sm text-gray-600">{material.topic}</p>
                  <p className="text-xs text-gray-500 flex items-center space-x-1 mt-1">
                    <Calendar className="h-3 w-3" />
                    <span>Diselesaikan: {new Date(material.completedDate).toLocaleDateString('id-ID')}</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(material.score)}`}>
                  {material.score}
                </div>
                <p className="text-xs text-gray-500 mt-1">{material.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};