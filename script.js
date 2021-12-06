// const { fetchProducts } = require("./helpers/fetchProducts");
// const { fetchItem } = require("./helpers/fetchItem");

const valueWay = document.querySelector('.total-price'); 
let value = 0;
const objectIDs = [];

const cartElment = document.querySelector('.cart__items');
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
  const text = event.target.innerText;
  const price = text.split('$');
  value -= parseFloat(price[1]);
  valueWay.innerText = value;
  saveCartItems(cartElment.childNodes);
  }
 // rq 3 ^ 
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  objectIDs.push({ id: sku, price: salePrice });
  const li = document.createElement('li');
  value += salePrice;
  valueWay.innerText = value;
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);

  return li;
}

// rq 5 ^ 

const toCart = async (addCart) => {
  const sku = getSkuFromProductItem(addCart.target.parentNode);
  const resuls = await fetchItem(sku);
  const obj = createCartItemElement(resuls);
  cartElment.appendChild(obj);
    saveCartItems(cartElment.innerHTML);
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

const load = () => {
const element = document.createElement('div');
element.innerText = 'carregando...';
element.className = 'loading';
const body = document.querySelector('body');
body.appendChild(element);
};

const unload = () => {
  const check = document.querySelector('.loading');
  check.remove();
};

// rq 7 ^ 

const lintfix = objectIDs[0];
console.log(lintfix);

const implementLi = async () => {
  load();
const { results } = await fetchProducts('computador');
const listaElment = document.querySelector('.items');
results.forEach((product) => {
  const obj = createProductItemElement(product);
  listaElment.appendChild(obj);
});
  unload();
};
// rq 1 ^ 

const erase = () => {
document.querySelector('.cart__items').innerHTML = '';
saveCartItems(cartElment.childNodes);
};
const btnErase = document.getElementsByClassName('empty-cart')[0];
btnErase.addEventListener('click', erase);

// rq 6 ^

const addExcludes = () => {
  const allChild = cartElment.childNodes;
  allChild.forEach((a) => a.addEventListener('click', cartItemClickListener));
};

// rq 4 ^ 

window.onload = () => { implementLi(); getSavedCartItems(); addExcludes(); };
