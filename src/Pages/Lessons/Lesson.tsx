import './styles.css';
import myData from '../../data.json';
import { useParams } from 'react-router-dom';

type Level = 'A1' | 'A2' | 'B1' | 'B2';
type Type = 'Grammar' | 'Reading' | 'Vocabulary' | 'Listening';
type Id = string;

interface Lesson {
  title: string;
  id: number;
  content: string;
  examples?: string[];
  exercises?: {
    question: string;
    type: 'text' | 'multipleChoice' | 'checkbox';
    options?: string[];
    answer?: string | string[];
  }[];
  audioUrl?: string;
  videoUrl?: string;
  tips?: string[];
  links?: { text: string; url: string }[];
}

type LessonsData = Record<Level, Record<Type, Record<Id, Lesson>>>;

const data: LessonsData = myData;
console.log(data);

export default function Lesson() {
  const { level, type, id } = useParams<{
    level: Level;
    type: Type;
    id: Id;
  }>();

  if (!level || !type || !id) {
    return <div>Invalid params</div>;
  }

  const lesson: Lesson = data[level][type][id];

  return (
    <div style={{ height: '90vh' }} className="p-3">
      <h1>{lesson.title}</h1>
    </div>
  );
}
