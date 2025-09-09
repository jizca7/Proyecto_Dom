const products = [
{
    name: 'Bota Adidas Kopa',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'Futbol Emotion',
    image: 'https://www.futbolemotion.com/images/productos/202403/thumbs/bota-adidas-copa-pure-fg-negro-blanco.jpg'
},
{
    name: 'Adidas Predator Edge.3 FG',
    price: 299,
    stars: 3.5,
    reviews: 250,
    seller: 'Futbol Emotion',
    image: 'https://www.futbolemotion.com/es/comprar/bota-de-futbol/adidas/predator-elite-ft-ag-white-core-black-lucid-lemon'
},
{
    name: 'Camiseta FC Barcelona 22/23',
    price: 187,
    stars: 4.5,
    reviews: 321,
    seller: 'Futbol Emotion',
    image: 'https://thumb.futbol-emotion.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
},
{
    name: 'Botas Nike Phantom GT2',
    price: 329,
    stars: 5,
    reviews: 250,
    seller: 'Futbol Emotion',
    image: 'https://thumb.futbol-emotion.com/w-100-100/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
},
{
    name: 'Bota Nike Mercurial',
    price: 299,
    stars: 5,
    reviews: 457,
    seller: 'Futbol Emotion',
    image: 'https://www.futbolemotion.com/es/comprar/bota-de-futbol/nike/air-zoom-mercurial-vapor-16-elite-ag-pro-magic-flamingo-black-total-crimson'
},
{
    name: 'Camiseta Real Madrid 22/23',
    price: 180,
    stars: 5,
    reviews: 777,
    seller: 'Futbol Emotion',
    image: 'https://thumb.futbol-emotion.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
},
{
    name: 'Bota Adidas F50',
    price: 120,
    stars: 2.9,
    reviews: 121,
    seller: 'Futbol Emotion',
    image:`https://www.google.com/imgres?q=foto%20png&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F47%2FPNG_transparency_demonstration_1.png%2F640px-PNG_transparency_demonstration_1.png&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FPortable_Network_Graphics&docid=Evy-u6WdUu9aNM&tbnid=yOC5V-GAu-Yq0M&vet=12ahUKEwiagvbXxq6PAxUxR6QEHUoFB6wQM3oECBgQAA..i&w=640&h=480&hcb=2&ved=2ahUKEwiagvbXxq6PAxUxR6QEHUoFB6wQM3oECBgQAA`
    //image: 'https://www.futbolemotion.com/es/comprar/bota-de-futbol/adidas/f50-elite-fg-purple-rush-ftwr-white-lucid-lemon?url_add2cart=https://api.empathy.co/tagging/v1/track/soloporteros/add2cart?lang=es;amp;scope=desktop;amp;portal=1;amp;q=botas;amp;productId=267705_1244_ES_EUR_1;amp;url=https%3A%2F%2Fwww.futbolemotion.com%2Fes%2Fcomprar%2Fbota-de-futbol%2Fadidas%2Ff50-elite-fg-purple-rush-ftwr-white-lucid-lemon;amp;title=Bota+adidas+F50+Elite+FG;amp;position=6;amp;page=1;amp;type=4;amp;session=1756386849385_3338;amp;origin=search_box%3Anone;amp;filters=portal%3A1%7Crate%3A1%7Ccurrency%3AEUR%7Cstore%3AES;amp;filtered=true;amp;spellcheck=false;amp;store=ES;amp;follow=false'
},
{
    name: 'Camiseta Inter Milan 23/24',
    price: 129,
    stars: 4.3,
    reviews: 432,
    seller: 'Futbol Emotion',
    image: 'https://www.futbolemotion.com/images/productos/202309/thumbs/camiseta-nike-inter-milan-2023-2024-negro-azul.jpg'
},
{
    name: 'Camiseta Atletico Madrid 22/23',
    price: 99,
    stars: 4,
    reviews: 55,
    seller: 'Futbol Emotion',
    image: 'https://www.futbolemotion.com/images/productos/202302/thumbs/camiseta-nike-atletico-madrid-2022-2023-rojo-blanco.jpg'
},
{
    name: 'Bota Puma Future 7',
    price: 299,
    stars: 5,
    reviews: 676,
    seller: 'Futbol Emotion',
    image: 'https://www.futbolemotion.com/images/productos/202404/thumbs/bota-puma-future-7-focus-blue-white.jpg'
},
{
    name: 'Camiseta Betis 24/25',
    price: 129,
    stars: 4,
    reviews: 88,
    seller: 'Futbol Emotion',
    image: 'https://www.futbolemotion.com/images/productos/202406/thumbs/real-betis-24-25-primera-equipacion.jpg'
}, 
{
    name: 'Bota Nike Tiempo',
    price: 299,
    stars: 5,
    reviews: 676,
    seller: 'Futbol Emotion',
    image: 'https://www.futbolemotion.com/images/productos/202309/thumbs/bota-nike-air-max-95-rojo-blanco.jpg'
},
];
const productsSection = document.getElementById('products');

products.forEach(product => {
const card = document.createElement('article');
card.className = 'product-card'; 

card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image"/>
    <h2 class="product-name">${product.name}</h2>
    <p class="product-price">Precio: ${product.price}€</p>
    <div class="product-stars">Valoración: ${product.stars} ★</div>
    <p class="product-reviews">${product.reviews} opiniones</p>
    <p class="product-seller">Vendedor: ${product.seller}</p>
`;
productsSection.appendChild(card);
});
