import cardView from '/js/view/cardView.js';
import { fetchPokemon } from '/js/service/cardService.js';


function init() {
  if ($('#userInput').val()) {
    fetchPokemon(cardView.processPokemon);
  }
}

export default { init };
