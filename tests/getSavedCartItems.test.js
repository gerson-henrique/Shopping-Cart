const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');
const starter = document.createElement('div')
starter.className =  'cart__items'
document.querySelector('body').appendChild(starter)
describe('4 - Teste a função getSavedCartItems',  () => {
  it('se a função usa o metodo localStorage.getItem', () => {
    expect(getSavedCartItems()).toEqual(localStorage.getItem());
   } )
   it('se a função usa o metodo e usa a key especifica',  () => {
    expect(getSavedCartItems()).toEqual(localStorage.getItem('cartItems'))
   } )

});
