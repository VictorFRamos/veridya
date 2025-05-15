import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import ClientHeader from '../components/client/ClientHeader';

function ClientLayout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="client-layout">
      <ClientHeader />
      
      <div className="client-container">
        <aside className="client-sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/client/dashboard">
                  <i className="fas fa-home"></i> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/client/certificates">
                  <i className="fas fa-certificate"></i> Meus Certificados
                </Link>
              </li>
              <li>
                <Link to="/client/invoices">
                  <i className="fas fa-file-invoice"></i> Meus Comprovantes
                </Link>
              </li>
              <li>
                <Link to="/client/settings">
                  <i className="fas fa-cog"></i> Configurações
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  <i className="fas fa-sign-out-alt"></i> Sair
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main className="client-main-content">
          <Outlet /> {/* Aqui serão renderizadas as páginas da área do cliente */}
        </main>
      </div>
    </div>
  );
}

export default ClientLayout;