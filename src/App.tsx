import { useRoutes } from 'react-router-dom';
import SharedLayout from './Layout/SharedLayout';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile';
import Lessons from './Pages/Lessons/Lessons';
import Lesson from './Pages/Lessons/Lesson';

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
        },
      ],
    },
  ]);
  return router;
}
