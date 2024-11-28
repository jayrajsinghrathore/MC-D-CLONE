const menuItems = [
    { name: 'Big Mac', price: '$5.99', image: 'https://www.shutterstock.com/shutterstock/photos/1986286082/display_1500/stock-photo-beef-and-cheese-burger-in-a-brown-background-tasty-homade-hamburger-mix-with-french-fries-union-1986286082.jpg' },
    { name: 'Fries', price: '$2.99', image: 'https://www.shutterstock.com/shutterstock/photos/1631203783/display_1500/stock-photo-bangkok-thailand-january-mcdonald-s-french-fries-in-tray-at-mcdonald-s-restaurant-1631203783.jpg' },
    { name: 'McFlurry', price: '$3.99', image: 'https://www.shutterstock.com/shutterstock/photos/2294887771/display_1500/stock-photo-surabaya-indonesia-april-th-mcflurry-at-bg-junction-surabaya-2294887771.jpg' },
    { name: 'Chicken Nuggets', price: '$4.99', image: 'https://www.shutterstock.com/shutterstock/photos/2486963761/display_1500/stock-photo-chicken-nuggets-tenders-snack-bites-served-with-spicy-cheese-mayo-sauce-dip-2486963761.jpg' },
    { name: 'Happy Meal', price: '$6.99', image: 'https://www.shutterstock.com/shutterstock/photos/1780521716/display_1500/stock-photo-happy-meal-menu-at-mcdonald-s-restaurant-red-box-next-to-hamburger-or-cheeseburger-and-fries-time-1780521716.jpg' },
    { name: 'Big Mac', price: '$5.99', image: 'https://www.shutterstock.com/shutterstock/photos/1986286082/display_1500/stock-photo-beef-and-cheese-burger-in-a-brown-background-tasty-homade-hamburger-mix-with-french-fries-union-1986286082.jpg' },
    { name: 'Fries', price: '$2.99', image: 'https://www.shutterstock.com/shutterstock/photos/1631203783/display_1500/stock-photo-bangkok-thailand-january-mcdonald-s-french-fries-in-tray-at-mcdonald-s-restaurant-1631203783.jpg' },
    { name: 'McFlurry', price: '$3.99', image: 'https://www.shutterstock.com/shutterstock/photos/2294887771/display_1500/stock-photo-surabaya-indonesia-april-th-mcflurry-at-bg-junction-surabaya-2294887771.jpg' },
    { name: 'Chicken Nuggets', price: '$4.99', image: 'https://www.shutterstock.com/shutterstock/photos/2486963761/display_1500/stock-photo-chicken-nuggets-tenders-snack-bites-served-with-spicy-cheese-mayo-sauce-dip-2486963761.jpg' },
    { name: 'Happy Meal', price: '$6.99', image: 'https://www.shutterstock.com/shutterstock/photos/1780521716/display_1500/stock-photo-happy-meal-menu-at-mcdonald-s-restaurant-red-box-next-to-hamburger-or-cheeseburger-and-fries-time-1780521716.jpg' },
    { name: 'Big Mac', price: '$5.99', image: 'https://www.shutterstock.com/shutterstock/photos/1986286082/display_1500/stock-photo-beef-and-cheese-burger-in-a-brown-background-tasty-homade-hamburger-mix-with-french-fries-union-1986286082.jpg' },
    { name: 'Fries', price: '$2.99', image: 'https://www.shutterstock.com/shutterstock/photos/1631203783/display_1500/stock-photo-bangkok-thailand-january-mcdonald-s-french-fries-in-tray-at-mcdonald-s-restaurant-1631203783.jpg' },
    { name: 'McFlurry', price: '$3.99', image: 'https://www.shutterstock.com/shutterstock/photos/2294887771/display_1500/stock-photo-surabaya-indonesia-april-th-mcflurry-at-bg-junction-surabaya-2294887771.jpg' },
    { name: 'Chicken Nuggets', price: '$4.99', image: 'https://www.shutterstock.com/shutterstock/photos/2486963761/display_1500/stock-photo-chicken-nuggets-tenders-snack-bites-served-with-spicy-cheese-mayo-sauce-dip-2486963761.jpg' },
    { name: 'Happy Meal', price: '$6.99', image: 'https://www.shutterstock.com/shutterstock/photos/1780521716/display_1500/stock-photo-happy-meal-menu-at-mcdonald-s-restaurant-red-box-next-to-hamburger-or-cheeseburger-and-fries-time-1780521716.jpg' },
    { name: 'Big Mac', price: '$5.99', image: 'https://www.shutterstock.com/shutterstock/photos/1986286082/display_1500/stock-photo-beef-and-cheese-burger-in-a-brown-background-tasty-homade-hamburger-mix-with-french-fries-union-1986286082.jpg' },
    { name: 'Fries', price: '$2.99', image: 'https://www.shutterstock.com/shutterstock/photos/1631203783/display_1500/stock-photo-bangkok-thailand-january-mcdonald-s-french-fries-in-tray-at-mcdonald-s-restaurant-1631203783.jpg' },
    { name: 'McFlurry', price: '$3.99', image: 'https://www.shutterstock.com/shutterstock/photos/2294887771/display_1500/stock-photo-surabaya-indonesia-april-th-mcflurry-at-bg-junction-surabaya-2294887771.jpg' },
    { name: 'Chicken Nuggets', price: '$4.99', image: 'https://www.shutterstock.com/shutterstock/photos/2486963761/display_1500/stock-photo-chicken-nuggets-tenders-snack-bites-served-with-spicy-cheese-mayo-sauce-dip-2486963761.jpg' },
    { name: 'Happy Meal', price: '$6.99', image: 'https://www.shutterstock.com/shutterstock/photos/1780521716/display_1500/stock-photo-happy-meal-menu-at-mcdonald-s-restaurant-red-box-next-to-hamburger-or-cheeseburger-and-fries-time-1780521716.jpg' },
];

const menuContainer = document.querySelector('.menu-items');
const cartContainer = document.querySelector('.cart-items');
const searchInput = document.getElementById('search');

let cart = [];

// Populate menu
function displayMenu(items) {
    menuContainer.innerHTML = '';
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button onclick="addToCart('${item.name}')">Add to Cart</button>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Add item to cart
function addToCart(itemName) {
    const item = menuItems.find(i => i.name === itemName);
    cart.push(item);
    updateCart();
}

// Update cart UI
function updateCart() {
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No items in cart.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `<p>${item.name} - ${item.price}</p>`;
            cartContainer.appendChild(cartItem);
        });
    }
}

// Filter menu search input
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(query)
    );
    displayMenu(filteredItems);
});

// Initialize
displayMenu(menuItems);
