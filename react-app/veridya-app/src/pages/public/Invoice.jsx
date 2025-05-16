import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../../services/productService';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import '../../styles/invoice.css';


const Invoice = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [orderId, setOrderId] = useState('');
    const [orderDate, setOrderDate] = useState('');

    // Dados do cliente (podem vir de um contexto ou API)
    const customerData = {
        name: 'João da Silva',
        cpf: '123.456.789-00',
        email: 'joao@exemplo.com'
    };

    useEffect(() => {
        if (id) {

            const loadProduct = async () => {
                try {
                    const productData = await fetchProductById(id);

                    if (productData) {
                        setProduct(productData);

                        // Gerar data e número do pedido
                        const today = new Date();
                        setOrderDate(today.toLocaleDateString('pt-BR'));
                        setOrderId(`VD-${today.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
                    } else {
                        // Redirecionar se o produto não for encontrado
                        navigate('/');
                    }
                } catch (err) {
                    //setError('Erro ao carregar detalhes do produto');
                    console.error(err);
                } finally {
                    //setLoading(false);
                }
            };

            loadProduct();

        }
    }, [id, navigate]);

    if (!product) {
        return (<div className="invoice-page">
            <Header />
            <div className="container invoice-container">Carregando dados...</div>
            <Footer />
        </div>
        );
    }

    // Formatar o preço para o formato brasileiro
    const formatPrice = (price) => {
        return `R$ ${price.toFixed(2).replace('.', ',')}`;
    };

    return (
        <div className="invoice-page">
            <Header />

            <main className="container invoice-container">
                <div className="invoice-header">
                    <h1 style={{ color: '#163828' }}>Recibo de Compra</h1>
                    <div className="invoice-meta">
                        <p><strong>Número do Pedido:</strong> <span id="orderId">{orderId}</span></p>
                        <p><strong>Data:</strong> <span id="orderDate">{orderDate}</span></p>
                    </div>
                </div>

                <div className="invoice-body">
                    <div className="invoice-product">
                        <h2 style={{ color: '#DD7126' }}>Detalhes do Certificado</h2>
                        <div className="product-info">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="invoice-product-image"
                            />
                            <div>
                                <h3>{product.title}</h3>
                                <p><strong>Tipo:</strong> {product.type}</p>
                                <p><strong>Validade:</strong> {product.validity}</p>
                            </div>
                        </div>
                    </div>

                    <div className="invoice-payment">
                        <h2 style={{ color: '#7C7F38' }}>Informações de Pagamento</h2>
                        <div className="payment-details">
                            <p><strong>Método:</strong> Cartão de Crédito</p>
                            <p><strong>Parcelamento:</strong> {product.installments}</p>
                            <p><strong>Valor Total:</strong> {formatPrice(product.price)}</p>
                            <p><strong>Status:</strong> <span className="status completed">Completo</span></p>
                        </div>
                    </div>

                    <div className="invoice-customer">
                        <h2 style={{ color: '#163828' }}>Dados do Cliente</h2>
                        <div className="customer-details">
                            <p><strong>Nome:</strong> {customerData.name}</p>
                            <p><strong>CPF:</strong> {customerData.cpf}</p>
                            <p><strong>Email:</strong> {customerData.email}</p>
                        </div>
                    </div>
                </div>

                <div className="invoice-actions">
                    <button
                        className="btn"
                        style={{ backgroundColor: '#7C7F38' }}
                        onClick={() => window.print()}
                    >
                        Imprimir Recibo
                    </button>
                    <a
                        href="/"
                        className="btn"
                        style={{ backgroundColor: '#DD7126' }}
                    >
                        Voltar à Loja
                    </a>
                </div>

                <div className="invoice-footer">
                    <p>Agradecemos pela sua compra na Veridya!</p>
                    <p>Em caso de dúvidas, entre em contato: contato@veridya.com | (11) 1234-5678</p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Invoice;