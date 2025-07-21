import React from 'react';
import { ArrowLeft, Trophy, Medal, Award, Star, TrendingUp, Crown } from 'lucide-react';

interface TopScoresProps {
  onBack: () => void;
}

export const TopScores: React.FC<TopScoresProps> = ({ onBack }) => {
  const topStudents = [
    {
      rank: 1,
      name: 'Sarah Wijaya',
      avatar: 'SW',
      totalScore: 2847,
      averageScore: 94.9,
      completedCourses: 30,
      badges: 25,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      rank: 2,
      name: 'Muhammad Rizki',
      avatar: 'MR',
      totalScore: 2756,
      averageScore: 91.9,
      completedCourses: 30,
      badges: 22,
      color: 'from-gray-300 to-gray-500'
    },
    {
      rank: 3,
      name: 'Dewi Sartika',
      avatar: 'DS',
      totalScore: 2698,
      averageScore: 89.9,
      completedCourses: 30,
      badges: 20,
      color: 'from-amber-600 to-yellow-700'
    },
    {
      rank: 4,
      name: 'Ahmad Fauzan',
      avatar: 'AF',
      totalScore: 2634,
      averageScore: 87.8,
      completedCourses: 30,
      badges: 18,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      rank: 5,
      name: 'Siti Nurhaliza',
      avatar: 'SN',
      totalScore: 2587,
      averageScore: 86.2,
      completedCourses: 30,
      badges: 17,
      color: 'from-purple-500 to-violet-600'
    },
    {
      rank: 6,
      name: 'Budi Santoso',
      avatar: 'BS',
      totalScore: 2543,
      averageScore: 84.8,
      completedCourses: 30,
      badges: 16,
      color: 'from-green-500 to-emerald-600'
    },
    {
      rank: 7,
      name: 'Rina Kartika',
      avatar: 'RK',
      totalScore: 2498,
      averageScore: 83.3,
      completedCourses: 30,
      badges: 15,
      color: 'from-pink-500 to-rose-600'
    },
    {
      rank: 8,
      name: 'Doni Pratama',
      avatar: 'DP',
      totalScore: 2456,
      averageScore: 81.9,
      completedCourses: 30,
      badges: 14,
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-500" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
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
          <h1 className="text-3xl font-bold text-gray-800">Top Score Siswa</h1>
          <p className="text-gray-600">Peringkat siswa dengan pencapaian terbaik</p>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {topStudents.slice(0, 3).map((student, index) => (
          <div key={student.rank} className={`relative ${index === 0 ? 'md:order-2' : index === 1 ? 'md:order-1' : 'md:order-3'}`}>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              
              <div className="mb-4">
                {getRankIcon(student.rank)}
              </div>
              
              <div className={`bg-gradient-to-r ${student.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold`}>
                {student.avatar}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{student.name}</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Skor:</span>
                  <span className="font-bold text-gray-800">{student.totalScore.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rata-rata:</span>
                  <span className="font-bold text-gray-800">{student.averageScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Badge:</span>
                  <span className="font-bold text-gray-800">{student.badges}</span>
                </div>
              </div>
              
              {student.rank === 1 && (
                <div className="absolute -top-2 -right-2 bg-yellow-500 text-white p-2 rounded-full">
                  <Crown className="h-4 w-4" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <Trophy className="h-6 w-6 text-yellow-500" />
          <span>Papan Peringkat Lengkap</span>
        </h3>
        
        <div className="space-y-3">
          {topStudents.map((student, index) => (
            <div
              key={student.rank}
              className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                student.rank <= 3 
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10">
                  {getRankIcon(student.rank)}
                </div>
                
                <div className={`bg-gradient-to-r ${student.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`}>
                  {student.avatar}
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.completedCourses} materi selesai</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800">{student.totalScore.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Total Skor</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-purple-600">{student.averageScore}</p>
                    <p className="text-xs text-gray-500">Rata-rata</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-orange-600">{student.badges}</p>
                    <p className="text-xs text-gray-500">Badge</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white text-center">
          <TrendingUp className="h-8 w-8 mx-auto mb-2" />
          <p className="text-2xl font-bold">8</p>
          <p className="text-blue-100">Total Peserta</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white text-center">
          <Star className="h-8 w-8 mx-auto mb-2" />
          <p className="text-2xl font-bold">87.4</p>
          <p className="text-green-100">Rata-rata Kelas</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl p-6 text-white text-center">
          <Trophy className="h-8 w-8 mx-auto mb-2" />
          <p className="text-2xl font-bold">2847</p>
          <p className="text-purple-100">Skor Tertinggi</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white text-center">
          <Award className="h-8 w-8 mx-auto mb-2" />
          <p className="text-2xl font-bold">147</p>
          <p className="text-orange-100">Total Badge</p>
        </div>
      </div>
    </div>
  );
};