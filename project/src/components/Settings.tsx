import React, { useState } from 'react';
import { ArrowLeft, User, Bell, Shield, Palette, Globe, Volume2, Moon, Sun, Monitor } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('id');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    quiz: true,
    progress: false
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    scoresVisible: false,
    progressVisible: true
  });

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handlePrivacyChange = (key: string) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

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
          <h1 className="text-3xl font-bold text-gray-800">Pengaturan</h1>
          <p className="text-gray-600">Kelola preferensi dan pengaturan aplikasi</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <User className="h-6 w-6 text-purple-600" />
            <span>Pengaturan Profil</span>
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                defaultValue="Siswa Informatika"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="siswa@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea
                rows={3}
                defaultValue="Mahasiswa Informatika yang antusias belajar teknologi terbaru"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Palette className="h-6 w-6 text-blue-600" />
            <span>Tampilan</span>
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Tema</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'light', label: 'Terang', icon: Sun },
                  { value: 'dark', label: 'Gelap', icon: Moon },
                  { value: 'system', label: 'Sistem', icon: Monitor }
                ].map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => setTheme(value)}
                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 ${
                      theme === value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <Icon className="h-6 w-6 mb-2 text-gray-600" />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bahasa</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              >
                <option value="id">Bahasa Indonesia</option>
                <option value="en">English</option>
                <option value="ms">Bahasa Melayu</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Bell className="h-6 w-6 text-green-600" />
            <span>Notifikasi</span>
          </h3>
          
          <div className="space-y-4">
            {[
              { key: 'email', label: 'Notifikasi Email', desc: 'Terima update melalui email' },
              { key: 'push', label: 'Push Notification', desc: 'Notifikasi langsung di browser' },
              { key: 'quiz', label: 'Pengingat Quiz', desc: 'Ingatkan saya tentang quiz yang belum dikerjakan' },
              { key: 'progress', label: 'Laporan Progress', desc: 'Laporan mingguan tentang kemajuan belajar' }
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div>
                  <h4 className="font-medium text-gray-800">{label}</h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
                <button
                  onClick={() => handleNotificationChange(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                    notifications[key as keyof typeof notifications]
                      ? 'bg-purple-600'
                      : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      notifications[key as keyof typeof notifications]
                        ? 'translate-x-6'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Shield className="h-6 w-6 text-red-600" />
            <span>Privasi</span>
          </h3>
          
          <div className="space-y-4">
            {[
              { key: 'profileVisible', label: 'Profil Publik', desc: 'Izinkan orang lain melihat profil saya' },
              { key: 'scoresVisible', label: 'Skor Publik', desc: 'Tampilkan skor saya di leaderboard' },
              { key: 'progressVisible', label: 'Progress Publik', desc: 'Izinkan orang lain melihat progress belajar saya' }
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div>
                  <h4 className="font-medium text-gray-800">{label}</h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
                <button
                  onClick={() => handlePrivacyChange(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                    privacy[key as keyof typeof privacy]
                      ? 'bg-green-600'
                      : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      privacy[key as keyof typeof privacy]
                        ? 'translate-x-6'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Audio Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Volume2 className="h-6 w-6 text-orange-600" />
            <span>Audio</span>
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Volume Efek Suara</label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="75"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Volume Musik Latar</label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200">
            Reset ke Default
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};