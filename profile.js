// Elementos do DOM
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const profileAvatar = document.getElementById('profileAvatar');
const totalSpent = document.getElementById('totalSpent');
const totalPurchases = document.getElementById('totalPurchases');
const lastAccess = document.getElementById('lastAccess');
const purchasesList = document.getElementById('purchasesList');
const settingsForm = document.getElementById('settingsForm');
const logoutBtn = document.getElementById('logoutBtn');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Carregar dados do usuário
function loadUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Atualizar informações básicas
    profileName.textContent = currentUser.name;
    profileEmail.textContent = currentUser.email;
    profileAvatar.src = currentUser.avatar || 'default-avatar.png';

    // Atualizar estatísticas
    totalSpent.textContent = `R$ ${currentUser.totalSpent.toFixed(2)}`;
    totalPurchases.textContent = currentUser.purchases.length;
    lastAccess.textContent = new Date(currentUser.lastAccess).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Carregar histórico de compras
    loadPurchases(currentUser.purchases);

    // Preencher formulário de configurações
    document.getElementById('changeName').value = currentUser.name;
}

// Carregar histórico de compras
function loadPurchases(purchases) {
    purchasesList.innerHTML = '';
    
    if (purchases.length === 0) {
        purchasesList.innerHTML = '<p class="no-purchases">Nenhuma compra realizada ainda.</p>';
        return;
    }

    purchases.sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach(purchase => {
            const purchaseElement = document.createElement('div');
            purchaseElement.className = 'purchase-item';
            purchaseElement.innerHTML = `
                <div class="details">
                    <h4>${purchase.name}</h4>
                    <small>${new Date(purchase.date).toLocaleDateString('pt-BR')}</small>
                </div>
                <div class="price">R$ ${purchase.price.toFixed(2)}</div>
            `;
            purchasesList.appendChild(purchaseElement);
        });
}

// Alternar entre abas
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;
        
        // Atualizar botões
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Atualizar conteúdo
        tabContents.forEach(content => {
            content.style.display = content.id === `${tabName}Tab` ? 'block' : 'none';
        });
    });
});

// Atualizar perfil
settingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users'));
    
    const newName = document.getElementById('changeName').value;
    const newPassword = document.getElementById('changePassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;

    if (newPassword && newPassword !== confirmNewPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    const updates = {
        name: newName
    };

    if (newPassword) {
        updates.password = newPassword;
    }

    try {
        const userManager = new UserManager();
        userManager.updateProfile(currentUser.email, updates);
        alert('Perfil atualizado com sucesso!');
        loadUserData();
    } catch (error) {
        alert(error.message);
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    const userManager = new UserManager();
    userManager.logout();
    window.location.href = 'login.html';
});

// Carregar dados ao iniciar
loadUserData();
