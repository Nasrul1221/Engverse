import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Styles/SLStyles.css';

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <div className="my-padding">
        <Outlet />
      </div>
    </div>
  );
}
