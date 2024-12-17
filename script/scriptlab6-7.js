let productsContainer = document.getElementById('products-container');
let searchInput = document.getElementById('search-input');
let productCountText = document.getElementById('product-count');
let searchButton = document.getElementById('search-button');

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
    `;
    productsContainer.appendChild(card);
  });

  // Обновление статистики
  productCountText.textContent = `Количество найденных товаров: ${totalFoundProducts} / Всего товаров: ${totalBaseFound}`;
}

// Функция для получения количества товаров во всей базе по запросу
async function fetchTotalCount(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await res.json();
  return data.total; 
}

// Запрос к API для вашей подборки
fetch('https://dummyjson.com/products?limit=30&skip=122&select=title,price,thumbnail')
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