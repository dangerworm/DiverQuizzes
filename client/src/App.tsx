import React, { useState, useEffect } from 'react';
import { Quiz, Question, Answer } from './types/Quiz';
import QuizCard from './components/QuizCard';
import QuizResults from './components/QuizResults';
import QuizSelector from './components/QuizSelector';
import CourseSelector from './components/CourseSelector';
import './App.css';

interface RandomizedAnswer extends Answer {
  id: number;
  text: string;
}

function isAllOfTheAboveAnswer(text: string): boolean {
  const phrases = [
    'all of the above',
    'all of these',
    'all of these will be needed',
    'all of these are correct'
  ];
  return phrases.some(phrase => text.toLowerCase().includes(phrase));
}

const App: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[][]>([]);
  const [direction, setDirection] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [randomizedAnswers, setRandomizedAnswers] = useState<RandomizedAnswer[][]>([]);

  useEffect(() => {
    const loadQuizzes = async () => {
      try {
        setIsLoading(true);
        const quizIds = {
          'ocean-diver': ['ot1', 'ot2', 'ot3', 'ot4', 'ot5', 'ot6', 'ot7'],
          'sports-diver': ['st1', 'st2', 'st3', 'st4', 'st5', 'st6']
        };
        
        const allQuizzes = await Promise.all(
          Object.values(quizIds).flat().map(async (id) => {
            const response = await fetch(`${process.env.PUBLIC_URL}/quizzes/${id}.json`);
            if (!response.ok) {
              throw new Error(`Failed to load quiz ${id}`);
            }
            return response.json();
          })
        );
        setQuizzes(allQuizzes);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadQuizzes();
  }, []);

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
    setSelectedQuiz(null);
  };

  const handleQuizSelect = async (quizId: string) => {
    const selectedQuiz = quizzes.find(quiz => quiz.id === quizId);
    if (selectedQuiz) {
      const shuffledQuestions = shuffleArray(selectedQuiz.questions);
      
      // Randomize answers for each question, keeping "all of the above" last
      const shuffledAnswers = shuffledQuestions.map(question => {
        const regularAnswers = question.answers.filter(a => !isAllOfTheAboveAnswer(a.text));
        const allOfAboveAnswer = question.answers.find(a => isAllOfTheAboveAnswer(a.text));
        
        const shuffledRegularAnswers = shuffleArray(regularAnswers.map(answer => ({
          ...answer,
          id: answer.id,
          text: answer.text
        })));

        // If "all of the above" exists, append it to the end
        return allOfAboveAnswer 
          ? [...shuffledRegularAnswers, {
              ...allOfAboveAnswer,
              id: allOfAboveAnswer.id,
              text: allOfAboveAnswer.text
            }]
          : shuffledRegularAnswers;
      });

      setSelectedQuiz(selectedQuiz);
      setRandomizedQuestions(shuffledQuestions);
      setRandomizedAnswers(shuffledAnswers);
      setUserAnswers(new Array(selectedQuiz.questions.length).fill(null).map(() => []));
      setCurrentQuestionIndex(0);
      setIsComplete(false);
      setDirection(0);
      setCorrectAnswers(0);
    }
  };

  const handleAnswerSelect = (answerId: number) => {
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      const currentAnswers = [...(newAnswers[currentQuestionIndex] || [])];
      const answer = randomizedAnswers[currentQuestionIndex].find(a => a.id === answerId);
      if (!answer) return prev;
      
      if (randomizedQuestions[currentQuestionIndex].isMultipleChoice) {
        // For multiple choice, toggle the answer
        const answerIndex = currentAnswers.indexOf(answer.id);
        if (answerIndex === -1) {
          currentAnswers.push(answer.id);
        } else {
          currentAnswers.splice(answerIndex, 1);
        }
      } else {
        // For single choice, replace the answer
        currentAnswers.length = 0;
        currentAnswers.push(answer.id);
      }
      
      newAnswers[currentQuestionIndex] = currentAnswers;
      return newAnswers;
    });
  };

  const checkAnswer = (answers: number[], question: Question): boolean => {
    const userAnswerSet = new Set(answers);
    const correctAnswerSet = new Set(question.correctAnswerIds);
    
    if (question.isMultipleChoice) {
      return question.correctAnswerIds.every((id: number) => userAnswerSet.has(id)) &&
             answers.every((id: number) => correctAnswerSet.has(id));
    } else {
      return userAnswerSet.has(question.correctAnswerIds[0]);
    }
  };

  const handleNext = () => {
    if (!selectedQuiz) return;
    
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    const currentAnswers = userAnswers[currentQuestionIndex];
    const isCorrect = checkAnswer(currentAnswers, currentQuestion);

    if (!isCorrect && !showAnswerFeedback) {
      setShowAnswerFeedback(true);
      return;
    }

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }

    setShowAnswerFeedback(false);
    
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
      setDirection(1);
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setDirection(-1);
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestartQuiz = () => {
    setSelectedQuiz(null);
  };

  const handleBackToSelection = () => {
    if (window.confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
      setSelectedQuiz(null);
      setUserAnswers([]);
      setCurrentQuestionIndex(0);
      setIsComplete(false);
      setDirection(0);
    }
  };

  const handleBackToCourses = () => {
    if (selectedQuiz) {
      if (window.confirm('Are you sure you want to change courses? Your progress will be lost.')) {
        setSelectedCourse(null);
        setSelectedQuiz(null);
        setUserAnswers([]);
        setCurrentQuestionIndex(0);
        setIsComplete(false);
        setDirection(0);
      }
    } else {
      setSelectedCourse(null);
    }
  };

  const renderBrandHeader = () => (
    <div className="brand-header">
      <div className="brand-logos">
        <img 
          src={`${process.env.PUBLIC_URL}/musac-logo.jpg`}
          alt="MUSAC Logo" 
          className="musac-logo"
        />
        <img 
          src={`${process.env.PUBLIC_URL}/bsac-logo.png`}
          alt="BSAC Logo" 
          className="bsac-logo"
        />
      </div>
      <div className="brand-text">
        <h1 className="brand-title">MUSAC</h1>
        <p className="brand-subtitle">Manchester University Sub Aqua Club</p>
      </div>
    </div>
  );

  // Function to shuffle array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleTryAgain = () => {
    setShowAnswerFeedback(false);
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = [];
      return newAnswers;
    });
  };

  const renderBubbles = () => (
    <>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </>
  );

  if (isLoading) {
    return (
      <div className="app">
        {renderBubbles()}
        {renderBrandHeader()}
        <div className="app-content">
          <div className="loading">Loading quizzes...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        {renderBubbles()}
        {renderBrandHeader()}
        <div className="app-content">
          <div className="error">
            Error: {error}
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedCourse) {
    return (
      <div className="app">
        {renderBubbles()}
        {renderBrandHeader()}
        <div className="app-content">
          <CourseSelector onCourseSelect={handleCourseSelect} />
        </div>
      </div>
    );
  }

  if (!selectedQuiz) {
    const courseQuizzes = quizzes.filter(quiz => 
      selectedCourse === 'ocean-diver' ? quiz.id.startsWith('ot') : quiz.id.startsWith('st')
    );
    
    return (
      <div className="app">
        {renderBubbles()}
        {renderBrandHeader()}
        <div className="app-content">
          <button className="back-button" onClick={handleBackToCourses}>
            ← Back to Courses
          </button>
          <QuizSelector 
            quizzes={courseQuizzes}
            onQuizSelect={handleQuizSelect}
          />
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="app">
        {renderBubbles()}
        {renderBrandHeader()}
        <div className="app-content">
          <QuizResults
            questions={randomizedQuestions}
            userAnswers={userAnswers}
            onRestartQuiz={handleRestartQuiz}
            onBackToCourse={() => setSelectedQuiz(null)}
            courseType={selectedCourse || 'ocean-diver'}
          />
        </div>
      </div>
    );
  }

  const currentAnswers = userAnswers[currentQuestionIndex] || [];
  const isAnswered = currentAnswers.length > 0;

  return (
    <div className="app">
      {renderBubbles()}
      {renderBrandHeader()}
      <div className="app-content">
        <div className="quiz-header">
          <button className="back-button" onClick={handleBackToSelection}>
            ← Back to Quiz Selection
          </button>
          <h1>{selectedQuiz.title}</h1>
          <p className="description">{selectedQuiz.description}</p>
        </div>

        <QuizCard
          question={{
            ...randomizedQuestions[currentQuestionIndex],
            answers: randomizedAnswers[currentQuestionIndex]
          }}
          currentIndex={currentQuestionIndex}
          totalQuestions={randomizedQuestions.length}
          selectedAnswers={currentAnswers}
          onAnswerSelect={handleAnswerSelect}
          direction={direction}
          showFeedback={showAnswerFeedback}
          onTryAgain={handleTryAgain}
          onContinue={handleNext}
          correctAnswers={correctAnswers}
        />

        <div className="navigation-buttons">
          <button
            className="nav-button"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          {!showAnswerFeedback && (
            <button
              className="nav-button"
              onClick={handleNext}
              disabled={!isAnswered}
            >
              {currentQuestionIndex === randomizedQuestions.length - 1 ? 'Finish' : 'Next'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App; 