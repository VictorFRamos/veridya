// src/services/productService.js

// Mock de dados - em produção, substitua por chamada API real
const mockProducts = [
          {
        id: 1,
        title: "Certificado Digital A1 - Pessoa Física",
        type: "A1",
        category: "e-CPF",
        price: 159.90,
        validity: "1 ano",
        image: "../images/certificado-a1.jpg",
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
         image: "../images/certificado-a1.jpg",
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
        image: "../images/certificado-a3.jpg",
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
        image: "../images/certificado-a3.jpg",
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

export const fetchFeaturedProducts = async () => {
  try {
    // Simulando delay de rede
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Em produção, substitua por:
    // const response = await api.get('/products/featured');
    // return response.data;
    
    return mockProducts;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    // Simulando chamada à API
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const product = mockProducts.find(p => p.id === parseInt(id));
    
    if (!product) {
      throw new Error('Produto não encontrado');
    }
    
    return product;
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    throw error;
  }
};
