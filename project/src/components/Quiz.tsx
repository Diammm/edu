import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, CheckCircle, X, Trophy, Star, RefreshCw } from 'lucide-react';

interface QuizProps {
  topic: any;
  onBack: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ topic, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan algoritma dalam pemrograman?",
      options: [
        "Bahasa pemrograman yang digunakan",
        "Urutan langkah logis untuk menyelesaikan masalah",
        "Perangkat lunak untuk menulis kode",
        "Komputer yang digunakan untuk programming"
      ],
      correct: 1
    },
    {
      question: "Struktur data mana yang menggunakan prinsip LIFO (Last In First Out)?",
      options: [
        "Queue",
        "Array",
        "Stack",
        "Linked List"
      ],
      correct: 2
    },
    {
      question: "Apa kepanjangan dari HTML?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlink and Text Markup Language"
      ],
      correct: 0
    },
    {
      question: "Database management system apa yang paling populer untuk web development?",
      options: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "SQLite"
      ],
      correct: 2
    },
    {
      question: "Apa yang dimaksud dengan responsive design dalam web development?",
      options: [
        "Website yang loading-nya cepat",
        "Website yang dapat beradaptasi dengan berbagai ukuran layar",
        "Website dengan animasi yang smooth",
        "Website dengan warna yang menarik"
      ],
      correct: 1
    }
  ];

  useEffect(() => {
    if (!isFinished && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleFinishQuiz();
    }
  }, [timeLeft, isFinished]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(newAnswers[currentQuestion + 1] ?? null);
      } else {
        handleFinishQuiz();
      }
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
    const finalAnswers = [...answers];
    if (selectedAnswer !== null) {
      finalAnswers[currentQuestion] = selectedAnswer;
      setAnswers(finalAnswers);
    }
    
    const correctCount = finalAnswers.reduce((count, answer, index) => {
      return count + (answer === questions[index].correct ? 1 : 0);
    }, 0);
    
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setTimeLeft(300);
    setIsFinished(false);
  };

  const correctAnswers = answers.reduce((count, answer, index) => {
    return count + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const score = Math.round((correctAnswers / questions.length) * 100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResult) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
            score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-orange-500' : 'bg-red-500'
          }`}>
            <Trophy className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Selesai!</h2>
          <p className="text-gray-600 mb-8">Berikut hasil quiz Anda untuk {topic.title}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{score}</div>
              <div className="text-gray-600">Skor Akhir</div>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{correctAnswers}/{questions.length}</div>
              <div className="text-gray-600">Jawaban Benar</div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">{formatTime(300 - timeLeft)}</div>
              <div className="text-gray-600">Waktu Terpakai</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            {[1,2,3,4,5].map(star => (
              <Star 
                key={star} 
                className={`h-8 w-8 ${
                  star <= Math.ceil(score / 20) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          
          <div className="flex space-x-4 justify-center">
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2"
            >
              <RefreshCw className="h-5 w-5" />
              <span>Ulangi Quiz</span>
            </button>
            <button
              onClick={onBack}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-medium transition-all duration-200"
            >
              Kembali ke Materi
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Quiz: {topic.title}</h1>
            <p className="text-gray-600">Soal {currentQuestion + 1} dari {questions.length}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-md">
          <Clock className="h-5 w-5 text-orange-500" />
          <span className={`font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-gray-800'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6 leading-relaxed">
          {questions[currentQuestion].question}
        </h2>
        
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedAnswer === index
                  ? 'border-purple-500 bg-purple-50 shadow-md'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === index
                    ? 'border-purple-500 bg-purple-500'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswer === index && (
                    <CheckCircle className="h-4 w-4 text-white" />
                  )}
                </div>
                <span className="font-medium text-gray-800">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => {
            if (currentQuestion > 0) {
              setCurrentQuestion(currentQuestion - 1);
              setSelectedAnswer(answers[currentQuestion - 1] ?? null);
            }
          }}
          disabled={currentQuestion === 0}
          className={`py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
            currentQuestion === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          Sebelumnya
        </button>
        
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className={`py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
            selectedAnswer === null
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg'
          }`}
        >
          {currentQuestion === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
        </button>
      </div>
    </div>
  );
};