import type { Lesson } from '../types';
import '../styles.css';

interface ResultType {
  showResult: boolean;
  result: number;
  allExercises: number;
}

interface Props {
  data: Lesson;
  setResult: (state: ResultType) => void;
}

export default function Embedded({ data, setResult }: Props) {
  return (
    <div className="embedded-wordwall">
      <iframe
        style={{ maxWidth: '100%' }}
        src={data.exercises.wordwall[0].link}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
