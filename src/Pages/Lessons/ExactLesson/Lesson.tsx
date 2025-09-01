import { NavLink, Outlet } from 'react-router-dom';
import '../styles.css';

export default function Lesson() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-3 gap-3">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive ? 'btn btn-primary' : 'btn btn-outline-primary'
          }
        >
          Lesson
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'btn btn-primary' : 'btn btn-outline-primary'
          }
          to="exercises"
        >
          Exercises
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
