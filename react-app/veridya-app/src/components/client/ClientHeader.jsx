import { Link } from 'react-router-dom';

function ClientHeader() {
  return (
    <header className="client-header">
      <div className="client-header-container">
        <Link to="/client/dashboard" className="client-logo">
          <img 
            src="/assets/images/veridya-logo-white.png" 
            alt="Veridya Área do Cliente" 
          />
          <span>Área do Cliente</span>
        </Link>
      </div>
    </header>
  );
}

export default ClientHeader;