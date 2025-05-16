import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQrcode, 
  faCreditCard, 
  faCopy,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { fetchProductById } from '../../services/productService';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import '../../styles/checkout.css';

function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('pix');
  const [installments, setInstallments] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (err) {
        setError('Erro ao carregar informações do produto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInstallmentChange = (e) => {
    setInstallments(parseInt(e.target.value));
  };

  const handleCopyPixCode = () => {
    navigator.clipboard.writeText('contato@veridya.com');
    alert('Chave PIX copiada para a área de transferência!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/invoice/${id}`);
  };

  const calculateInstallment = () => {
    if (!product) return 'R$ 0,00';
    const value = (product.price / installments).toFixed(2);
    return `R$ ${value.replace('.', ',')}`;
  };

  if (loading) {
     return(<div className="checkout-page">
       <Header />
       <div className="loading-container"> <p>Carregando informações do produto...</p></div>
        <Footer />
      </div>
     );
  }

  if (error) {

     return(<div className="checkout-page">
       <Header />
        <div className="error-container">
        <p>{error}</p>
        <button onClick={() => navigate(-1)} className="btn back-button">
          <FontAwesomeIcon icon={faArrowLeft} /> Voltar
        </button>
      </div>
        <Footer />
      </div>
     );
  }

  if (!product) {

      return(<div className="checkout-page">
       <Header />
      <div className="not-found">
        <p>Produto não encontrado</p>
        <button onClick={() => navigate('/')} className="btn back-button">
          <FontAwesomeIcon icon={faArrowLeft} /> Voltar à loja
        </button>
      </div>
        <Footer />
      </div>
     );
  }

  return (
    <div className="checkout-page">
      <Header />
      
      <main className="container checkout-container">
        <div className="checkout-steps">
          <div className={`step ${activeTab === 'pix' ? 'active' : ''}`}>
            <span>1</span>
            <p>Pagamento</p>
          </div>
          <div className={`step ${activeTab === 'review' ? 'active' : ''}`}>
            <span>2</span>
            <p>Revisão</p>
          </div>
          <div className={`step ${activeTab === 'confirmation' ? 'active' : ''}`}>
            <span>3</span>
            <p>Confirmação</p>
          </div>
        </div>

        <div className="checkout-grid">
          <div className="checkout-summary">
            <h2 className="text-163828">Resumo do Pedido</h2>
            <div className="summary-product">
              <img 
                src={product.image} 
                alt={product.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150?text=Produto';
                }}
              />
              <div>
                <h3>{product.title}</h3>
                <p>{product.type} - {product.category}</p>
                <p>Validade: {product.validity}</p>
              </div>
            </div>
            <div className="summary-total">
              <p>Subtotal: <span>R$ {product.price.toFixed(2).replace('.', ',')}</span></p>
              <p>Desconto: <span>R$ 0,00</span></p>
              <p className="total">Total: <span>R$ {product.price.toFixed(2).replace('.', ',')}</span></p>
            </div>
          </div>

          <div className="checkout-form">
            <h2 className="text-7C7F38">Método de Pagamento</h2>
            
            <div className="payment-methods">
              <div className="payment-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'pix' ? 'active' : ''}`}
                  onClick={() => handleTabChange('pix')}
                >
                  <FontAwesomeIcon icon={faQrcode} /> PIX
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'credit' ? 'active' : ''}`}
                  onClick={() => handleTabChange('credit')}
                >
                  <FontAwesomeIcon icon={faCreditCard} /> Crédito
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'debit' ? 'active' : ''}`}
                  onClick={() => handleTabChange('debit')}
                >
                  <FontAwesomeIcon icon={faCreditCard} /> Débito
                </button>
              </div>

              {/* PIX Tab */}
              <div className={`tab-content ${activeTab === 'pix' ? 'active' : ''}`}>
                <div className="pix-info">
                  <p>Pagamento instantâneo com melhor taxa</p>
                  <div className="pix-code-container">
                    <img 
                      src="/images/pix-qrcode.png" 
                      alt="QR Code PIX" 
                      className="pix-qrcode"
                    />
                    <div className="pix-copy">
                      <p>Chave PIX: <span>contato@veridya.com</span></p>
                      <button 
                        className="btn bg-163828" 
                        onClick={handleCopyPixCode}
                      >
                        <FontAwesomeIcon icon={faCopy} /> Copiar Código
                      </button>
                      <p className="pix-expire">Expira em: <span>30 minutos</span></p>
                    </div>
                  </div>
                </div>
                <button 
                  className="btn confirm-btn bg-7C7F38"
                  onClick={() => navigate(`/invoice/${id}`)}
                >
                  Já efetuei o pagamento
                </button>
              </div>

              {/* Credit Card Tab */}
              <div className={`tab-content ${activeTab === 'credit' ? 'active' : ''}`}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="card-number">Número do Cartão</label>
                    <input 
                      type="text" 
                      id="card-number" 
                      placeholder="1234 5678 9012 3456"
                      pattern="\d{4} \d{4} \d{4} \d{4}"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card-name">Nome no Cartão</label>
                    <input 
                      type="text" 
                      id="card-name" 
                      placeholder="Nome como está no cartão"
                      required
                    />
                  </div>
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="card-expiry">Validade</label>
                      <input 
                        type="text" 
                        id="card-expiry" 
                        placeholder="MM/AA"
                        pattern="\d{2}/\d{2}"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="card-cvv">CVV</label>
                      <input 
                        type="text" 
                        id="card-cvv" 
                        placeholder="123"
                        pattern="\d{3,4}"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="card-installments">Parcelamento</label>
                    <select 
                      id="card-installments"
                      value={installments}
                      onChange={handleInstallmentChange}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                        <option key={num} value={num}>
                          {num === 1 
                            ? `1x de R$ ${product.price.toFixed(2).replace('.', ',')} (à vista)`
                            : `${num}x de ${calculateInstallment()}`
                          }
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="btn confirm-btn bg-DD7126">
                    Finalizar Compra
                  </button>
                </form>
              </div>

              {/* Debit Card Tab */}
              <div className={`tab-content ${activeTab === 'debit' ? 'active' : ''}`}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="debit-card-number">Número do Cartão</label>
                    <input 
                      type="text" 
                      id="debit-card-number" 
                      placeholder="1234 5678 9012 3456"
                      pattern="\d{4} \d{4} \d{4} \d{4}"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="debit-card-name">Nome no Cartão</label>
                    <input 
                      type="text" 
                      id="debit-card-name" 
                      placeholder="Nome como está no cartão"
                      required
                    />
                  </div>
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="debit-card-expiry">Validade</label>
                      <input 
                        type="text" 
                        id="debit-card-expiry" 
                        placeholder="MM/AA"
                        pattern="\d{2}/\d{2}"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="debit-card-cvv">CVV</label>
                      <input 
                        type="text" 
                        id="debit-card-cvv" 
                        placeholder="123"
                        pattern="\d{3,4}"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn confirm-btn bg-163828">
                    Finalizar Compra
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Checkout;