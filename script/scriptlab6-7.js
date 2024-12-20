function Burger() {
  let menu = document.getElementById('burger_menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

let defaultThumbnail = '../images/noPhoto.jpg';
let products = [];
let totalProductsCount = 0;

function displayProducts(filteredProducts, totalFoundProducts, totalBaseFound) {
  let productsContainer = document.getElementById('products-container');
  let productCountText = document.getElementById('product-count');

  productsContainer.innerHTML = '';

  filteredProducts.forEach(product => {
    let card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
      <h2>${product.title}</h2>
      <p>$${product.price}</p>
      <button class="butInfo"
        onclick="OpenInfo('${product.thumbnail}', '${product.title}', ${product.price}, '${product.description}')">
        Подробнее
      </button>
    `;
    productsContainer.appendChild(card);
  });

  productCountText.textContent = `Количество найденных товаров: ${totalFoundProducts} / Всего товаров: ${totalBaseFound}`;
}

async function fetchTotalCount(query) {
  let res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  let data = await res.json();
  return data.total;
}

fetch('https://dummyjson.com/products?limit=30&skip=122&select=title,price,thumbnail,description')
  .then(res => res.json())
  .then(data => {
    products = data.products;
    totalProductsCount = products.length;
    displayProducts(products, products.length, totalProductsCount);
  });

document.getElementById('search-button').addEventListener('click', async () => {
  let searchInput = document.getElementById('search-input');
  let query = searchInput.value.toLowerCase();

  let filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query)
  );

  let totalBaseFound = await fetchTotalCount(query);

  displayProducts(filteredProducts, filteredProducts.length, totalBaseFound);
});

document.getElementById('addProductButton').addEventListener('click', () => {
  let newProductTitle = document.getElementById('newProductTitle');
  let newProductDescription = document.getElementById('newProductDescription');
  let newProductPrice = document.getElementById('newProductPrice');

  let title = newProductTitle.value.trim();
  let description = newProductDescription.value.trim();
  let price = parseFloat(newProductPrice.value.trim());

  if (title && description && !isNaN(price)) {
    let newProduct = {
      title,
      description,
      price,
      thumbnail: defaultThumbnail,
    };

    products.push(newProduct);

    displayProducts(products, products.length, products.length);

    newProductTitle.value = '';
    newProductDescription.value = '';
    newProductPrice.value = '';
  }
});

function OpenInfo(imgUrl, title, price, description) {
  let productsInfo = document.getElementById('products-info');
  productsInfo.style.display = 'block';

  productsInfo.innerHTML = `
    <button id="productsClose" onclick="CloseInfo()">☓</button>
    <div class="productFlex">
      <div class="info-image-container">
        <img src="${imgUrl}" alt="${title}" class="info-image">
      </div>
      <div class="info-details">
        <h2 class="info-title">${title}</h2>
        <p class="info-price">$${price}</p>
        <p class="info-description">${description}</p>
      </div>
    </div>
  `;
}

function CloseInfo() {
  let productsInfo = document.getElementById('products-info');
  productsInfo.style.display = 'none';
}

function OpenAdd() {
  let addPr = document.getElementById('addProductForm');
  addPr.style.display = 'flex';
}

function CloseAdd() {
  let addPr = document.getElementById('addProductForm');
  addPr.style.display = 'none';
}
