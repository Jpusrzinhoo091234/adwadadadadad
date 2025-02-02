// Gerenciamento de usuários
class UserManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    }

    register(username, password) {
        if (this.users[username]) {
            throw new Error('Nome de usuário já está em uso');
        }

        const user = {
            username,
            password, // Em produção, usar hash
            createdAt: new Date(),
            purchases: [],
            totalSpent: 0,
            lastAccess: new Date(),
            avatar: 'default-avatar.png'
        };

        this.users[username] = user;
        this.saveUsers();
        return user;
    }

    login(username, password) {
        const user = this.users[username];
        if (!user || user.password !== password) {
            throw new Error('Nome de usuário ou senha incorretos');
        }

        user.lastAccess = new Date();
        this.currentUser = user;
        this.saveUsers();
        this.saveCurrentUser();
        return user;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    updateProfile(username, updates) {
        const user = this.users[username];
        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        Object.assign(user, updates);
        this.saveUsers();
        if (this.currentUser && this.currentUser.username === username) {
            this.currentUser = user;
            this.saveCurrentUser();
        }
    }

    addPurchase(username, purchase) {
        const user = this.users[username];
        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        user.purchases.push({
            ...purchase,
            date: new Date()
        });
        user.totalSpent += purchase.price;
        this.saveUsers();
        if (this.currentUser && this.currentUser.username === username) {
            this.currentUser = user;
            this.saveCurrentUser();
        }
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    saveCurrentUser() {
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
}

// Inicializar gerenciador de usuários
const userManager = new UserManager();

// Elementos do DOM
const loginBox = document.getElementById('loginBox');
const registerBox = document.getElementById('registerBox');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Alternar entre login e registro
showRegisterLink?.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
});

showLoginLink?.addEventListener('click', (e) => {
    e.preventDefault();
    registerBox.style.display = 'none';
    loginBox.style.display = 'block';
});

// Manipular login
loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const user = userManager.login(username, password);
        window.location.href = 'index.html';
    } catch (error) {
        alert(error.message);
    }
});

// Manipular registro
registerForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem');
        return;
    }

    try {
        const user = userManager.register(username, password);
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html';
    } catch (error) {
        alert(error.message);
    }
});

// Verificar autenticação
function checkAuth() {
    const currentUser = userManager.currentUser;
    if (!currentUser && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    }
}

// Executar verificação de autenticação
checkAuth();
