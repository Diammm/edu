import React from 'react';
import { Code, Database, Globe, Shield, Brain, Cpu, Play, BookOpen, Trophy, Star, ArrowRight } from 'lucide-react';

interface DashboardProps {
  onTopicSelect: (topic: any) => void;
  onStatsClick: (type: string) => void;
  onStartLearning: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onTopicSelect, onStatsClick, onStartLearning }) => {
  const topics = [
    {
      id: 'programming',
      title: 'Pemrograman Dasar',
      description: 'Pelajari konsep dasar pemrograman dan algoritma',
      icon: Code,
      color: 'from-purple-500 to-indigo-600',
      progress: 75,
      lessons: 12,
      completed: 9,
      materials: [
        'Pengenalan Algoritma dan Flowchart',
        'Variabel dan Tipe Data',
        'Struktur Kontrol (If-Else, Loop)',
        'Function dan Procedure',
        'Array dan String',
        'Rekursi dan Kompleksitas',
        'Sorting dan Searching',
        'Object Oriented Programming',
        'Exception Handling',
        'File Input/Output',
        'Debugging dan Testing',
        'Project: Aplikasi Sederhana'
      ]
    },
    {
      id: 'database',
      title: 'Basis Data',
      description: 'Memahami konsep database dan SQL',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      progress: 60,
      lessons: 10,
      completed: 6,
      materials: [
        'Konsep Dasar Database',
        'Entity Relationship Diagram (ERD)',
        'Normalisasi Database',
        'SQL Dasar (SELECT, INSERT, UPDATE, DELETE)',
        'SQL Lanjutan (JOIN, Subquery)',
        'Stored Procedure dan Function',
        'Database Design Patterns',
        'NoSQL vs SQL Database',
        'Database Security',
        'Project: Sistem Informasi Sederhana'
      ]
    },
    {
      id: 'web',
      title: 'Pengembangan Web',
      description: 'HTML, CSS, JavaScript dan framework modern',
      icon: Globe,
      color: 'from-emerald-500 to-teal-500',
      progress: 90,
      lessons: 15,
      completed: 13,
      materials: [
        'HTML Fundamentals',
        'CSS Styling dan Layout',
        'CSS Grid dan Flexbox',
        'JavaScript Dasar',
        'DOM Manipulation',
        'Event Handling',
        'AJAX dan Fetch API',
        'Local Storage dan Session',
        'Responsive Web Design',
        'CSS Frameworks (Bootstrap/Tailwind)',
        'JavaScript Frameworks (React/Vue)',
        'Version Control dengan Git',
        'Web Performance Optimization',
        'Web Security Basics',
        'Project: Website Portfolio'
      ]
    },
    {
      id: 'security',
      title: 'Keamanan Siber',
      description: 'Prinsip keamanan informasi dan cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      progress: 30,
      lessons: 8,
      completed: 2,
      materials: [
        'Pengenalan Cybersecurity',
        'Threat dan Vulnerability Assessment',
        'Kriptografi dan Enkripsi',
        'Network Security',
        'Web Application Security',
        'Social Engineering',
        'Incident Response',
        'Ethical Hacking Basics'
      ]
    },
    {
      id: 'ai',
      title: 'Kecerdasan Buatan',
      description: 'Machine Learning dan AI fundamentals',
      icon: Brain,
      color: 'from-orange-500 to-amber-500',
      progress: 45,
      lessons: 14,
      completed: 6,
      materials: [
        'Pengenalan Artificial Intelligence',
        'Machine Learning Fundamentals',
        'Supervised Learning',
        'Unsupervised Learning',
        'Neural Networks',
        'Deep Learning Basics',
        'Natural Language Processing',
        'Computer Vision',
        'Data Preprocessing',
        'Model Evaluation',
        'Python untuk AI/ML',
        'TensorFlow/PyTorch Basics',
        'AI Ethics',
        'Project: AI Application'
      ]
    },
    {
      id: 'networks',
      title: 'Jaringan Komputer',
      description: 'Protokol jaringan dan sistem terdistribusi',
      icon: Cpu,
      color: 'from-violet-500 to-purple-500',
      progress: 20,
      lessons: 11,
      completed: 2,
      materials: [
        'Pengenalan Jaringan Komputer',
        'OSI Layer Model',
        'TCP/IP Protocol Suite',
        'Network Topologies',
        'Routing dan Switching',
        'Wireless Networks',
        'Network Security',
        'Cloud Computing',
        'Distributed Systems',
        'Network Troubleshooting',
        'Project: Network Configuration'
      ]
    }
  ];

  const stats = [
    { label: 'Total Materi', value: '70', icon: BookOpen, color: 'bg-blue-500', type: 'materials' },
    { label: 'Diselesaikan', value: '38', icon: Trophy, color: 'bg-green-500', type: 'completed' },
    { label: 'Skor Rata-rata', value: '87', icon: Star, color: 'bg-orange-500', type: 'scores' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 rounded-3xl p-12 mb-8 text-white relative overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-32 w-20 h-20 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Selamat Datang di 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                EduInformatika
              </span>
            </h2>
            <p className="text-purple-100 text-lg mb-6 leading-relaxed">
              Platform pembelajaran informatika terdepan yang menggabungkan teknologi modern dengan metode pengajaran interaktif. 
              Dirancang khusus untuk mahasiswa dan dosen informatika.
            </p>
            
            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-green-400 p-1 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-purple-100">Pembelajaran Interaktif dengan Quiz Real-time</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-400 p-1 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-purple-100">Progress Tracking & Achievement System</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-400 p-1 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-purple-100">Materi Lengkap dari Dasar hingga Advanced</span>
              </div>
            </div>
            
            <button 
              onClick={onStartLearning}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 group cursor-pointer shadow-lg hover:shadow-xl"
            >
              <Play className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-lg">Mulai Belajar Sekarang</span>
            </button>
          </div>
          
          {/* Right Content - Laptop Illustration */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Laptop Screen */}
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-md h-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Code className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">EduInformatika</p>
                    <p className="text-xs opacity-75">Learning Platform</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="bg-white/20 rounded-lg h-4"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 p-3 rounded-full animate-bounce">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-4 bg-green-400 p-3 rounded-full animate-pulse">
              <Star className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <button 
            key={index} 
            onClick={() => onStatsClick(stat.type)}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center justify-end mt-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-sm font-medium mr-1">Lihat Detail</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        ))}
      </div>

      {/* Demo Video Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Video Demo Penggunaan</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pelajari cara menggunakan platform pembelajaran ini dengan menonton video demo berikut. 
            Video ini akan memandu Anda melalui semua fitur utama aplikasi.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
            {/* Video Placeholder */}
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-4 inline-block">
                <Play className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-2">Demo Penggunaan Platform</h4>
                <p className="text-gray-600 mb-4">Durasi: 5 menit 30 detik</p>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2 mx-auto">
                  <Play className="h-5 w-5" />
                  <span>Putar Video</span>
                  <link>https://clinquant-sunflower-4d011e.netlify.app/</link>
                </button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-purple-300/30 rounded-full"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-blue-300/30 rounded-full"></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-indigo-300/30 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-pink-300/30 rounded-full"></div>
          </div>
          
          {/* Video Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl w-fit mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Navigasi Dashboard</h5>
              <p className="text-gray-600 text-sm">Cara menggunakan menu dan fitur utama</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl w-fit mx-auto mb-3">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Mengerjakan Quiz</h5>
              <p className="text-gray-600 text-sm">Panduan lengkap sistem quiz interaktif</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-xl w-fit mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Tracking Progress</h5>
              <p className="text-gray-600 text-sm">Memantau kemajuan dan pencapaian</p>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="mb-8" data-topics-section>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Topik Pembelajaran</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              onClick={() => onTopicSelect(topic)}
            >
              <div className={`bg-gradient-to-r ${topic.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <topic.icon className="h-6 w-6 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                {topic.title}
              </h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{topic.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>{topic.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${topic.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>{topic.completed}/{topic.lessons} Pelajaran</span>
                <span className="text-purple-600 font-medium group-hover:text-purple-800">Mulai →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};