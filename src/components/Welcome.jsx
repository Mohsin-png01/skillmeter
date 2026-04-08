import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Code, Rocket } from 'lucide-react'

const Welcome = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      onSubmit({
        name: name.trim(),
        role: role.trim() || 'Developer',
        joinedAt: new Date().toISOString()
      })
      navigate('/setup')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full fade-in">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Rocket className="w-4 h-4 text-dark" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Skill<span className="text-primary">Meter</span>
          </h1>
          <p className="text-gray text-lg">
            Measure your JavaScript & React skills with AI-powered assessments
          </p>
        </div>

        <div className="bg-card-bg rounded-2xl p-6 md:p-8 shadow-lg border border-card-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Welcome! Let's get started</h2>
              <p className="text-gray text-sm">Tell us a bit about yourself</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-dark-gray border border-gray rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Enter your name"
                required
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Your Role (Optional)
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-dark-gray border border-gray rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="e.g., Frontend Developer, Student, etc."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-dark-gray/50 p-4 rounded-lg">
                <div className="text-primary font-bold text-2xl mb-1">30%</div>
                <div className="text-sm text-gray">Beginner Questions</div>
              </div>
              <div className="bg-dark-gray/50 p-4 rounded-lg">
                <div className="text-accent font-bold text-2xl mb-1">30%</div>
                <div className="text-sm text-gray">Medium Questions</div>
              </div>
              <div className="bg-dark-gray/50 p-4 rounded-lg">
                <div className="text-secondary font-bold text-2xl mb-1">40%</div>
                <div className="text-sm text-gray">Hard Questions</div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!name.trim()}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                name.trim()
                  ? 'bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transform hover:-translate-y-0.5 shadow-lg'
                  : 'bg-gray cursor-not-allowed'
              }`}
            >
              Continue to Assessment
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-card-border">
            <p className="text-sm text-gray text-center">
              Your data is stored locally and never sent to any server
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome