// Dados de exemplo para certificados comprados
const purchasedCertificates = [
    {
        id: 1,
        title: "Certificado Digital A1 - Pessoa Física",
        type: "A1",
        category: "e-CPF",
        purchaseDate: "15/10/2023",
        expiryDate: "15/10/2024",
        status: "active",
        invoiceId: "VD-2023-0001",
        downloadLink: "#"
    },
    {
        id: 3,
        title: "Certificado Digital A3 - Pessoa Física",
        type: "A3",
        category: "e-CPF",
        purchaseDate: "10/09/2023",
        expiryDate: "10/09/2026",
        status: "active",
        invoiceId: "VD-2023-0002",
        downloadLink: "#"
    }
];

// Função para simular login
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de login - em um sistema real, isso seria uma chamada API
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // Salva no localStorage para simular sessão
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                
                // Redireciona para área do cliente
                window.location.href = '../home/index.html';
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        });
    }
}

// Função para carregar certificados comprados
function loadPurchasedCertificates() {
    const container = document.getElementById('certificateContainer');
    
    if (container) {
        container.innerHTML = purchasedCertificates.map(cert => `
            <div class="certificate-card">
                <h3>${cert.title}</h3>
                <div class="certificate-meta">
                    <span>${cert.type}</span>
                    <span>${cert.category}</span>
                </div>
                <p><strong>Compra:</strong> ${cert.purchaseDate}</p>
                <p><strong>Validade:</strong> ${cert.expiryDate}</p>
                <p><strong>Status:</strong> 
                    <span class="certificate-status status-${cert.status}">
                        ${cert.status === 'active' ? 'Ativo' : 'Expirado'}
                    </span>
                </p>
                <div class="certificate-actions">
                    <a href="invoice.html?id=${cert.id}" class="btn" style="background-color: #7C7F38;">
                        Ver Recibo
                    </a>
                    <a href="${cert.downloadLink}" class="btn" style="background-color: #DD7126;">
                        Download
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// Função para verificar autenticação
function checkAuth() {
    if (window.location.pathname.includes('client-area.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }
    }
}

// Função para logout
function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove dados de sessão
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            
            // Redireciona para login
            window.location.href = '../auth/login.html';
        });
    }
}

function initLogin(){
  setupLoginForm();
}
function initHomeCliente(){
  checkAuth();
        loadPurchasedCertificates();
        setupLogout();
}

function initRegister(){
 applyCpfMask();
        setupRegisterForm();
}

function initEsqueciSenha(){
    setupForgotPasswordForm();
}

// Função para máscara de CPF
function applyCpfMask() {
    const cpfField = document.getElementById('reg-cpf');
    if (cpfField) {
        cpfField.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 3) {
                value = value.substring(0, 3) + '.' + value.substring(3);
            }
            if (value.length > 7) {
                value = value.substring(0, 7) + '.' + value.substring(7);
            }
            if (value.length > 11) {
                value = value.substring(0, 11) + '-' + value.substring(11);
            }
            
            e.target.value = value.substring(0, 14);
        });
    }
}

// Função para validar senha forte
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    return password.length >= minLength && hasUpperCase && hasNumber;
}

// Função para configurar formulário de registro
function setupRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;
            
            // Validação de senha
            if (!validatePassword(password)) {
                alert('A senha não atende aos requisitos mínimos de segurança.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('As senhas digitadas não coincidem!');
                return;
            }
            
            // Simulação de cadastro bem-sucedido
            alert('Cadastro realizado com sucesso! Você será redirecionado para login.');
            window.location.href = 'login.html';
        });
    }
}

// Função para configurar recuperação de senha
function setupForgotPasswordForm() {
    const forgotForm = document.getElementById('forgotPasswordForm');
    
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de e-mail
            alert('Se o e-mail estiver cadastrado, você receberá as instruções para redefinir sua senha.');
            window.location.href = 'login.html';
        });
    }
}