import { useState } from 'react';
import data from '../../LessonsData';
import './styles.css';

type Level = 'A1' | 'A2' | 'B1' | 'B2';
type Type = 'Grammar' | 'Reading' | 'Vocabulary' | 'Listening';

interface Lesson {
  title: string;
  id: number;
}

export default function Lessons() {
  const [level, setLevel] = useState<Level>('A1');
  const [type, setType] = useState<Type>('Grammar');

  const lesson = data[level][type];

  return (
    <section style={{ height: '90vh' }} className="d-flex">
      <aside className="my-aside">
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setLevel(e.target.value as Level)
          }
          value={level}
          name="level"
          id="level"
        >
          <option value="A1">A1</option>
          <option value="A2">A2</option>
        </select>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setType(e.target.value as Type)
          }
          value={type}
          name="type"
          id="type"
        >
          <option value="Grammar">Grammar</option>
          <option value="Listening">Listening</option>
        </select>
      </aside>

      <div>
        {lesson &&
          lesson.map((info: Lesson) => (
            <div>
              <h2>{info.title}</h2>
              <p>{info.id}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
