import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { generateQuiz, calculateScore } from '../utils/questionEngine'
import QuestionCard from './QuestionCard'
import { Clock, ChevronLeft, ChevronRight, AlertCircle, LogOut } from 'lucide-react'

const Quiz = ({ settings, onComplete, onLogout }) => {
  const navigate = useNavigate()
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(settings.questionCount * 60) // 1 minute per question
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  // Skill names mapping
  const skillNames = {
    javascript: "JavaScript",
    react: "React",
    python: "Python",
    nextjs: "Next.js",
    nodejs: "Node.js",
    sql: "SQL",
    dsa: "Data Structures & Algorithms",
    flutter: "Flutter",
    angular: "Angular",
    expressjs: "Express.js",
    html: "HTML",
    css: "CSS",
    bootstrap: "Bootstrap"
  }

  // Initialize quiz
  useEffect(() => {
    const generatedQuiz = generateQuiz(
      questions,
      settings.skill,
      settings.questionCount
    )
    setQuizQuestions(generatedQuiz)
    setAnswers(new Array(generatedQuiz.length).fill(''))
  }, [settings])

  const handleSubmit = useCallback(() => {
    setIsSubmitting(true)
    
    const { score, correctCount } = calculateScore(quizQuestions, answers)
    const percentage = Math.round((correctCount / quizQuestions.length) * 100)
    
    const results = {
      score,
      correctCount,
      totalQuestions: quizQuestions.length,
      percentage,
      answers,
      questions: quizQuestions,
      timeSpent: settings.questionCount * 60 - timeLeft,
      completedAt: new Date().toISOString()
    }
    
    setTimeout(() => {
      onComplete(results)
      navigate('/result')
    }, 500)
  }, [quizQuestions, answers, settings, timeLeft, onComplete, navigate])

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, handleSubmit])

  const handleAnswerSelect = useCallback((answer) => {
    setAnswers(prev => {
      const newAnswers = [...prev]
      newAnswers[currentQuestionIndex] = answer
      return newAnswers
    })
  }, [currentQuestionIndex])

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
      navigate('/')
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray">Loading questions...</p>
        </div>
      </div>
    )
  }

  const currentQuestion = quizQuestions[currentQuestionIndex]

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 fade-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold">
                {skillNames[settings.skill] || settings.skill} Assessment
              </h1>
              <p className="text-gray">Test your {skillNames[settings.skill] || settings.skill} skills with real-world questions</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-dark-gray/50 px-4 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
              
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="flex items-center gap-2 px-4 py-2 bg-danger/20 text-danger rounded-lg font-medium hover:bg-danger/30 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
              
              <button
                onClick={() => setShowConfirm(true)}
                className="px-4 py-2 bg-danger/20 text-danger rounded-lg font-medium hover:bg-danger/30 transition"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Question Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {quizQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                  index === currentQuestionIndex
                    ? 'bg-primary text-white'
                    : answers[index]
                    ? 'bg-secondary/20 text-secondary'
                    : 'bg-dark-gray hover:bg-gray'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          index={currentQuestionIndex}
          selectedAnswer={answers[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
        />

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
              currentQuestionIndex === 0
                ? 'bg-dark-gray text-gray cursor-not-allowed'
                : 'bg-dark-gray hover:bg-gray'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex items-center gap-4">
            {currentQuestionIndex === quizQuestions.length - 1 ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="px-6 py-3 bg-gradient-to-r from-secondary to-green-500 rounded-lg font-medium hover:from-green-500 hover:to-secondary transition shadow-lg"
              >
                Finish Assessment
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-light rounded-lg font-medium hover:from-primary-light hover:to-primary transition shadow-lg"
              >
                Next Question
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-card-bg rounded-2xl p-6 max-w-md w-full border border-card-border slide-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-danger/20 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-danger" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Submit Assessment?</h3>
                <p className="text-gray text-sm">You have {answers.filter(a => a).length} out of {quizQuestions.length} questions answered</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray">Time Remaining:</span>
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Questions Answered:</span>
                <span>{answers.filter(a => a).length}/{quizQuestions.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Unanswered:</span>
                <span>{quizQuestions.length - answers.filter(a => a).length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Skill:</span>
                <span>{skillNames[settings.skill] || settings.skill}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3 bg-dark-gray rounded-lg font-medium hover:bg-gray transition"
              >
                Continue Assessment
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`flex-1 py-3 rounded-lg font-medium transition ${
                  isSubmitting
                    ? 'bg-gray cursor-wait'
                    : 'bg-gradient-to-r from-danger to-red-500 hover:from-red-500 hover:to-danger'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Now'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-card-bg rounded-2xl p-6 max-w-md w-full border border-card-border slide-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-danger/20 rounded-lg flex items-center justify-center">
                <LogOut className="w-5 h-5 text-danger" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Logout?</h3>
                <p className="text-gray text-sm">All progress will be lost. Are you sure you want to logout?</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray">Questions Answered:</span>
                <span>{answers.filter(a => a).length}/{quizQuestions.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Time Spent:</span>
                <span>{formatTime(settings.questionCount * 60 - timeLeft)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray">Skill:</span>
                <span>{skillNames[settings.skill] || settings.skill}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 bg-dark-gray rounded-lg font-medium hover:bg-gray transition"
              >
                Continue Assessment
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-3 bg-gradient-to-r from-danger to-red-500 hover:from-red-500 hover:to-danger rounded-lg font-medium transition"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Quiz