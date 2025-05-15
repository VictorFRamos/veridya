import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react';

function AppRouter() {
  const { isAuthenticated } = useContext(AuthContext);
  
  return (
    <BrowserRouter>
      <Routes>
        {/* {isAuthenticated ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : ( */}
          <Route path="/*" element={<PublicRoutes />} />
        {/* )} */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;