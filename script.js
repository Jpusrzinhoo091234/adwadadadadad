const products = [
    // ✨ BOOSTERS ✨
    {
        id: 1,
        name: "100x SHINY POTION",
        emoji: "✨",
        price: 3.00,
        category: "boosters",
        description: "Poção para aumentar suas chances de Shiny"
    },
    {
        id: 2,
        name: "250x SUPER TIME",
        emoji: "⏳",
        price: 7.50,
        category: "boosters",
        description: "Boost de tempo para suas atividades"
    },
    {
        id: 3,
        name: "100x SUPER TIME",
        emoji: "⏳",
        price: 3.00,
        category: "boosters"
    },
    {
        id: 4,
        name: "100x SUPER LUCK",
        emoji: "🍀",
        price: 2.00,
        category: "boosters"
    },
    {
        id: 5,
        name: "250x SUPER LUCK",
        emoji: "🍀",
        price: 2.70,
        category: "boosters"
    },
    {
        id: 6,
        name: "100x SUPER DROP",
        emoji: "👜",
        price: 2.10,
        category: "boosters"
    },
    {
        id: 7,
        name: "250x SUPER DROP",
        emoji: "👜",
        price: 5.30,
        category: "boosters"
    },
    {
        id: 8,
        name: "100x SUPER XP",
        emoji: "⚡",
        price: 2.12,
        category: "boosters"
    },
    {
        id: 9,
        name: "250x SUPER XP",
        emoji: "⚡",
        price: 5.30,
        category: "boosters"
    },
    {
        id: 10,
        name: "250x SUPER YEN",
        emoji: "💸",
        price: 3.00,
        category: "boosters"
    },
    {
        id: 11,
        name: "250x SUPER DMG",
        emoji: "⚔️",
        price: 2.30,
        category: "boosters"
    },

    // 💡 ITENS 💡
    {
        id: 12,
        name: "500x CLONE TOKEN",
        emoji: "🟣",
        price: 2.00,
        category: "itens"
    },
    {
        id: 13,
        name: "50x DUNGEON TOKEN",
        emoji: "🟡",
        price: 2.00,
        category: "itens"
    },
    {
        id: 14,
        name: "100x DEFENCE TOKEN",
        emoji: "🔵",
        price: 3.00,
        category: "itens"
    },
    {
        id: 15,
        name: "300x AVATAR UP",
        emoji: "📖",
        price: 2.00,
        category: "itens"
    },
    {
        id: 16,
        name: "250x AVATAR DOUBLE UP",
        emoji: "📙",
        price: 2.00,
        category: "itens"
    },
    {
        id: 17,
        name: "100x AVATAR TOKEN",
        emoji: "🟡",
        price: 2.00,
        category: "itens"
    },
    {
        id: 18,
        name: "1M TRIAL SHARD",
        emoji: "☄️",
        price: 12.00,
        category: "itens"
    },
    {
        id: 19,
        name: "5M TRIAL SHARD",
        emoji: "☄️",
        price: 30.00,
        category: "itens"
    },
    {
        id: 20,
        name: "35K SHARD MUNDO (PASSIVA)",
        emoji: "✨☄️",
        price: 3.00,
        category: "itens"
    },
    {
        id: 21,
        name: "10K FUTA DIVINA",
        emoji: "🔵",
        price: 4.00,
        category: "itens"
    },
    {
        id: 22,
        name: "10K FRUTA SECRETA",
        emoji: "⚫",
        price: 2.00,
        category: "itens"
    },
    {
        id: 23,
        name: "10x HEVELYN FRUITS",
        emoji: "🍋",
        price: 2.50,
        category: "itens"
    },
    {
        id: 24,
        name: "20k SARD AURA",
        emoji: "☪️",
        price: 2.50,
        category: "itens"
    },

    // 🎮 FREE FIRE 🎮
    {
        id: 40,
        name: "OPORTUNIDADE ÚNICA: PASSE BOOYAH PREMIUM FREE FIRE",
        emoji: "👑",
        price: 7.50,
        category: "free_fire",
        description: `MELHOR PREÇO DO GGMAX 🤑

🔰 CONTAS COM 300 DIAMANTE!
🔰 CONTAS VIA GOOGLE ✅️
🔰 CONTAS VIA FACEBOOK ✅️
🔰 CONTAS LEVEL 8 ✅
🔰 CONTAS LEVEL 2 ✅
🔰 CONTAS PODEM TER O REI CAVEIRA ✅
🔰 ENTREGA AUTOMÁTICA ✅

⚠️ APÓS A COMPRA LEMBRE-SE DE ALTERAR OS DADOS ⚠️`
    },
    {
        id: 41,
        name: "LEVEL 2 +299 DIMAS SEM SKIN +TROCA NICK",
        emoji: "🟠",
        price: 8.00,
        category: "free_fire",
        description: "( 834 em estoque )"
    },
    {
        id: 42,
        name: "LEVEL 2 +300 DIMAS +SKIN CAVEIRA +TROCA NICK",
        emoji: "🟡",
        price: 10.00,
        category: "free_fire",
        description: "( 908 em estoque )"
    },
    {
        id: 43,
        name: "10 CONTAS LEVEL 15 +20K OURO SEM SKIN +TROCA NICK",
        emoji: "🟣",
        price: 52.00,
        category: "free_fire",
        description: "( 967 em estoque )"
    },
    {
        id: 44,
        name: "LEVEL 15 +300 DIMAS + SKIN REI CAVEIRA +TROCA NICK",
        emoji: "🟢",
        price: 17.00,
        category: "free_fire",
        description: "( 747 em estoque )"
    },
    {
        id: 45,
        name: "LEVEL 15 +299 DIMAS +20K OURO SEM SKIN",
        emoji: "⚪",
        price: 15.00,
        category: "free_fire",
        description: "( 893 em estoque )"
    },
    {
        id: 46,
        name: "LEVEL 15 +49 DIMAS +20K OURO SEM SKIN",
        emoji: "🟣",
        price: 7.50,
        category: "free_fire",
        description: "( 458 em estoque )"
    },
    {
        id: 47,
        name: "LEVEL 15 +1000 DIMAS +20K OURO",
        emoji: "🔵",
        price: 40.90,
        category: "free_fire",
        description: "( 458 em estoque )"
    },

    // ⚜️ ARTEFATOS ⚜️
    {
        id: 25,
        name: "ARTEFATO FULL (SORTE)",
        emoji: "🍀",
        price: 10.00,
        category: "artefatos"
    },
    {
        id: 26,
        name: "ARTEFATO FULL (DROP)",
        emoji: "👜",
        price: 8.00,
        category: "artefatos"
    },
    {
        id: 27,
        name: "ARTEFATO FULL (YEN)",
        emoji: "💸",
        price: 2.00,
        category: "artefatos"
    },
    {
        id: 28,
        name: "ARTEFATO FULL (DMG)",
        emoji: "⚔️",
        price: 2.00,
        category: "artefatos"
    },
    {
        id: 29,
        name: "ARTEFATO FULL (TEMPO)",
        emoji: "⏳",
        price: 6.00,
        category: "artefatos"
    },
    {
        id: 30,
        name: "ARTEFATO FULL (DUNGEON)",
        emoji: "⛰️",
        price: 2.00,
        category: "artefatos"
    },
    {
        id: 31,
        name: "ARTEFATO FULL (EQUIPE)",
        emoji: "👪",
        price: 6.00,
        category: "artefatos"
    },
    {
        id: 32,
        name: "ARTEFATO FULL (PASSIVA LUCK)",
        emoji: "🍀",
        price: 5.00,
        category: "artefatos"
    },
    {
        id: 33,
        name: "ARTEFATO FULL (XP)",
        emoji: "🧪",
        price: 5.00,
        category: "artefatos"
    },
    {
        id: 34,
        name: "FULL ARTEFATO",
        emoji: "👪🍀",
        price: 30.00,
        category: "artefatos",
        description: "Pacote com todos os artefatos no nível máximo"
    },

    // ⚡ PEDRAS ⚡
    {
        id: 35,
        name: "2K TODAS PEDRAS",
        emoji: "⚡",
        price: 2.50,
        category: "pedras",
        description: "🟠🟣🟢🔵🔴🟡 2.000 de cada pedra"
    },

    // 🚪 DESAFIOS 🚪
    {
        id: 36,
        name: "QUALQUER TRIAL",
        emoji: "🚪",
        price: 2.00,
        category: "desafios"
    },
    {
        id: 37,
        name: "TRIAL INFINITA ROOM 400",
        emoji: "🚪",
        price: 10.00,
        category: "desafios"
    },
    {
        id: 38,
        name: "EMPRESTAR AS ENGRENAGEM",
        emoji: "⚙️",
        price: 8.00,
        category: "desafios"
    },
    {
        id: 39,
        name: "DUNGEON INSANA",
        emoji: "🏰",
        price: 5.00,
        category: "desafios"
    }
];

let cart = [];

// Função para criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    card.innerHTML = `
        <div class="product-emoji">${product.emoji}</div>
        <h3>${product.name}</h3>
        <div class="product-price">
            ${product.oldPrice ? `<span class="product-old-price">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
            <span>R$ ${product.price.toFixed(2)}</span>
        </div>
        <div class="quantity-control">
            <button class="quantity-btn minus" onclick="event.stopPropagation(); updateQuantity(${product.id}, 'decrease')">-</button>
            <input type="number" class="quantity-input" value="1" min="1" max="99" 
                   onchange="event.stopPropagation(); validateQuantity(this)"
                   onclick="event.stopPropagation()"
                   data-product-id="${product.id}">
            <button class="quantity-btn plus" onclick="event.stopPropagation(); updateQuantity(${product.id}, 'increase')">+</button>
        </div>
        <button onclick="event.stopPropagation(); addToCart(${product.id})" class="buy-btn">
            Adicionar ao Carrinho 🛒
        </button>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('buy-btn') && 
            !e.target.classList.contains('quantity-btn') && 
            !e.target.classList.contains('quantity-input')) {
            showPreview(product);
        }
    });
    
    return card;
}

function updateQuantity(productId, action) {
    const input = document.querySelector(`input[data-product-id="${productId}"]`);
    let value = parseInt(input.value);
    
    if (action === 'increase' && value < 99) {
        input.value = value + 1;
    } else if (action === 'decrease' && value > 1) {
        input.value = value - 1;
    }
}

function validateQuantity(input) {
    let value = parseInt(input.value);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 99) value = 99;
    input.value = value;
}

function addToCart(productId) {
    const userManager = new UserManager();
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const quantityInput = document.querySelector(`input[data-product-id="${productId}"]`);
        const quantity = parseInt(quantityInput?.value || 1);
        
        // Se não estiver logado, redireciona para o login
        if (!userManager.currentUser) {
            if (confirm('Você precisa fazer login para comprar. Deseja fazer login agora?')) {
                window.location.href = 'login.html';
            }
            return;
        }

        // Adiciona ao carrinho
        const existingProduct = cart.find(item => item.product.id === productId);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({ product, quantity });
        }
        
        // Salva a compra no perfil do usuário
        userManager.addPurchase(userManager.currentUser.username, {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category
        });
        
        updateCartCount();
        
        // Adiciona feedback visual ao botão
        const button = document.querySelector(`button[onclick="addToCart(${productId})"]`);
        if (button) {
            button.classList.add('added-to-cart');
            setTimeout(() => {
                button.classList.remove('added-to-cart');
            }, 1000);
        }

        alert('Produto adicionado com sucesso! Você pode ver suas compras no seu perfil.');
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function showCartPopup() {
    const popup = document.getElementById('cart-popup');
    const overlay = document.getElementById('cart-overlay');
    const itemsContainer = document.getElementById('cart-items');
    
    itemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const { product, quantity } = item;
        const itemTotal = product.price * quantity;
        total += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-emoji">${product.emoji}</span>
                <span>${product.name}</span>
            </div>
            <div class="cart-item-details">
                <div class="quantity-control">
                    <button class="quantity-btn minus" onclick="updateCartItemQuantity(${index}, 'decrease')">-</button>
                    <input type="number" class="quantity-input" value="${quantity}" min="1" max="99" 
                           onchange="validateCartItemQuantity(${index}, this)">
                    <button class="quantity-btn plus" onclick="updateCartItemQuantity(${index}, 'increase')">+</button>
                </div>
                <span>R$ ${itemTotal.toFixed(2)}</span>
                <button onclick="removeFromCart(${index})" class="remove-btn">✖️</button>
            </div>
        `;
        
        itemsContainer.appendChild(itemElement);
    });
    
    document.getElementById('cart-total').textContent = total.toFixed(2);
    
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function updateCartItemQuantity(index, action) {
    const item = cart[index];
    if (action === 'increase' && item.quantity < 99) {
        item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity--;
    }
    updateCartCount();
    showCartPopup();
}

function validateCartItemQuantity(index, input) {
    let value = parseInt(input.value);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 99) value = 99;
    cart[index].quantity = value;
    input.value = value;
    updateCartCount();
    showCartPopup();
}

// Adiciona funcionalidade de pesquisa
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
let searchQuery = '';

function searchProducts() {
    searchQuery = searchInput.value;
    displayProducts();
}

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

searchBtn.addEventListener('click', searchProducts);

// Função para mostrar produtos
function displayProducts(category = 'todos') {
    const container = document.querySelector('.products-grid');
    container.innerHTML = '';
    
    const productsList = searchQuery 
        ? products.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        : products;
    
    let filteredProducts = productsList;
    
    // Filtrar por categoria principal
    if (category === 'anime_fighters') {
        filteredProducts = productsList.filter(p => 
            ['boosters', 'itens', 'artefatos', 'pedras', 'desafios'].includes(p.category)
        );
    } else if (category === 'free_fire') {
        filteredProducts = productsList.filter(p => p.category === 'free_fire');
    }

    // Criar seções
    if (category === 'free_fire') {
        // Para Free Fire, mostrar sem seção
        filteredProducts.forEach(product => {
            container.appendChild(createProductCard(product));
        });
    } else if (category === 'anime_fighters' || category === 'todos') {
        // Para Anime Fighters, mostrar com seções
        const sections = [
            { id: 'boosters', title: 'BOOSTERS', emoji: '✨' },
            { id: 'itens', title: 'ITENS', emoji: '💡' },
            { id: 'artefatos', title: 'ARTEFATOS', emoji: '⚜️' },
            { id: 'pedras', title: 'PEDRAS', emoji: '⚡' },
            { id: 'desafios', title: 'DESAFIOS', emoji: '🚪' }
        ];

        // Se for "todos", mostrar Free Fire primeiro
        if (category === 'todos') {
            const freeFireProducts = productsList.filter(p => p.category === 'free_fire');
            if (freeFireProducts.length > 0) {
                const header = document.createElement('div');
                header.className = 'section-header';
                header.innerHTML = `<h2>🎮 FREE FIRE 🎮</h2>`;
                container.appendChild(header);

                freeFireProducts.forEach(product => {
                    container.appendChild(createProductCard(product));
                });

                // Adicionar separador após Free Fire
                const separator = document.createElement('div');
                separator.className = 'section-container';
                container.appendChild(separator);
            }
        }

        // Mostrar seções do Anime Fighters
        sections.forEach(section => {
            const sectionProducts = filteredProducts.filter(p => p.category === section.id);
            if (sectionProducts.length > 0) {
                const header = document.createElement('div');
                header.className = 'section-header';
                header.innerHTML = `<h2>${section.emoji} ${section.title} ${section.emoji}</h2>`;
                container.appendChild(header);

                sectionProducts.forEach(product => {
                    container.appendChild(createProductCard(product));
                });
            }
        });
    }
}

// Funções do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    showCartPopup();
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar produtos primeiro
    displayProducts('todos');
    
    // Configurar categorias
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayProducts(button.dataset.category);
        });
    });

    // Verificar login e adicionar informações do usuário se estiver logado
    const userManager = new UserManager();
    if (userManager.currentUser) {
        const header = document.querySelector('header');
        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';
        userInfo.innerHTML = `
            <span>Olá, ${userManager.currentUser.username}!</span>
            <a href="profile.html" class="profile-btn">👤 Perfil</a>
        `;
        header.appendChild(userInfo);
    }
});

// Função para mostrar preview do produto
function showPreview(product) {
    const modal = document.getElementById('preview-modal');
    const overlay = document.getElementById('preview-overlay');
    const content = document.querySelector('.preview-content');
    
    content.innerHTML = `
        <div class="product-emoji">${product.emoji}</div>
        <h2>${product.name}</h2>
        <div class="product-price">R$ ${product.price.toFixed(2)}</div>
        ${product.description ? `
            <div class="product-description">
                ${product.description}
            </div>
        ` : ''}
        <button onclick="addToCart(${product.id})" class="buy-btn">
            Adicionar ao Carrinho 🛒
        </button>
    `;
    
    modal.style.display = 'block';
    overlay.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closePreview() {
    const modal = document.getElementById('preview-modal');
    const overlay = document.getElementById('preview-overlay');
    
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
}

// Atualizar event listeners
document.getElementById('preview-close').addEventListener('click', closePreview);
document.getElementById('preview-overlay').addEventListener('click', closePreview);

// Melhorar scroll do header
function initializeHeaderToggle() {
    if (window.innerWidth > 768) return;

    const headerToggle = document.getElementById('headerToggle');
    const headerNavContainer = document.querySelector('.header-nav-container');
    let isCollapsed = false;
    let touchStartY = 0;
    let touchEndY = 0;

    // Adicionar suporte para gestos touch
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        touchEndY = e.touches[0].clientY;
        const diff = touchStartY - touchEndY;

        if (diff > 50 && !isCollapsed) { // Scroll para baixo
            headerNavContainer.classList.add('collapsed');
            headerToggle.innerHTML = '↓';
            isCollapsed = true;
        } else if (diff < -50 && isCollapsed) { // Scroll para cima
            headerNavContainer.classList.remove('collapsed');
            headerToggle.innerHTML = '✖️';
            isCollapsed = false;
        }
    }, { passive: true });
}

// Chamar a função de inicialização
initializeHeaderToggle(); 

function hideCartPopup() {
    document.getElementById('cart-popup').style.display = 'none';
    document.getElementById('cart-overlay').style.display = 'none';
}