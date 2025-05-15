import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Certificados Digitais Verificáveis</h1>
        <p>Segurança e praticidade para suas transações digitais</p>
        <div className="hero-buttons">
          <Link to="/produtos" className="btn primary-btn">
            Conheça Nossos Produtos
          </Link>
          <Link to="/sobre" className="btn secondary-btn">
            Saiba Mais
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;