export type Level = 'A1' | 'A2' | 'B1' | 'B2';
export type Type = 'Grammar' | 'Reading' | 'Vocabulary' | 'Listening';
export type Id = string;

export interface Lesson {
  title: string;
  id: number;
  content: string;
  examples: string[];
  exercises: {
    question: string;
    type: 'text' | 'multipleChoice' | 'checkbox';
    options?: string[];
    answer: string;
  }[];
  exerciseInfo: string;
  audioUrl?: string;
  videoUrl?: string;
  tips?: string[];
  links?: { text: string; url: string }[];
}

export type LessonsData = Record<Level, Record<Type, Record<Id, Lesson>>>;
