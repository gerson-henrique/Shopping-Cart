const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

window.fetch = jest.fn(fetchSimulator);

describe('1 - Teste a função fecthProducts', () => {
  it('se é uma função',() => {
    expect(typeof fetchProducts).toBe('function')
  } )

  it('se chama a função',async () => {
    await fetchProducts('computador')
   expect(fetch).toHaveBeenCalled()
  } )

  it('se usa o endpoint certo',async () => {
    await fetchProducts('computador')
   expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  } )

  it('se a estrutura de dados é compativel',async () => {
   const test = await fetchProducts('computador')
  expect(test).toEqual(computadorSearch)
  } )

  it('se a estrutura vazia chama erro',async () => {
    const test = await fetchProducts()
   expect(test).toEqual( new Error (`You must provide an url`))
   } )


});
