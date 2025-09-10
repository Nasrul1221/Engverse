import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Styles/SLStyles.css';

export default function SharedLayout() {
  return (
    <div>
      <Header />

      <div style={{ minHeight: '90vh' }} className="my-padding">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
