const fetchProducts = (query) => 
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
  .then((resposta) => resposta.json())
  .then((data) => data)
  .catch((err) => err);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
