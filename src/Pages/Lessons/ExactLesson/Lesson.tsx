import { Link, Outlet } from 'react-router-dom';
import '../styles.css';
import { useState } from 'react';

export default function Lesson() {
  const [active, setActive] = useState<'lesson' | 'exercises'>('lesson');
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-3 gap-3">
        <Link
          to="."
          className={`btn ${active === 'lesson' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setActive('lesson')}
        >
          Lesson
        </Link>
        <Link
          className={`btn ${active === 'exercises' ? 'btn-primary' : 'btn-outline-primary'}`}
          to="exercises"
          onClick={() => setActive('exercises')}
        >
          Exercises
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
