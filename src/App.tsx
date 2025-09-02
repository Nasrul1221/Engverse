import { useRoutes } from 'react-router-dom';
import SharedLayout from './Layout/SharedLayout';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile';
import Lessons from './Pages/Lessons/Lessons';
import LessonPage from './Pages/Lessons/ExactLesson/LessonPage';
import ExercisePage from './Pages/Lessons/ExactLesson/ExercisePage';
import Lesson from './Pages/Lessons/ExactLesson/Lesson';
import Result from './Pages/Result';

export default function App() {
  const router = useRoutes([
    {
      path: '/',
      element: <SharedLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/lessons',
          element: <Lessons />,
        },
        {
          path: '/lessons/:level/:type/:id',
          element: <Lesson />,
          children: [
            {
              index: true,
              element: <LessonPage />,
            },
            {
              path: 'exercises',
              element: <ExercisePage />,
            },
          ],
        },
        {
          path: '/result',
          element: <Result />,
        },
      ],
    },
  ]);
  return router;
}
