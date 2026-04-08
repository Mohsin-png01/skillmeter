export function generateQuiz(allQuestions, skill, total) {
  // Filter questions by selected skill
  const filtered = allQuestions.filter(q => q.skill === skill);
  
  // Normalize level names and group questions
  const questionsByLevel = {
    beginner: [],
    intermediate: [],
    advanced: []
  };
  
  filtered.forEach(q => {
    let normalizedLevel = q.level;
    if (q.level === 'medium') normalizedLevel = 'intermediate';
    if (q.level === 'hard') normalizedLevel = 'advanced';
    
    questionsByLevel[normalizedLevel].push(q);
  });
  
  // Shuffle each difficulty level
  Object.keys(questionsByLevel).forEach(level => {
    questionsByLevel[level] = shuffle(questionsByLevel[level]);
  });
  
  // Intelligently distribute questions based on available questions
  const totalAvailable = filtered.length;
  
  if (totalAvailable <= total) {
    // If we don't have enough questions, return all
    return shuffle(filtered).slice(0, total);
  }
  
  // Calculate ideal distribution: 30% beginner, 30% intermediate, 40% advanced
  let beginnerCount = Math.floor(total * 0.3);
  let intermediateCount = Math.floor(total * 0.3);
  let advancedCount = total - beginnerCount - intermediateCount;
  
  // Adjust distribution based on available questions
  const beginnerAvail = questionsByLevel.beginner.length;
  const intermediateAvail = questionsByLevel.intermediate.length;
  const advancedAvail = questionsByLevel.advanced.length;
  
  // If a level doesn't have enough, take what's available
  beginnerCount = Math.min(beginnerCount, beginnerAvail);
  intermediateCount = Math.min(intermediateCount, intermediateAvail);
  advancedCount = Math.min(advancedCount, advancedAvail);
  
  let totalSelected = beginnerCount + intermediateCount + advancedCount;
  
  // If we still need more questions, fill from available
  if (totalSelected < total) {
    let remaining = total - totalSelected;
    const allLevels = ['advanced', 'intermediate', 'beginner'];
    
    for (const level of allLevels) {
      const available = questionsByLevel[level].length;
      const taken = { beginner: beginnerCount, intermediate: intermediateCount, advanced: advancedCount }[level];
      const canTake = Math.min(remaining, available - taken);
      
      if (canTake > 0) {
        if (level === 'beginner') beginnerCount += canTake;
        else if (level === 'intermediate') intermediateCount += canTake;
        else advancedCount += canTake;
        
        totalSelected += canTake;
        remaining -= canTake;
      }
      
      if (totalSelected >= total) break;
    }
  }
  
  // Combine and return final quiz
  const quizQuestions = [
    ...questionsByLevel.beginner.slice(0, beginnerCount),
    ...questionsByLevel.intermediate.slice(0, intermediateCount),
    ...questionsByLevel.advanced.slice(0, advancedCount)
  ];
  
  return shuffle(quizQuestions).slice(0, total);
}

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Calculate score based on difficulty
export function calculateScore(questions, answers) {
  let score = 0;
  let correctCount = 0;
  
  questions.forEach((question, index) => {
    const userAnswer = answers[index];
    
    if (userAnswer && userAnswer.trim() === question.answer.trim()) {
      correctCount++;
      
      // Normalize level names for scoring
      const level = question.level === "medium" ? "intermediate" : 
                    question.level === "hard" ? "advanced" : 
                    question.level;
      
      // Weighted scoring
      if (level === "beginner") {
        score += 1;
      } else if (level === "intermediate") {
        score += 2;
      } else if (level === "advanced") { // hard or advanced
        score += 3;
      }
    }
  });
  
  return { score, correctCount };
}

// Get difficulty breakdown
export function getDifficultyStats(questions, answers) {
  const stats = {
    beginner: { total: 0, correct: 0 },
    intermediate: { total: 0, correct: 0 },
    advanced: { total: 0, correct: 0 }
  };
  
  questions.forEach((question, index) => {
    const userAnswer = answers[index];
    
    // Normalize level names
    let normalizedLevel = question.level;
    if (question.level === "medium") normalizedLevel = "intermediate";
    if (question.level === "hard") normalizedLevel = "advanced";
    
    // Initialize if not exists (for backward compatibility)
    if (!stats[normalizedLevel]) {
      stats[normalizedLevel] = { total: 0, correct: 0 };
    }
    
    stats[normalizedLevel].total++;
    
    if (userAnswer && userAnswer.trim() === question.answer.trim()) {
      stats[normalizedLevel].correct++;
    }
  });
  
  return stats;
}