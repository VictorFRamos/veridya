import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Home from '../pages/public/Home';

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