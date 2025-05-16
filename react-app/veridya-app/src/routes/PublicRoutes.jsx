import { Routes, Route } from 'react-router-dom';
import Home from '../pages/public/Home';
import ProductList from '../pages/public/ProductList';
import ProductDetail from '../pages/public/ProductDetail';
import Checkout from '../pages/public/Checkout';
import Invoice from '../pages/public/Invoice';
// import Login from '../pages/public/Login';
// import Register from '../pages/public/Register';
// import ForgotPassword from '../pages/public/ForgotPassword';

function PublicRoutes() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="produtos" element={<ProductList />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/invoice/:id" element={<Invoice />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route path="recuperar-senha" element={<ForgotPassword />}  /> */}
    </Routes>
  );
}

export default PublicRoutes;