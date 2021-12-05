const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {

  const test = '<ol><li>Item</li></ol>'

  it('se a função usa o metodo localStorage.setItem', () => {
    expect(saveCartItems(test)).toEqual(localStorage.setItem())
   } )
 
   it('se a função usa o metodo e usa a key especifica',async () => {
    expect(saveCartItems(test)).toEqual(localStorage.setItem('cartItems', test))
   } )

});
