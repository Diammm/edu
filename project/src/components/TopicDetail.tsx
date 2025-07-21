import React, { useState } from 'react';
import { ArrowLeft, Play, CheckCircle, Clock, Users, Star, BookOpen, Award } from 'lucide-react';

interface TopicDetailProps {
  topic: any;
  onBack: () => void;
  onStartQuiz: () => void;
}

export const TopicDetail: React.FC<TopicDetailProps> = ({ topic, onBack, onStartQuiz }) => {
  const [activeLesson, setActiveLesson] = useState(0);

  const lessons = [
    {
      title: 'Pengenalan Konsep Dasar',
      duration: '15 menit',
      completed: true,
      content: 'Memahami konsep fundamental dan terminologi penting'
    },
    {
      title: 'Praktik Hands-On',
      duration: '30 menit',
      completed: true,
      content: 'Implementasi praktis dengan contoh nyata'
    },
    {
      title: 'Studi Kasus',
      duration: '25 menit',
      completed: false,
      content: 'Analisis kasus dalam dunia industri'
    },
    {
      title: 'Project Mini',
      duration: '45 menit',
      completed: false,
      content: 'Membuat project sederhana untuk praktek'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={onBack}
          className="p-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <div className={`bg-gradient-to-r ${topic.color} p-3 rounded-xl`}>
          <topic.icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{topic.title}</h1>
          <p className="text-gray-600">{topic.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Progress Pembelajaran</h3>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {topic.progress}% Selesai
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className={`bg-gradient-to-r ${topic.color} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${topic.progress}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-purple-600">{topic.completed}</p>
                <p className="text-gray-600 text-sm">Diselesaikan</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{topic.lessons - topic.completed}</p>
                <p className="text-gray-600 text-sm">Tersisa</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">87</p>
                <p className="text-gray-600 text-sm">Skor Rata-rata</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">15h</p>
                <p className="text-gray-600 text-sm">Total Waktu</p>
              </div>
            </div>
          </div>

          {/* Lessons List */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Daftar Pelajaran</h3>
            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    activeLesson === index
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveLesson(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg ${
                        lesson.completed 
                          ? 'bg-green-500' 
                          : activeLesson === index 
                            ? 'bg-purple-500' 
                            : 'bg-gray-300'
                      }`}>
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-white" />
                        ) : (
                          <Play className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{lesson.title}</h4>
                        <p className="text-gray-600 text-sm">{lesson.content}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{lesson.duration}</span>
                      </p>
                      {lesson.completed && (
                        <p className="text-green-600 text-sm font-medium">Selesai</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Aksi Cepat</h3>
            <div className="space-y-3">
              <button 
                onClick={onStartQuiz}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Award className="h-5 w-5" />
                <span>Mulai Kuis</span>
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Materi Tambahan</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Statistik</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-600">Siswa Aktif</span>
                </div>
                <span className="font-bold text-gray-800">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-600">Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-gray-800">4.8</span>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className="h-4 w-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Completion Rate</span>
                </div>
                <span className="font-bold text-gray-800">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};