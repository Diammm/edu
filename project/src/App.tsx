import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TopicDetail } from './components/TopicDetail';
import { Quiz } from './components/Quiz';
import { MaterialsList } from './components/MaterialsList';
import { CompletedMaterials } from './components/CompletedMaterials';
import { ScoresList } from './components/ScoresList';
import { TeacherProfile } from './components/TeacherProfile';
import { TopScores } from './components/TopScores';
import { Settings } from './components/Settings';
import { ProfileMenu } from './components/ProfileMenu';
import { StudentProfile } from './components/StudentProfile';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [profileType, setProfileType] = useState<'menu' | 'teacher' | 'student'>('menu');

  const handleTopicSelect = (topic: any) => {
    setSelectedTopic(topic);
    setCurrentView('topic-detail');
    setShowQuiz(false);
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedTopic(null);
    setShowQuiz(false);
    setProfileType('menu');
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleBackToTopic = () => {
    setShowQuiz(false);
  };

  const handleStatsClick = (type: string) => {
    setCurrentView(type);
  };

  const handleProfileSelect = (type: 'teacher' | 'student') => {
    setProfileType(type);
  };

  const handleBackToProfileMenu = () => {
    setProfileType('menu');
  };

  const handleStartLearning = () => {
    // Scroll to topics section or show first topic
    const topicsSection = document.querySelector('[data-topics-section]');
    if (topicsSection) {
      topicsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    if (showQuiz && selectedTopic) {
      return <Quiz topic={selectedTopic} onBack={handleBackToTopic} />;
    }
    
    if (currentView === 'topic-detail' && selectedTopic) {
      return (
        <TopicDetail 
          topic={selectedTopic} 
          onBack={handleBackToDashboard}
          onStartQuiz={handleStartQuiz}
        />
      );
    }
    
    if (currentView === 'materials') {
      return <MaterialsList onBack={handleBackToDashboard} />;
    }
    
    if (currentView === 'completed') {
      return <CompletedMaterials onBack={handleBackToDashboard} />;
    }
    
    if (currentView === 'scores') {
      return <ScoresList onBack={handleBackToDashboard} />;
    }
    
    if (currentView === 'profile') {
      if (profileType === 'teacher') {
        return <TeacherProfile onBack={handleBackToProfileMenu} />;
      } else if (profileType === 'student') {
        return <StudentProfile onBack={handleBackToProfileMenu} />;
      } else {
        return <ProfileMenu onBack={handleBackToDashboard} onSelectProfile={handleProfileSelect} />;
      }
    }
    
    if (currentView === 'achievements') {
      return <TopScores onBack={handleBackToDashboard} />;
    }
    
    if (currentView === 'settings') {
      return <Settings onBack={handleBackToDashboard} />;
    }
    
    return <Dashboard onTopicSelect={handleTopicSelect} onStatsClick={handleStatsClick} onStartLearning={handleStartLearning} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      {renderContent()}
    </div>
  );
}

export default App;