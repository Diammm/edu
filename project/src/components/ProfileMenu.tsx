import React from 'react';
import { ArrowLeft, User, GraduationCap, Users, BookOpen } from 'lucide-react';

interface ProfileMenuProps {
  onBack: () => void;
  onSelectProfile: (type: 'teacher' | 'student') => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ onBack, onSelectProfile }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={onBack}
          className="p-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Profil</h1>
          <p className="text-gray-600">Pilih jenis profil yang ingin Anda lihat</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Teacher Profile Card */}
        <div 
          onClick={() => onSelectProfile('teacher')}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
        >
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-200">
              Profil Pendidik
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lihat informasi lengkap tentang dosen dan pengajar, termasuk riwayat pendidikan, 
              pengalaman mengajar, dan pencapaian akademik.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">Riwayat Pendidikan</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span className="text-sm">Pengalaman Mengajar</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <User className="h-4 w-4" />
                <span className="text-sm">Informasi Kontak</span>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 group-hover:shadow-lg">
              Lihat Profil Pendidik
            </button>
          </div>
        </div>

        {/* Student Profile Card */}
        <div 
          onClick={() => onSelectProfile('student')}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
        >
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <User className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
              Profil Peserta Didik
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lihat informasi lengkap tentang mahasiswa, termasuk progress akademik, 
              prestasi, dan aktivitas pembelajaran.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">Progress Akademik</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span className="text-sm">Aktivitas Pembelajaran</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <User className="h-4 w-4" />
                <span className="text-sm">Data Pribadi</span>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 group-hover:shadow-lg">
              Lihat Profil Peserta Didik
            </button>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Tambahan</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sistem profil terintegrasi yang memungkinkan Anda untuk melihat informasi lengkap 
            baik dari sisi pendidik maupun peserta didik. Setiap profil dilengkapi dengan 
            data akademik, prestasi, dan informasi kontak yang relevan.
          </p>
        </div>
      </div>
    </div>
  );
};