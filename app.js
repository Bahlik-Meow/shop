const products = [
    {
        id: 1,
        title: 'Ноутбук 15"',
        category: 'Компьютеры',
        price: 85000
    },
    {
        id: 2,
        title: 'Монитор 27"',
        category: 'Компьютеры',
        price: 28000
    },
    {
        id: 3,
        title: 'Клавиатура',
        category: 'Аксессуары',
        price: 6500
    },
    {
        id: 4,
        title: 'Мышь беспроводная',
        category: 'Аксессуары',
        price: 2500
    },
    {
        id: 5,
        title: 'Наушники',
        category: 'Аксессуары',
        price: 4500
    },
    {
        id: 6,
        title: 'Веб-камера',
        category: 'Аксессуары',
        price: 7000
    }
];

const cart = [];

const catalog = document.getElementById('catalog');
const cartCount = document.getElementById('cart-count');
const cartSum = document.getElementById('cart-sum');
const clearCart = document.getElementById('clear-cart');

function renderProducts() {
    catalog.innerHTML = products.map(product => `
        <div class="card">
            <div class="category">${product.category}</div>
            <h3>${product.title}</h3>
            <div class="price">
                ${product.price.toLocaleString('ru-RU')} ₽
            </div>
            <button data-id="${product.id}">
                В корзину
            </button>
        </div>
    `).join('');
}

function renderCart() {
    cartCount.textContent = cart.length;

    const sum = cart.reduce(
        (total, product) => total + product.price,
        0
    );

    cartSum.textContent = sum.toLocaleString('ru-RU');
}

catalog.addEventListener('click', function(event) {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = Number(event.target.dataset.id);

    const product = products.find(
        product => product.id === id
    );

    if (product) {
        cart.push(product);
        renderCart();
    }
});

clearCart.addEventListener('click', function() {
    cart.length = 0;
    renderCart();
});

renderProducts();
renderCart();
