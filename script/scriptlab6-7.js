let productsContainer = document.getElementById('products-container');
let searchInput = document.getElementById('search-input');
let productCountText = document.getElementById('product-count');
let searchButton = document.getElementById('search-button');
let productsInfo = document.getElementById('products-info');
let newProductTitle = document.getElementById('newProductTitle');
let newProductDescription = document.getElementById('newProductDescription');
let newProductPrice = document.getElementById('newProductPrice');
let addProductButton = document.getElementById('addProductButton');
let addPr = document.getElementById('addProductForm');

let defaultThumbnail = '../images/noPhoto.jpg';

let products = []; 
let totalProductsCount = 0; 

// Функция отображения товаров и статистики
function displayProducts(filteredProducts, totalFoundProducts, totalBaseFound) {
  productsContainer.innerHTML = ''; // Очистка контейнера

  // Отображение товаров
  filteredProducts.forEach(product => {
    let card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
      <h2>${product.title}</h2>
      <p>$${product.price}</p>
      <button class="butInfo"
        onclick="OpenInfo('${product.thumbnail}', '${product.title}', ${product.price}, '${product.description.replace(/'/g, "\\'")}')">
        Подробнее
      </button>
    `;
    productsContainer.appendChild(card);
  });

  // Обновление статистики
  productCountText.textContent = `Количество найденных товаров: ${totalFoundProducts} / Всего товаров: ${totalBaseFound}`;
}

// Функция для получения количества товаров во всей базе по запросу
async function fetchTotalCount(query) {
  let res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  let data = await res.json();
  return data.total; 
}

// Запрос к API для вашей подборки
fetch('https://dummyjson.com/products?limit=30&skip=122&select=title,price,thumbnail,description')
  .then(res => res.json())
  .then(data => {
    products = data.products;
    totalProductsCount = products.length;
    displayProducts(products, products.length, totalProductsCount);
  })
  .catch(error => console.error('Error fetching products:', error));

// Обработчик нажатия на кнопку поиска
searchButton.addEventListener('click', async () => {
  let query = searchInput.value.toLowerCase();

  // Фильтруем товары из вашей подборки
  let filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query)
  );

  let totalBaseFound = 0; 
  try {
    totalBaseFound = await fetchTotalCount(query); 
  } catch (error) {
    console.error('Error fetching total product count:', error);
  }

  // Обновляем отображение
  displayProducts(filteredProducts, filteredProducts.length, totalBaseFound);
});
function Burger() {
    let menu = document.getElementById("burger_menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

addProductButton.addEventListener('click', () => {
  let title = newProductTitle.value.trim();
  let description = newProductDescription.value.trim();
  let price = parseFloat(newProductPrice.value.trim());

  // Проверка корректности введённых данных
  if (title && description && !isNaN(price)) {
    let newProduct = {
      title,
      description,
      price,
      thumbnail: defaultThumbnail,
    };

    // Добавляем товар в массив
    products.push(newProduct);

    // Обновляем отображение товаров и статистики
    displayProducts(products, products.length, products.length);

    // Очищаем поля ввода
    newProductTitle.value = '';
    newProductDescription.value = '';
    newProductPrice.value = '';
  } else {
    alert('Пожалуйста, заполните все поля корректно!');
  }
});

function OpenInfo(imgUrl, title, price, description) {
  // Открываем блок с информацией
  productsInfo.style.display = "block";


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

  // Обновляем изображение
  let infoImage = productsInfo.querySelector('.info-image');
  if (!infoImage) {
    infoImage = document.createElement('img');
    infoImage.className = 'info-image';
    productsInfo.appendChild(infoImage);
  }
  infoImage.src = imgUrl;

  // Обновляем название
  let infoTitle = productsInfo.querySelector('.info-title');
  if (!infoTitle) {
    infoTitle = document.createElement('h2');
    infoTitle.className = 'info-title';
    productsInfo.appendChild(infoTitle);
  }
  infoTitle.textContent = title;

  // Обновляем цену
  let infoPrice = productsInfo.querySelector('.info-price');
  if (!infoPrice) {
    infoPrice = document.createElement('p');
    infoPrice.className = 'info-price';
    productsInfo.appendChild(infoPrice);
  }
  infoPrice.textContent = `$${price}`;

  // Обновляем описание
  let infoDescription = productsInfo.querySelector('.info-description');
  if (!infoDescription) {
    infoDescription = document.createElement('p');
    infoDescription.className = 'info-description';
    productsInfo.appendChild(infoDescription);
  }
  infoDescription.textContent = description;
}

function CloseInfo(){
  productsInfo.style.display = "none";
}

function OpenAdd(){
  addPr.style.display = 'flex';
}

function CloseAdd(){
  addPr.style.display = 'none';
}