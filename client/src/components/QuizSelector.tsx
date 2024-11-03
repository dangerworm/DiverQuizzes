import React from 'react';

interface QuizInfo {
  id: string;
  title: string;
  description: string;
}

interface QuizSelectorProps {
  quizzes: QuizInfo[];
  onQuizSelect: (quizId: string) => void;
}

const QuizSelector: React.FC<QuizSelectorProps> = ({ quizzes, onQuizSelect }) => {
  return (
    <div className="quiz-selector">
      <h1>BSAC Ocean Diver Knowledge Reviews</h1>
      <div className="quiz-grid">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-selector-card" onClick={() => onQuizSelect(quiz.id)}>
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
            <button className="start-button">Start Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSelector; 