import { useState, useEffect } from 'react'
import { CheckCircle, Circle, Code, AlertTriangle } from 'lucide-react'

const QuestionCard = ({ question, index, selectedAnswer, onAnswerSelect }) => {
  const [localAnswer, setLocalAnswer] = useState(selectedAnswer)

  useEffect(() => {
    setLocalAnswer(selectedAnswer)
  }, [selectedAnswer, index])

  const handleAnswerSelect = (answer) => {
    setLocalAnswer(answer)
    onAnswerSelect(answer)
  }

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'beginner': return 'text-secondary'
      case 'intermediate':
      case 'medium': return 'text-accent'
      case 'advanced':
      case 'hard': return 'text-primary'
      default: return 'text-gray'
    }
  }

  const getDifficultyBgColor = (level) => {
    switch (level) {
      case 'beginner': return 'bg-secondary/20'
      case 'intermediate':
      case 'medium': return 'bg-accent/20'
      case 'advanced':
      case 'hard': return 'bg-primary/20'
      default: return 'bg-dark-gray'
    }
  }

  return (
    <div className="bg-card-bg rounded-2xl p-6 md:p-8 shadow-lg border border-card-border fade-in">
      {/* Question Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded-lg ${getDifficultyBgColor(question.level)}`}>
            <span className={`text-sm font-medium ${getDifficultyColor(question.level)}`}>
              {question.level.charAt(0).toUpperCase() + question.level.slice(1)}
            </span>
          </div>
          <div className="px-3 py-1 bg-dark-gray rounded-lg">
            <span className="text-sm font-medium text-gray">
              {question.type.toUpperCase()}
            </span>
          </div>
        </div>
        
        <div className="text-sm text-gray">
          Question {index + 1}
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 leading-relaxed">
          {question.question}
        </h2>
        
        {/* Code Snippet */}
        {question.code && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Code Snippet</span>
            </div>
            <pre className="bg-code-bg rounded-lg p-4 overflow-x-auto">
              <code className="text-sm">{question.code}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options ? (
          question.options.map((option, optIndex) => {
            const optionLetter = String.fromCharCode(65 + optIndex)
            const isSelected = localAnswer === option
            
            return (
              <button
                key={optIndex}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  isSelected
                    ? 'border-primary bg-primary/10'
                    : 'border-card-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? 'border-primary bg-primary'
                      : 'border-gray'
                  }`}>
                    {isSelected ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : (
                      <Circle className="w-4 h-4 text-transparent" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-medium mb-1">
                      <span className="text-primary font-bold mr-2">{optionLetter}.</span>
                      {option}
                    </div>
                  </div>
                </div>
              </button>
            )
          })
        ) : (
          // For code type questions
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-dark-gray/30 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray">
                This is a code-based question. Type your answer in the box below.
              </div>
            </div>
            
            <textarea
              value={localAnswer || ''}
              onChange={(e) => handleAnswerSelect(e.target.value)}
              className="w-full h-32 bg-dark-gray border border-card-border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition font-mono text-sm resize-none"
              placeholder="Write your code answer here..."
              spellCheck="false"
            />
          </div>
        )}
      </div>

      {/* Selected Answer Display */}
      {localAnswer && question.type !== 'code' && (
        <div className="mt-6 p-4 bg-dark-gray/30 rounded-lg">
          <div className="text-sm text-gray mb-1">Your selected answer:</div>
          <div className="font-medium">{localAnswer}</div>
        </div>
      )}
    </div>
  )
}

export default QuestionCard