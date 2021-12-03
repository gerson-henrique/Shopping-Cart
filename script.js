// const { fetchProducts } = require("./helpers/fetchProducts");
// const { fetchItem } = require("./helpers/fetchItem");

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  const ElementRemovedFather = (event.target.parentNode);
  ElementRemovedFather.removeChild(event.target);
}
 // rq 3 ^ 
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const cartElment = document.querySelector('.cart__items');
const toCart = async (addCart) => {
  const sku = getSkuFromProductItem(addCart.target.parentNode);
  const resuls = await fetchItem(sku);
  const obj = createCartItemElement(resuls);
  cartElment.appendChild(obj);
 };

 // rq 2 ^

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
   const btn = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btn.addEventListener('click', toCart);
   section.appendChild(btn);

  return section;
}

const implementLi = async () => {
const { results } = await fetchProducts('computador');
const listaElment = document.querySelector('.items');
results.forEach((product) => {
  const obj = createProductItemElement(product);
  listaElment.appendChild(obj);
});

console.log(results);
};
// rq 1 ^ 

const erase = () => {
document.querySelector('.cart__items').innerHTML = '';
};
const btnErase = document.getElementsByClassName('empty-cart')[0];
btnErase.addEventListener('click', erase);

// rq 6
window.onload = () => { implementLi(); };
