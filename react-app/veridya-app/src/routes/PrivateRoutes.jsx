import { Outlet } from 'react-router-dom';
import ClientLayout from '../layouts/ClientLayout';

function PrivateRoutes() {
  return (
    <ClientLayout>
      <Outlet />
    </ClientLayout>
  );
}

export default PrivateRoutes;