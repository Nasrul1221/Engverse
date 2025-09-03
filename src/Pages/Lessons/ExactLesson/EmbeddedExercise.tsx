import type { Lesson } from '../types';
import '../styles.css';

interface Props {
  data: Lesson;
}

export default function Embedded({ data }: Props) {
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
