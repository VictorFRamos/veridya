import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById }from '../../services/productService';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import '../../styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (err) {
        setError('Erro ao carregar detalhes do produto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleBuyClick = () => {
    navigate(`/checkout/${id}`);
  };

  if (loading) {
    return(  <div className="product-detail-page">
       <Header />
       <div className="loading-container">Carregando...</div>
        <Footer />
      </div>
     );
  }

  if (error) {
    return(  <div className="product-detail-page">
       <Header />
       <div className="error-container">{error}</div>
        <Footer />
      </div>
     );
  }
  

  if (!product) {
     return(  <div className="product-detail-page">
       <Header />
       <div className="not-found">Produto não encontrado</div>
        <Footer />
      </div>
     );
  }

  return (
    <div className="product-detail-page">
      <Header />
      
      <main className="container product-detail-container">
        <div className="product-image">
          <img 
            src={product.image} 
            alt={product.title} 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500x300?text=Certificado+Veridya';
            }}
          />
        </div>
        
        <div className="product-info">
          <h1>{product.title}</h1>
          
          <div className="product-pricing">
            <p className="price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
            <div className="installments">
              <p>{product.installments}</p>
            </div>
          </div>

          {product.isOnSale && (
            <div className="product-promo">
              <div className="promo-badge">PROMOÇÃO</div>
              <p className="original-price">
                De: R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </p>
            </div>
          )}

          <p className="description">{product.description}</p>
          
          <button 
            className="btn buy-button" 
            style={{ backgroundColor: '#7C7F38' }}
            onClick={handleBuyClick}
          >
            Comprar Agora
          </button>

          <div className="specs">
            <h3 style={{ color: '#163828' }}>Especificações Técnicas</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Tipo:</span>
                <span className="spec-value">{product.type}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Categoria:</span>
                <span className="spec-value">{product.category}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Validade:</span>
                <span className="spec-value">{product.validity}</span>
              </div>
            </div>
          </div>

          <div className="features">
            <h3 style={{ color: '#7C7F38' }}>Características:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default ProductDetail;