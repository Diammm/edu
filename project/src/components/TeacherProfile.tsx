import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Award, BookOpen, Users, Calendar, Star, ExternalLink } from 'lucide-react';

interface TeacherProfileProps {
  onBack: () => void;
}

export const TeacherProfile: React.FC<TeacherProfileProps> = ({ onBack }) => {
  const teacher = {
    name: 'Muhammad Turaichan Syarofi',
    title: 'Mahasiswa',
    university: 'Universitas IVET Semarang',
    email: 'turaichans@uti.ac.id',
    phone: '+62 812-3456-7890',
    location: 'Semarang, Indonesia',
    experience: '3 Tahun',
    students: '2',
    courses: '3',
    rating: 4.9,
    bio: 'Mahasiswa Pendidikan Informatika yang masih membutuhkan banyak pengalaman. Pembuat website EduInformatika.',
    expertise: [
      'Machine Learning & AI',
      'Web Development',
      'Database Systems',
      'Software Engineering',
      'Data Science',
      'Cybersecurity'
    ],
    education: [
      {
        degree: 'Mahasiswa',
        institution: 'IVET University',
        year: '2022'
      },
    ],
    achievements: [
      'Mahasiswa Kampus Mengajar Angkatan 8'
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
          <h1 className="text-3xl font-bold text-gray-800">Profil Pengajar</h1>
          <p className="text-gray-600">Informasi lengkap tentang pengajar</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                AF
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{teacher.name}</h2>
                <p className="text-purple-600 font-semibold mb-1">{teacher.title}</p>
                <p className="text-gray-600 mb-4">{teacher.university}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{teacher.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{teacher.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{teacher.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{teacher.experience} Pengalaman</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">{teacher.rating}/5.0</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mt-6">{teacher.bio}</p>
          </div>

          {/* Education */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <span>Riwayat Pendidikan</span>
            </h3>
            <div className="space-y-4">
              {teacher.education.map((edu, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <Award className="h-6 w-6 text-orange-600" />
              <span>Penghargaan & Sertifikasi</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teacher.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-orange-50">
                  <div className="bg-orange-500 p-2 rounded-lg">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Statistik Pengajar</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-600">Total Siswa</span>
                </div>
                <span className="font-bold text-gray-800">{teacher.students}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Mata Kuliah</span>
                </div>
                <span className="font-bold text-gray-800">{teacher.courses}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-600">Pengalaman</span>
                </div>
                <span className="font-bold text-gray-800">{teacher.experience}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-600">Rating</span>
                </div>
                <span className="font-bold text-gray-800">{teacher.rating}/5.0</span>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Keahlian</h3>
            <div className="space-y-2">
              {teacher.expertise.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-2 rounded-lg">
                  <span className="text-purple-800 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Kontak</h3>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Kirim Email</span>
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>Lihat Profil Lengkap</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};