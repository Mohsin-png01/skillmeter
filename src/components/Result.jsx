import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Trophy, TrendingUp, BarChart3, ChevronRight, RefreshCw, Home, CheckCircle, XCircle, LogOut } from 'lucide-react'
import { getDifficultyStats } from '../utils/questionEngine'

const Result = ({ results, settings, userInfo, onRestart, onLogout }) => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [reviewIndex, setReviewIndex] = useState(0)
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
    expressjs: "Express.js"
  }

  const difficultyStats = getDifficultyStats(results.questions, results.answers)
  const totalTime = Math.floor(results.timeSpent / 60)

  const getPerformanceMessage = () => {
    if (results.percentage >= 90) return { 
      title: "Outstanding!", 
      message: "You're truly exceptional!",
      color: "text-secondary",
      bgColor: "bg-secondary/20"
    }
    if (results.percentage >= 70) return { 
      title: "Excellent!", 
      message: "Strong command of the subject",
      color: "text-green-400",
      bgColor: "bg-green-400/20"
    }
    if (results.percentage >= 50) return { 
      title: "Good Job!", 
      message: "Solid understanding, room to grow",
      color: "text-accent",
      bgColor: "bg-accent/20"
    }
    return { 
      title: "Keep Practicing!", 
      message: "Review the fundamentals and try again",
      color: "text-danger",
      bgColor: "bg-danger/20"
    }
  }

  const performance = getPerformanceMessage()

  const handleRestart = () => {
    onRestart()
    navigate('/setup')
  }

  const handleNewSkill = () => {
    onRestart()
    navigate('/setup')
  }

  const handleGoHome = () => {
    onRestart()
    navigate('/')
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
    return `${mins}m ${secs}s`
  }

  const reviewQuestions = results.questions.filter((q, index) => 
    !results.answers[index] || 
    results.answers[index].trim() !== q.answer.trim()
  )

  const currentReviewQuestion = reviewQuestions[reviewIndex]
  const currentQuestionIndex = currentReviewQuestion 
    ? results.questions.findIndex(q => q.id === currentReviewQuestion.id)
    : -1

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <div></div> {/* Empty div for spacing */}
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-danger/20 text-danger rounded-lg font-medium hover:bg-danger/30 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Assessment <span className="text-primary">Complete</span>
          </h1>
          <p className="text-gray">
            Here's how you performed in your {skillNames[settings.skill] || settings.skill} assessment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Card */}
            <div className="bg-card-bg rounded-2xl p-6 shadow-lg border border-card-border">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className={`w-32 h-32 rounded-full ${performance.bgColor} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${performance.color}`}>
                      {results.percentage}%
                    </div>
                    <div className="text-sm text-gray mt-1">Score</div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className={`text-2xl font-bold ${performance.color} mb-2`}>
                    {performance.title}
                  </h2>
                  <p className="text-gray mb-4">{performance.message}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-dark-gray/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold">{results.correctCount}</div>
                      <div className="text-sm text-gray">Correct</div>
                    </div>
                    <div className="bg-dark-gray/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold">{results.totalQuestions - results.correctCount}</div>
                      <div className="text-sm text-gray">Incorrect</div>
                    </div>
                    <div className="bg-dark-gray/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold">{results.score}</div>
                      <div className="text-sm text-gray">Points</div>
                    </div>
                    <div className="bg-dark-gray/50 p-3 rounded-lg">
                      <div className="text-2xl font-bold">{totalTime}</div>
                      <div className="text-sm text-gray">Minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-card-bg rounded-2xl shadow-lg border border-card-border">
              <div className="border-b border-card-border">
                <div className="flex overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-4 px-6 font-medium transition ${activeTab === 'overview' ? 'text-primary border-b-2 border-primary' : 'text-gray hover:text-light'}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Overview
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('difficulty')}
                    className={`flex-1 py-4 px-6 font-medium transition ${activeTab === 'difficulty' ? 'text-primary border-b-2 border-primary' : 'text-gray hover:text-light'}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Difficulty Breakdown
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('review')}
                    className={`flex-1 py-4 px-6 font-medium transition ${activeTab === 'review' ? 'text-primary border-b-2 border-primary' : 'text-gray hover:text-light'}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Review ({reviewQuestions.length})
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Assessment Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-dark-gray/30 p-4 rounded-lg">
                          <div className="text-sm text-gray mb-1">Skill Assessed</div>
                          <div className="font-medium">{skillNames[settings.skill] || settings.skill}</div>
                        </div>
                        <div className="bg-dark-gray/30 p-4 rounded-lg">
                          <div className="text-sm text-gray mb-1">Questions</div>
                          <div className="font-medium">{results.totalQuestions} total</div>
                        </div>
                        <div className="bg-dark-gray/30 p-4 rounded-lg">
                          <div className="text-sm text-gray mb-1">Time Taken</div>
                          <div className="font-medium">{formatTime(results.timeSpent)}</div>
                        </div>
                        <div className="bg-dark-gray/30 p-4 rounded-lg">
                          <div className="text-sm text-gray mb-1">Completion Date</div>
                          <div className="font-medium">
                            {new Date(results.completedAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Performance Insights</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Accuracy Rate</span>
                            <span>{results.percentage}%</span>
                          </div>
                          <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                              style={{ width: `${results.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Question Completion</span>
                            <span>{results.answers.filter(a => a).length}/{results.totalQuestions}</span>
                          </div>
                          <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-secondary rounded-full"
                              style={{ width: `${(results.answers.filter(a => a).length / results.totalQuestions) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'difficulty' && (
                  <div className="space-y-6">
                    {Object.entries(difficultyStats).map(([level, stats]) => (
                      <div key={level} className="bg-dark-gray/30 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${
                              level === 'beginner' ? 'bg-secondary' :
                              (level === 'intermediate' || level === 'medium') ? 'bg-accent' : 'bg-primary'
                            }`}></div>
                            <span className="font-medium capitalize">{level === 'medium' ? 'intermediate' : level === 'hard' ? 'advanced' : level}</span>
                          </div>
                          <div className="text-sm">
                            {stats.correct}/{stats.total} correct
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Correct Answers</span>
                            <span>{stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0}%</span>
                          </div>
                          <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                level === 'beginner' ? 'bg-secondary' :
                                (level === 'intermediate' || level === 'medium') ? 'bg-accent' : 'bg-primary'
                              }`}
                              style={{ width: `${stats.total > 0 ? (stats.correct / stats.total) * 100 : 0}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'review' && reviewQuestions.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">Question {reviewIndex + 1} of {reviewQuestions.length}</h3>
                        <p className="text-sm text-gray">Reviewing incorrect/unanswered questions</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setReviewIndex(prev => Math.max(0, prev - 1))}
                          disabled={reviewIndex === 0}
                          className="p-2 bg-dark-gray rounded-lg disabled:opacity-50"
                        >
                          <ChevronRight className="w-4 h-4 rotate-180" />
                        </button>
                        <button
                          onClick={() => setReviewIndex(prev => Math.min(reviewQuestions.length - 1, prev + 1))}
                          disabled={reviewIndex === reviewQuestions.length - 1}
                          className="p-2 bg-dark-gray rounded-lg disabled:opacity-50"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {currentReviewQuestion && (
                      <div className="bg-dark-gray/30 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            currentReviewQuestion.level === 'beginner' ? 'bg-secondary/20 text-secondary' :
                            (currentReviewQuestion.level === 'intermediate' || currentReviewQuestion.level === 'medium') ? 'bg-accent/20 text-accent' :
                            'bg-primary/20 text-primary'
                          }`}>
                            {currentReviewQuestion.level === 'medium' ? 'intermediate' : currentReviewQuestion.level === 'hard' ? 'advanced' : currentReviewQuestion.level}
                          </div>
                          <div className="px-2 py-1 bg-dark-gray rounded text-xs font-medium text-gray">
                            {currentReviewQuestion.type}
                          </div>
                        </div>

                        <h4 className="font-semibold mb-3">{currentReviewQuestion.question}</h4>
                        
                        {currentReviewQuestion.code && (
                          <pre className="bg-code-bg rounded-lg p-3 mb-4 text-sm overflow-x-auto">
                            <code>{currentReviewQuestion.code}</code>
                          </pre>
                        )}

                        <div className="space-y-3">
                          <div className="p-3 bg-danger/10 border border-danger/20 rounded-lg">
                            <div className="flex items-center gap-2 text-danger mb-1">
                              <XCircle className="w-4 h-4" />
                              <span className="font-medium">Your Answer</span>
                            </div>
                            <div>{results.answers[currentQuestionIndex] || 'Not answered'}</div>
                          </div>

                          <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
                            <div className="flex items-center gap-2 text-secondary mb-1">
                              <CheckCircle className="w-4 h-4" />
                              <span className="font-medium">Correct Answer</span>
                            </div>
                            <div>{currentReviewQuestion.answer}</div>
                          </div>

                          {currentReviewQuestion.explanation && (
                            <div className="p-3 bg-dark-gray/50 rounded-lg">
                              <div className="font-medium mb-1">Explanation</div>
                              <div className="text-sm text-gray">{currentReviewQuestion.explanation}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'review' && reviewQuestions.length === 0 && (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">Perfect Score!</h3>
                    <p className="text-gray">All questions answered correctly. Great job!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Actions & Stats */}
          <div className="space-y-6">
            {/* User Info */}
            <div className="bg-card-bg rounded-2xl p-6 shadow-lg border border-card-border">
              <h3 className="font-semibold mb-4">Assessment Summary</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray">Candidate</div>
                  <div className="font-medium">{userInfo.name}</div>
                </div>
                <div>
                  <div className="text-sm text-gray">Role</div>
                  <div className="font-medium">{userInfo.role}</div>
                </div>
                <div>
                  <div className="text-sm text-gray">Skill Assessed</div>
                  <div className="font-medium">{skillNames[settings.skill] || settings.skill}</div>
                </div>
                <div>
                  <div className="text-sm text-gray">Assessment Date</div>
                  <div className="font-medium">
                    {new Date(results.completedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-card-bg rounded-2xl p-6 shadow-lg border border-card-border">
              <h3 className="font-semibold mb-4">Next Steps</h3>
              <div className="space-y-3">
                <button
                  onClick={handleRestart}
                  className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-light rounded-lg font-medium hover:from-primary-light hover:to-primary transition shadow-lg flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Retry Same Assessment
                </button>
                
                <button
                  onClick={handleNewSkill}
                  className="w-full py-3 px-4 bg-dark-gray rounded-lg font-medium hover:bg-gray transition flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-4 h-4" />
                  Try Different Skill
                </button>
                
                <button
                  onClick={handleGoHome}
                  className="w-full py-3 px-4 bg-dark-gray rounded-lg font-medium hover:bg-gray transition flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-card-bg rounded-2xl p-6 shadow-lg border border-card-border">
              <h3 className="font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray">Time per Question</span>
                  <span className="font-medium">{Math.round(results.timeSpent / results.totalQuestions)}s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray">Accuracy</span>
                  <span className="font-medium">{results.percentage}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray">Difficulty Score</span>
                  <span className="font-medium">{results.score}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray">Questions Answered</span>
                  <span className="font-medium">{results.answers.filter(a => a).length}/{results.totalQuestions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <p className="text-gray text-sm">You will be logged out and redirected to the welcome screen.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 bg-dark-gray rounded-lg font-medium hover:bg-gray transition"
              >
                Cancel
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

export default Result