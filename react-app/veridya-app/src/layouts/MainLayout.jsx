import { Outlet, Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Home from '../pages/public/Home';
import Footer from '../components/common/Footer';

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}

export default MainLayout;