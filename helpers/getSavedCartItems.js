const getSavedCartItems = () => {
  if ((localStorage.getItem('cartItems') !== null)) {
  const cartElment = document.querySelector('.cart__items');
  const parsed = localStorage.getItem('cartItems');
  cartElment.innerHTML = parsed;
}
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
