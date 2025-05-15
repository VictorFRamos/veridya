import { Routes, Route } from 'react-router-dom';
import Home from '../pages/public/Home';
import ProductList from '../pages/public/ProductList';
import ProductDetail from '../pages/public/ProductDetail';
// import Login from '../pages/public/Login';
// import Register from '../pages/public/Register';
// import ForgotPassword from '../pages/public/ForgotPassword';
import MainLayout from '../layouts/MainLayout';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="produtos" element={<ProductList />} />
        <Route path="produto/:id" element={<ProductDetail />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route path="recuperar-senha" element={<ForgotPassword />}  /> */}
      </Route>
    </Routes>
  );
}

export default PublicRoutes;