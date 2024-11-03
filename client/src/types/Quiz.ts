export interface Answer {
  id: number;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
  correctAnswerIds: number[];
  isMultipleChoice?: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
} 