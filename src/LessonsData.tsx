type Level = 'A1' | 'A2' | 'B1' | 'B2';
type Type = 'Grammar' | 'Reading' | 'Vocabulary' | 'Listening';

interface Lesson {
  title: string;
  id: number;
}

type LessonsData = Record<Level, Record<Type, Lesson[]>>;

const data: LessonsData = {
  A1: {
    Grammar: [
      { title: 'Present Simple Basics', id: 1 },
      { title: 'To Be: Affirmative', id: 2 },
    ],
    Reading: [
      { title: 'My Family', id: 3 },
      { title: 'Daily Routines', id: 4 },
    ],
    Vocabulary: [
      { title: 'Numbers 1-20', id: 5 },
      { title: 'Colors', id: 6 },
    ],
    Listening: [
      { title: 'Greetings Conversation', id: 7 },
      { title: 'Introducing Yourself', id: 8 },
    ],
  },
  A2: {
    Grammar: [
      { title: 'Past Simple Regular Verbs', id: 9 },
      { title: 'Past Simple Irregular Verbs', id: 10 },
    ],
    Reading: [
      { title: 'A Trip to the Market', id: 11 },
      { title: 'My Weekend Plans', id: 12 },
    ],
    Vocabulary: [
      { title: 'Food & Drinks', id: 13 },
      { title: 'Daily Activities', id: 14 },
    ],
    Listening: [
      { title: 'Ordering at a Cafe', id: 15 },
      { title: 'Talking about Hobbies', id: 16 },
    ],
  },
  B1: {
    Grammar: [
      { title: 'Present Perfect vs Past Simple', id: 17 },
      { title: 'Future Forms', id: 18 },
    ],
    Reading: [
      { title: 'A Short Story', id: 19 },
      { title: 'News Article', id: 20 },
    ],
    Vocabulary: [
      { title: 'Travel & Transportation', id: 21 },
      { title: 'Health & Fitness', id: 22 },
    ],
    Listening: [
      { title: 'Interview Conversation', id: 23 },
      { title: 'Radio Podcast', id: 24 },
    ],
  },
  B2: {
    Grammar: [
      { title: 'Conditional Sentences', id: 25 },
      { title: 'Reported Speech', id: 26 },
    ],
    Reading: [
      { title: 'Opinion Essay', id: 27 },
      { title: 'Scientific Article', id: 28 },
    ],
    Vocabulary: [
      { title: 'Business English', id: 29 },
      { title: 'Advanced Adjectives', id: 30 },
    ],
    Listening: [
      { title: 'Debate Recording', id: 31 },
      { title: 'Lecture Audio', id: 32 },
    ],
  },
};

export default data;
