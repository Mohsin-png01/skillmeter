import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Settings, Zap, Hash, AlertCircle } from 'lucide-react'
import { FaJsSquare, FaReact, FaPython, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiNextdotjs, SiFlutter, SiAngular, SiExpress, SiBootstrap } from 'react-icons/si'
import { questions } from '../data/questions'

const Setup = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [skill, setSkill] = useState('javascript')
  const [questionCount, setQuestionCount] = useState(10)
  const [inputValue, setInputValue] = useState('10')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [maxQuestions, setMaxQuestions] = useState(100)

  useEffect(() => {
    // Calculate maximum questions available for selected skill
    const skillQuestions = questions.filter(q => q.skill === skill)
    setMaxQuestions(skillQuestions.length)
    
    // If current selection exceeds max, adjust it
    if (questionCount > skillQuestions.length) {
      const newCount = skillQuestions.length
      setQuestionCount(newCount)
      setInputValue(newCount.toString())
    }
  }, [skill, questionCount])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Validate question count
    const skillQuestions = questions.filter(q => q.skill === skill)
    const availableQuestions = skillQuestions.length
    const finalQuestionCount = Math.min(questionCount, availableQuestions)
    
    // Simulate API call delay
    setTimeout(() => {
      onSubmit({
        skill,
        questionCount: finalQuestionCount,
        createdAt: new Date().toISOString()
      })
      navigate('/quiz')
    }, 300)
  }

  const handleSliderChange = (value) => {
    const numValue = parseInt(value)
    setQuestionCount(numValue)
    setInputValue(value)
  }

  const handleInputChange = (value) => {
    setInputValue(value)
    const numValue = parseInt(value) || 0
    const max = maxQuestions
    if (numValue >= 1 && numValue <= max) {
      setQuestionCount(numValue)
    }
  }

  const handleInputBlur = () => {
    const numValue = parseInt(inputValue) || 10
    const max = maxQuestions
    const clampedValue = Math.min(max, Math.max(1, numValue))
    setQuestionCount(clampedValue)
    setInputValue(clampedValue.toString())
  }

  const handleQuickSelect = (count) => {
    const max = maxQuestions
    const clampedCount = Math.min(max, Math.max(1, count))
    setQuestionCount(clampedCount)
    setInputValue(clampedCount.toString())
  }

  const calculateDistribution = () => {
    const beginner = Math.floor(questionCount * 0.3)
    const medium = Math.floor(questionCount * 0.3)
    const hard = questionCount - beginner - medium
    return { beginner, medium, hard }
  }

  const distribution = calculateDistribution()

  const skillData = {
    javascript: { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500" },
    react: { name: "React", icon: <FaReact />, color: "text-blue-500" },
    python: { name: "Python", icon: <FaPython />, color: "text-green-500" },
    nextjs: { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800" },
    nodejs: { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    sql: { name: "SQL", icon: <FaDatabase />, color: "text-blue-400" },
    dsa: { name: "DSA", icon: <div className="text-lg font-bold">DSA</div>, color: "text-purple-500" },
    flutter: { name: "Flutter", icon: <SiFlutter />, color: "text-blue-300" },
    angular: { name: "Angular", icon: <SiAngular />, color: "text-red-500" },
    expressjs: { name: "Express.js", icon: <SiExpress />, color: "text-gray-600" },
    html: { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    css: { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-400" },
    bootstrap: { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" }
  }

  const getSkillCount = (skillName) => {
    return questions.filter(q => q.skill === skillName).length
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full fade-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Configure Your <span className="text-primary">Assessment</span>
          </h1>
          <p className="text-gray">
            Select your skill and choose the number of questions (1-{maxQuestions})
          </p>
        </div>

        <div className="bg-card-bg rounded-2xl p-6 md:p-8 shadow-lg border border-card-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Assessment Setup</h2>
              <p className="text-gray text-sm">Customize your test parameters</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Skill Selection */}
            <div>
              <label className="block text-sm font-medium mb-4">
                Select Skill to Assess
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Object.entries(skillData).map(([skillKey, skillInfo]) => {
                  const count = getSkillCount(skillKey)
                  return (
                    <button
                      key={skillKey}
                      type="button"
                      onClick={() => setSkill(skillKey)}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center ${
                        skill === skillKey
                          ? 'border-primary bg-primary/10'
                          : 'border-card-border hover:border-primary/50'
                      }`}
                    >
                      <div className={`text-2xl mb-2 ${skillInfo.color}`}>
                        {skillInfo.icon}
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-sm">{skillInfo.name}</div>
                        <div className="text-xs text-gray mt-1">
                          {count} questions
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Selected Skill Info */}
            <div className="bg-dark-gray/30 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`text-2xl ${skillData[skill].color}`}>
                    {skillData[skill].icon}
                  </div>
                  <div>
                    <div className="font-semibold">{skillData[skill].name}</div>
                    <div className="text-sm text-gray">
                      {getSkillCount(skill)} questions available
                    </div>
                  </div>
                </div>
                <div className="text-sm text-accent font-medium">
                  Selected
                </div>
              </div>
            </div>

            {/* Question Count */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium">
                  Number of Questions
                </label>
                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-accent" />
                  <span className="text-accent">Max: {maxQuestions}</span>
                </div>
              </div>
              
              {/* Manual Input */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-dark-gray rounded-lg flex items-center justify-center">
                    <Hash className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray mb-1">Enter exact number:</div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="1"
                        max={maxQuestions}
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                        onBlur={handleInputBlur}
                        className="flex-1 bg-dark-gray border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder={`Enter 1-${maxQuestions}`}
                      />
                      <button
                        type="button"
                        onClick={() => handleQuickSelect(questionCount + 10)}
                        disabled={questionCount >= maxQuestions}
                        className="px-4 py-3 bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        +10
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickSelect(questionCount - 10)}
                        disabled={questionCount <= 1}
                        className="px-4 py-3 bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        -10
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Select Buttons */}
              <div className="mb-6">
                <div className="text-sm text-gray mb-3">Quick Select:</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[10, 25, 50, 100].map((count) => {
                    const isDisabled = count > maxQuestions
                    return (
                      <button
                        key={count}
                        type="button"
                        onClick={() => !isDisabled && handleQuickSelect(count)}
                        disabled={isDisabled}
                        className={`py-3 px-4 rounded-lg border-2 transition-all ${
                          isDisabled
                            ? 'border-card-border/30 bg-dark-gray/30 text-gray/50 cursor-not-allowed'
                            : questionCount === count
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-card-border hover:border-primary/50'
                        }`}
                      >
                        {count}
                        {isDisabled && ' (Max)'}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Range Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray">Drag to select:</div>
                  <div className="text-lg font-semibold bg-primary/10 text-primary px-3 py-1 rounded-lg">
                    {questionCount} {questionCount === 1 ? 'question' : 'questions'}
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max={maxQuestions}
                  value={questionCount}
                  onChange={(e) => handleSliderChange(e.target.value)}
                  className="w-full h-2 bg-dark-gray rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
                />
                <div className="flex justify-between text-xs text-gray mt-2">
                  <span>1</span>
                  <span>{Math.floor(maxQuestions * 0.25)}</span>
                  <span>{Math.floor(maxQuestions * 0.5)}</span>
                  <span>{Math.floor(maxQuestions * 0.75)}</span>
                  <span>{maxQuestions}</span>
                </div>
              </div>
            </div>

            {/* Distribution Preview */}
            <div className="bg-dark-gray/50 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-accent" />
                <div className="font-medium">Smart Difficulty Distribution</div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-secondary">Beginner: {distribution.beginner}</span>
                    <span>30%</span>
                  </div>
                  <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary rounded-full transition-all duration-500"
                      style={{ width: `${(distribution.beginner / questionCount) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-accent">Medium: {distribution.medium}</span>
                    <span>30%</span>
                  </div>
                  <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${(distribution.medium / questionCount) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-primary">Hard: {distribution.hard}</span>
                    <span>40%</span>
                  </div>
                  <div className="h-2 bg-dark-gray rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${(distribution.hard / questionCount) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-dark-gray/30 p-4 rounded-lg border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-primary">i</span>
                </div>
                <div className="text-sm text-gray">
                  <p className="font-medium text-light mb-1">Note:</p>
                  <p>There are {maxQuestions} questions available for {skillData[skill].name}. 
                  If you select more than available, the system will use all available questions.</p>
                </div>
              </div>
            </div> */}

            <button
              type="submit"
              disabled={isSubmitting || questionCount < 1 || questionCount > maxQuestions}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-gray cursor-wait'
                  : questionCount < 1 || questionCount > maxQuestions
                  ? 'bg-gray cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transform hover:-translate-y-0.5 shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating {Math.min(questionCount, maxQuestions)} Questions...
                </>
              ) : (
                `Start ${Math.min(questionCount, maxQuestions)} Question${Math.min(questionCount, maxQuestions) !== 1 ? 's' : ''} Assessment`
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Setup