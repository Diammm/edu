import React from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, BookOpen, Trophy, Star, Award, TrendingUp, Target } from 'lucide-react';

interface StudentProfileProps {
  onBack: () => void;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({ onBack }) => {
  const student = {
    name: 'Ahmad Rizki Pratama',
    nim: '2021110001',
    program: 'Calon Mahasiswa',
    semester: '0',
    email: 'ahmad.rizki@student.uti.ac.id',
    phone: '+62 812-3456-7890',
    address: 'Semarang, Indonesia',
    joinDate: '2025-07-15',
    gpa: 3.75,
    totalCredits: 120,
    completedCourses: 28,
    currentCourses: 6,
    achievements: [
      'Calon Mahasiswa Terbaik'
    ],
    skills: [
      'Java Programming',
      'Web Development',
      'Database Design',
      'Mobile App Development',
      'Machine Learning',
      'UI/UX Design'
    ],
    recentActivities: [
      {
        activity: 'Menyelesaikan Quiz Algoritma Sorting',
        score: 95,
        date: '2025-07-17',
        subject: 'Struktur Data'
      },
      {
        activity: 'Submit Project Web Development',
        score: 88,
        date: '2025-07-17',
        subject: 'Pemrograman Web'
      },
      {
        activity: 'Mengikuti Webinar AI & Machine Learning',
        score: null,
        date: '2025-07-17',
        subject: 'Kecerdasan Buatan'
      }
    ]
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
          <h1 className="text-3xl font-bold text-gray-800">Profil Peserta Didik</h1>
          <p className="text-gray-600">Informasi lengkap mahasiswa</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                AR
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{student.name}</h2>
                <p className="text-blue-600 font-semibold mb-1">NIM: {student.nim}</p>
                <p className="text-gray-600 mb-4">{student.program} - Semester {student.semester}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{student.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{student.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{student.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Bergabung: {new Date(student.joinDate).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 px-3 py-1 rounded-full">
                    <span className="text-green-800 font-medium text-sm">GPA: {student.gpa}</span>
                  </div>
                  <div className="bg-blue-100 px-3 py-1 rounded-full">
                    <span className="text-blue-800 font-medium text-sm">{student.totalCredits} SKS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Progress */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <span>Progress Akademik</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{student.completedCourses}</p>
                <p className="text-gray-600 text-sm">Mata Kuliah Selesai</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-orange-600">{student.currentCourses}</p>
                <p className="text-gray-600 text-sm">Sedang Berjalan</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{student.gpa}</p>
                <p className="text-gray-600 text-sm">IPK Kumulatif</p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Aktivitas Terbaru</h3>
            <div className="space-y-4">
              {student.recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500 p-2 rounded-lg">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{activity.activity}</h4>
                      <p className="text-gray-600 text-sm">{activity.subject}</p>
                      <p className="text-gray-500 text-xs">{new Date(activity.date).toLocaleDateString('id-ID')}</p>
                    </div>
                  </div>
                  {activity.score && (
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {activity.score}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Academic Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Statistik Akademik</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">IPK</span>
                <span className="font-bold text-gray-800">{student.gpa}/4.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total SKS</span>
                <span className="font-bold text-gray-800">{student.totalCredits}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Semester</span>
                <span className="font-bold text-gray-800">{student.semester}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Status</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Aktif
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Keahlian</h3>
            <div className="space-y-2">
              {student.skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-2 rounded-lg">
                  <span className="text-blue-800 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <Award className="h-5 w-5 text-orange-600" />
              <span>Prestasi</span>
            </h3>
            <div className="space-y-3">
              {student.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-orange-50">
                  <div className="bg-orange-500 p-1 rounded-full">
                    <Star className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};