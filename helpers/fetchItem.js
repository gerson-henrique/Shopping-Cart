const fetchItem = (ItemID) => 
  fetch(`https://api.mercadolibre.com/items/${ItemID}`)
  .then((resposta) => resposta.json())
  .then((data) => data)
  .catch((err) => err);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
