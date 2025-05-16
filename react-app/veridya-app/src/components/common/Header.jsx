import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header className="app-header">
      <div className="container">
        <Link to="/" className="logo">
           <img src="../images/logo.jpg"
                 alt="Veridya - Certificados Digitais"
                 className="logo-img" />
        </Link>
        
        <nav className="main-nav">
           <Link to="/" style={{color: '#163828'}}>Home</Link>
          <Link to="/produtos" style={{color: '#DD7126'}}>Produtos</Link>
          <Link to="/sobre" style={{color: '#7C7F38'}}>Sobre</Link>
          <Link to="/contato" style={{color: '#163828'}}>Contato</Link>
        </nav>
        
        <div className="header-actions">
          {isAuthenticated ? (
            <Link to="/client/dashboard" className="client-area-btn">
              <FontAwesomeIcon icon={faUser} /> Área do Cliente
            </Link>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;