import React from 'react';
import { Question } from '../types/Quiz';

interface QuizResultsProps {
  questions: Question[];
  userAnswers: number[][];
  onRestartQuiz: () => void;
  onBackToCourse: () => void;
  courseType: string;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  questions,
  userAnswers,
  onRestartQuiz,
  onBackToCourse,
  courseType,
}) => {
  const correctAnswers = questions.reduce((count, question, index) => {
    const userAnswerSet = new Set(userAnswers[index]);
    const correctAnswerSet = new Set(question.correctAnswerIds);
    
    if (question.isMultipleChoice) {
      const isCorrect = 
        question.correctAnswerIds.every(id => userAnswerSet.has(id)) &&
        userAnswers[index].every(id => correctAnswerSet.has(id));
      return count + (isCorrect ? 1 : 0);
    } else {
      return count + (userAnswerSet.has(question.correctAnswerIds[0]) ? 1 : 0);
    }
  }, 0);

  return (
    <div className="quiz-results">
      <div className="navigation-buttons">
        <button className="back-button" onClick={onBackToCourse}>
          ← Back to {courseType === 'ocean-diver' ? 'Ocean Diver' : 'Sports Diver'} Quizzes
        </button>
      </div>

      <h2>Quiz Complete!</h2>
      <div className="score">
        Score: {correctAnswers} / {questions.length}
        ({Math.round((correctAnswers / questions.length) * 100)}%)
      </div>
      
      <div className="results-breakdown">
        {questions.map((question, index) => {
          const userAnswerSet = new Set(userAnswers[index]);
          const correctAnswerSet = new Set(question.correctAnswerIds);
          const isCorrect = question.isMultipleChoice
            ? question.correctAnswerIds.every(id => userAnswerSet.has(id)) &&
              userAnswers[index].every(id => correctAnswerSet.has(id))
            : userAnswerSet.has(question.correctAnswerIds[0]);

          return (
            <div
              key={question.id}
              className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}
            >
              <p className="question-text">{question.text}</p>
              <p className="your-answer">
                Your answer{userAnswers[index].length > 1 ? 's' : ''}: {
                  userAnswers[index]
                    .map(id => question.answers.find(a => a.id === id)?.text)
                    .filter(Boolean)
                    .join(', ') || 'Not answered'
                }
              </p>
              <p className="correct-answer">
                Correct answer{question.correctAnswerIds.length > 1 ? 's' : ''}: {
                  question.correctAnswerIds
                    .map(id => question.answers.find(a => a.id === id)?.text)
                    .join(', ')
                }
              </p>
            </div>
          );
        })}
      </div>
      
      <div className="navigation-buttons">
        <button className="back-button" onClick={onBackToCourse}>
          ← Back to {courseType === 'ocean-diver' ? 'Ocean Diver' : 'Sports Diver'} Quizzes
        </button>
      </div>
    </div>
  );
};

export default QuizResults; 