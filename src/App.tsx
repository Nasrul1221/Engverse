import { useRoutes } from 'react-router-dom';
import SharedLayout from './Layout/SharedLayout';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile';

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
      ],
    },
  ]);
  return router;
}
