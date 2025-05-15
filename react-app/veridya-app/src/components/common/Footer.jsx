import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css'; // Arquivo de estilos específico

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Seção de links rápidos */}
        <div className="footer-section">
          <h3 className="footer-title">Veridya</h3>
          <ul className="footer-links">
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/termos">Termos de Serviço</Link></li>
            <li><Link to="/privacidade">Política de Privacidade</Link></li>
          </ul>
        </div>

        {/* Seção de certificados */}
        <div className="footer-section">
          <h3 className="footer-title">Certificados</h3>
          <ul className="footer-links">
            <li><Link to="/produtos/a1">Certificado A1</Link></li>
            <li><Link to="/produtos/a3">Certificado A3</Link></li>
            <li><Link to="/produtos/empresarial">Para Empresas</Link></li>
            <li><Link to="/produtos/pessoa-fisica">Para Pessoa Física</Link></li>
          </ul>
        </div>

        {/* Seção de contato */}
        <div className="footer-section">
          <h3 className="footer-title">Contato</h3>
          <address className="footer-contact">
            <p>contato@veridya.com.br</p>
            <p>(11) 1234-5678</p>
            <p>Av. Paulista, 1000 - São Paulo/SP</p>
          </address>
        </div>

        {/* Redes sociais */}
        <div className="footer-section social-section">
          <h3 className="footer-title">Redes Sociais</h3>
          <div className="social-icons">
            <a href="https://facebook.com/veridya" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://instagram.com/veridya" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://linkedin.com/company/veridya" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://wa.me/551112345678" aria-label="WhatsApp">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Veridya Certificados Digitais. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;