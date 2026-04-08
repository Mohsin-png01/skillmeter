import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './components/Welcome'
import Setup from './components/Setup'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem('skillmeter_user')
    return saved ? JSON.parse(saved) : null
  })
  
  const [quizSettings, setQuizSettings] = useState(() => {
    const saved = localStorage.getItem('skillmeter_settings')
    return saved ? JSON.parse(saved) : null
  })
  
  const [quizResults, setQuizResults] = useState(null)

  // Save user info to localStorage when it changes
  useEffect(() => {
    if (userInfo) {
      localStorage.setItem('skillmeter_user', JSON.stringify(userInfo))
    }
  }, [userInfo])

  // Save quiz settings to localStorage when they change
  useEffect(() => {
    if (quizSettings) {
      localStorage.setItem('skillmeter_settings', JSON.stringify(quizSettings))
    }
  }, [quizSettings])

  const handleUserSubmit = (info) => {
    setUserInfo(info)
  }

  const handleSetupSubmit = (settings) => {
    setQuizSettings(settings)
  }

  const handleQuizComplete = (results) => {
    setQuizResults(results)
    
    // Save to localStorage for persistence
    const history = JSON.parse(localStorage.getItem('skillmeter_history') || '[]')
    history.unshift({
      id: Date.now(),
      date: new Date().toISOString(),
      userInfo,
      settings: quizSettings,
      results
    })
    localStorage.setItem('skillmeter_history', JSON.stringify(history.slice(0, 10))) // Keep last 10
  }

  const handleRestart = () => {
    setQuizSettings(null)
    setQuizResults(null)
  }

  const handleLogout = () => {
    // Clear everything including user info
    setUserInfo(null)
    setQuizSettings(null)
    setQuizResults(null)
    localStorage.removeItem('skillmeter_user')
    localStorage.removeItem('skillmeter_settings')
    localStorage.removeItem('skillmeter_history')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-dark">
      <Routes>
        <Route 
          path="/" 
          element={
            !userInfo ? (
              <Welcome onSubmit={handleUserSubmit} />
            ) : (
              <Navigate to="/setup" />
            )
          } 
        />
        <Route 
          path="/setup" 
          element={
            userInfo ? (
              !quizSettings ? (
                <Setup onSubmit={handleSetupSubmit} />
              ) : (
                <Navigate to="/quiz" />
              )
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/quiz" 
          element={
            quizSettings ? (
              <Quiz 
                settings={quizSettings} 
                onComplete={handleQuizComplete}
                onLogout={handleLogout}
              />
            ) : (
              <Navigate to="/setup" />
            )
          } 
        />
        <Route 
          path="/result" 
          element={
            quizResults ? (
              <Result 
                results={quizResults}
                settings={quizSettings}
                userInfo={userInfo}
                onRestart={handleRestart}
                onLogout={handleLogout}
              />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App