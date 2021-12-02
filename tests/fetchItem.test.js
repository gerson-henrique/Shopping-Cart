require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('se é uma função',() => {
    expect(typeof fetchItem).toBe('function')
  } )

  it('se chama a função',async () => {
    await fetchItem('MLB1615760527')
   expect(fetch).toHaveBeenCalled()
  } )

  it('se usa o endpoint certo',async () => {
    await fetchItem('MLB1615760527')
   expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  } )

  it('se a estrutura de dados é compativel',async () => {
    const test = await fetchItem('MLB1615760527')
   expect(test).toEqual(item)
   } )

   it('se a estrutura vazia chama erro',async () => {
    const test = await fetchItem()
   expect(test).toEqual( new Error (`You must provide an url`))
   } )

});
