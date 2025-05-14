// Dados dos produtos
// Dados dos produtos - Certificados A1 e A3
const products = [
    {
        id: 1,
        title: "Certificado Digital A1 - Pessoa Física",
        type: "A1",
        category: "e-CPF",
        price: 159.90,
        validity: "1 ano",
        image: "images/certificado-a1.jpg",
        description: "Certificado digital A1 para pessoa física (e-CPF), válido por 1 ano. Instalado diretamente no computador ou dispositivo móvel.",
        features: [
            "Validade: 1 ano",
            "Armazenamento: No dispositivo",
            "Pode ser instalado em múltiplos dispositivos",
            "Ideal para uso pessoal",
            "Assinatura digital com validade jurídica"
        ],
        installments: "6x de R$ 26,65 sem juros"
    },
    {
        id: 2,
        title: "Certificado Digital A1 - Pessoa Jurídica",
        type: "A1",
        category: "e-CNPJ",
        price: 229.90,
        validity: "1 ano",
         image: "images/certificado-a1.jpg",
        description: "Certificado digital A1 para pessoa jurídica (e-CNPJ), válido por 1 ano. Permite assinar documentos e acessar sistemas governamentais.",
        features: [
            "Validade: 1 ano",
            "Armazenamento: No dispositivo",
            "Pode ser instalado em até 2 dispositivos simultaneamente",
            "Ideal para empresas",
            "Acesso a sistemas como SEFAZ, Receita Federal"
        ],
        installments: "8x de R$ 28,74 sem juros"
    },
    {
        id: 3,
        title: "Certificado Digital A3 - Pessoa Física",
        type: "A3",
        category: "e-CPF",
        price: 249.90,
        validity: "3 anos",
        image: "images/certificado-a3.jpg",
        description: "Certificado digital A3 para pessoa física (e-CPF), válido por 3 anos. Armazenado em mídia criptográfica (token ou cartão).",
        features: [
            "Validade: 3 anos",
            "Armazenamento: Token ou cartão criptográfico",
            "Maior segurança física",
            "Não precisa de renovação anual",
            "Inclui dispositivo de hardware"
        ],
        installments: "10x de R$ 24,99 sem juros"
    },
    {
        id: 4,
        title: "Certificado Digital A3 - Pessoa Jurídica",
        type: "A3",
        category: "e-CNPJ",
        price: 399.90,
        validity: "3 anos",
        image: "images/certificado-a3.jpg",
        description: "Certificado digital A3 para pessoa jurídica (e-CNPJ), válido por 3 anos. Solução mais segura e durável para empresas.",
        features: [
            "Validade: 3 anos",
            "Armazenamento: Token ou cartão criptográfico",
            "Maior segurança para operações críticas",
            "Ideal para contabilidade e departamento fiscal",
            "Inclui dispositivo de hardware"
        ],
        installments: "12x de R$ 33,33 sem juros"
    }
];

// Carrossel
let currentSlideInt = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= slides.length) currentSlideInt = 0;
    if (index < 0) currentSlideInt = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideInt].classList.add('active');
    dots[currentSlideInt].classList.add('active');
    
    document.querySelector('.carousel-container').style.transform = `translateX(-${currentSlideInt * 100}%)`;
}

function moveSlide(n) {
    showSlide(currentSlideInt += n);
}

function currentSlide(n) {
    showSlide(currentSlideInt = n - 1);
}

// Auto-avançar o carrossel
setInterval(() => {
    moveSlide(1);
}, 5000);

// Função para renderizar os produtos
function renderProducts() {
    const productContainer = document.getElementById('productContainer');
    
    if (productContainer) {
        // Ordena por mais vendidos (simulação)
        const bestSellers = [...products].sort((a, b) => b.id - a.id);
        
        productContainer.innerHTML = bestSellers.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x200.png/7C7F38/FFFFFF?text=Certificado+${product.type}'">
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <div class="product-badge">
                        ${product.type}
                    </div>
                    <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                    <p class="validity">Validade: ${product.validity}</p>
                    <p class="installments">${product.installments}</p>
                    <a href="produto.html?id=${product.id}" class="btn">Detalhes</a>
                </div>
            </div>
        `).join('');
    }
}

// Função para carregar os detalhes do produto
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (productId) {
        const product = products.find(p => p.id === productId);
        
        if (product) {
            document.getElementById('productTitle').textContent = product.title;
            document.getElementById('productPrice').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
            document.getElementById('productInstallments').innerHTML = `<p>${product.installments}</p>`;
            document.getElementById('productDescription').textContent = product.description;
            document.getElementById('productImage').src = product.image;
            document.getElementById('productImage').alt = product.title;
            
            // Novos campos específicos para certificados
            document.getElementById('productType').textContent = product.type;
            document.getElementById('productCategory').textContent = product.category;
            document.getElementById('productValidity').textContent = product.validity;
            
            // Carregar features
            const featuresList = document.getElementById('productFeatures');
            featuresList.innerHTML = product.features.map(feature => 
                `<li>${feature}</li>`
            ).join('');
        }
    }
}

// Função para simular a compra
function setupBuyButton() {
    const buyButton = document.getElementById('buyButton');
    
    if (buyButton) {
        buyButton.addEventListener('click', () => {
            alert('Compra simulada! Em uma implementação real, isso redirecionaria para o checkout.');
        });
    }
}

// Inicialização

function initHome(){
    showSlide(currentSlideInt);
    renderProducts();
    setupBuyButton();
}

function initDetalhes(){
    loadProductDetails();
    setupBuyButton();
}