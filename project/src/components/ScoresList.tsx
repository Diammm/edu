import React from 'react';
import { ArrowLeft, Star, Trophy, TrendingUp, Award } from 'lucide-react';

interface ScoresListProps {
  onBack: () => void;
}

export const ScoresList: React.FC<ScoresListProps> = ({ onBack }) => {
  const scores = [
    { material: 'Pengenalan Algoritma', topic: 'Pemrograman Dasar', score: 95, maxScore: 100, date: '2024-01-15' },
    { material: 'HTML Fundamentals', topic: 'Pengembangan Web', score: 92, maxScore: 100, date: '2024-01-20' },
    { material: 'CSS Styling', topic: 'Pengembangan Web', score: 90, maxScore: 100, date: '2024-01-22' },
    { material: 'Variabel dan Tipe Data', topic: 'Pemrograman Dasar', score: 88, maxScore: 100, date: '2024-01-18' },
    { material: 'Konsep Database', topic: 'Basis Data', score: 85, maxScore: 100, date: '2024-01-25' },
    { material: 'JavaScript Dasar', topic: 'Pengembangan Web', score: 82, maxScore: 100, date: '2024-01-28' },
  ];

  const getGradeColor = (score: number) => {
    if (score >= 90) return 'from-green-500 to-emerald-500';
    if (score >= 80) return 'from-blue-500 to-indigo-500';
    if (score >= 70) return 'from-orange-500 to-amber-500';
    return 'from-red-500 to-pink-500';
  };

  const getGradeLetter = (score: number) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    return 'D';
  };

  const averageScore = Math.round(scores.reduce((sum, score) => sum + score.score, 0) / scores.length);
  const highestScore = Math.max(...scores.map(s => s.score));
  const totalQuizzes = scores.length;

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
          <h1 className="text-3xl font-bold text-gray-800">Riwayat Skor</h1>
          <p className="text-gray-600">Analisis performa dan pencapaian Anda</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl p-6 text-white">
          <Star className="h-8 w-8 mb-2" />
          <p className="text-2xl font-bold">{averageScore}</p>
          <p className="text-purple-100">Rata-rata Skor</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
          <Trophy className="h-8 w-8 mb-2" />
          <p className="text-2xl font-bold">{highestScore}</p>
          <p className="text-green-100">Skor Tertinggi</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
          <Award className="h-8 w-8 mb-2" />
          <p className="text-2xl font-bold">{totalQuizzes}</p>
          <p className="text-blue-100">Total Quiz</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
          <TrendingUp className="h-8 w-8 mb-2" />
          <p className="text-2xl font-bold">+5%</p>
          <p className="text-orange-100">Peningkatan</p>
        </div>
      </div>

      {/* Scores List */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Detail Skor Quiz</h3>
        <div className="space-y-4">
          {scores.map((scoreItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className={`bg-gradient-to-r ${getGradeColor(scoreItem.score)} p-3 rounded-xl text-white font-bold text-lg min-w-[50px] text-center`}>
                  {getGradeLetter(scoreItem.score)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{scoreItem.material}</h4>
                  <p className="text-sm text-gray-600">{scoreItem.topic}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(scoreItem.date).toLocaleDateString('id-ID')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800">
                  {scoreItem.score}<span className="text-sm text-gray-500">/{scoreItem.maxScore}</span>
                </div>
                <div className="w-24 bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className={`bg-gradient-to-r ${getGradeColor(scoreItem.score)} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${scoreItem.score}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};