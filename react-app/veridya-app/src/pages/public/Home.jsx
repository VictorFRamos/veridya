import { useEffect, useState } from 'react';
import { fetchFeaturedProducts } from '../../services/productService';
import ProductCard from '../../components/common/ProductCard';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Carousel from '../../components/common/Carousel';
import '../../styles/main.css';

function Home() {
   const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dados do carrossel
  const carouselSlides = [
    {
      image: "../images/Certificado-A1-e-Certificado-A3-para-e-CPF-e-e-CNPJ.jpg",
      alt: "Certificado Digital A1",
      title: "Certificado Digital A1",
      description: "Validade de 1 ano, instalação simples no computador",
      link: "#compre",
      buttonText: "Saiba Mais",
      buttonColor: "7C7F38"
    },
    {
      image: "../images/banner_quem_somos.jpg",
      alt: "Certificado Digital A3",
      title: "Certificado Digital A3",
      description: "Validade de 3 anos, maior segurança com token",
      link: "#compre",
      buttonText: "Saiba Mais",
      buttonColor: "DD7126"
    }
  ];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchFeaturedProducts();
        setFeaturedProducts(products);
      } catch (err) {
        setError("Erro ao carregar produtos. Tente novamente mais tarde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    
    <div className="home-page">
       <Header />
  <Carousel slides={carouselSlides} />

<section id="compre" className="buy-section">
    <div className="container">
        <h2 className="text-163828">Compre seu Certificado Digital</h2>
        <div className="buy-options">
            <div className="buy-card">
                <i className="fas fa-certificate text-7C7F38"></i>
                <h3>Novo Certificado</h3>
                <p>Adquira seu primeiro certificado digital com toda segurança Veridya</p>
                <a href="#mais-vendidos" className="btn bg-7C7F38">Comprar</a>
            </div>
            <div className="buy-card">
                <i className="fas fa-redo bg-DD7126"></i>
                <h3>Renovar Certificado</h3>
                <p>Renove seu certificado digital com condições especiais</p>
                <a href="#renovar" className="btn bg-DD7126">Renovar</a>
            </div>
            <div className="buy-card">
                <i className="fas fa-question-circle text-163828" ></i>
                <h3>Precisa de Ajuda?</h3>
                <p>Nossa equipe está pronta para te ajudar na escolha do certificado ideal</p>
                <a href="#contato" className="btn bg-163828">Falar com Especialista</a>
            </div>
        </div>
    </div>
</section>
<section id="mais-vendidos" className="featured-products">
        <div className="container">
          <h2 className="text-DD7126">Certificados Mais Vendidos</h2>
          
          {loading ? (
            <div className="loading-message">Carregando produtos...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="product-grid">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer/>
</div>
  );
}

export default Home;