import React from "react";
import { Question } from "../types/Quiz";
import { motion, AnimatePresence } from "framer-motion";

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswers: number[];
  onAnswerSelect: (answerId: number) => void;
  direction: number;
  showFeedback: boolean;
  onTryAgain: () => void;
  onContinue: () => void;
  correctAnswers: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswers,
  onAnswerSelect,
  direction,
  showFeedback,
  onTryAgain,
  onContinue,
  correctAnswers,
}) => {
  const isAnswerSelected = (answerId: number): boolean => {
    return selectedAnswers.includes(answerId);
  };

  const getAnswerClassName = (answerId: number): string => {
    const baseClass = "answer-button";
    const isSelected = isAnswerSelected(answerId);

    if (!showFeedback) {
      return `${baseClass}${isSelected ? " selected" : ""}`;
    }

    return `${baseClass}${isSelected ? " incorrect" : ""}`;
  };

  // Calculate current score percentage (only for answered questions)
  const currentScore =
    currentIndex > 0 ? Math.round((correctAnswers / currentIndex) * 100) : 0;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction < 0 ? 1000 : -1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="quiz-card"
      >
        <div className="quiz-progress">
          <div className="question-counter">
            Question {currentIndex + 1} of {totalQuestions}
          </div>
          {currentIndex > 0 && (
            <div className="score-counter">Score: {currentScore}%</div>
          )}
        </div>
        <h2 className="question-text">{question.text}</h2>
        {question.isMultipleChoice && (
          <p className="multiple-choice-hint">Select all that apply</p>
        )}
        <div className="answers-container">
          {question.answers.map((answer) => (
            <button
              key={answer.id}
              className={getAnswerClassName(answer.id)}
              onClick={() => !showFeedback && onAnswerSelect(answer.id)}
              disabled={showFeedback}
            >
              {answer.text.includes("<img") ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: answer.text.replace(
                      /src="([^"]+)"/,
                      `src="${process.env.PUBLIC_URL}/images/$1"`
                    ).replace(
                      /title=".+" /,
                      ""
                    ),
                  }}
                />
              ) : (
                answer.text
              )}
            </button>
          ))}
        </div>
        {showFeedback && (
          <div className="feedback-message">
            <p>
              {question.isMultipleChoice
                ? "That's not the correct combination. Would you like to try again?"
                : "That's not correct. Would you like to try again?"}
            </p>
            <div className="feedback-buttons">
              <button className="nav-button" onClick={onTryAgain}>
                Try Again
              </button>
              <button className="nav-button" onClick={onContinue}>
                Continue Anyway
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizCard;
