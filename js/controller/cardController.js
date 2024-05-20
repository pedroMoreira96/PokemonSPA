import { fetchPokemon } from '/js/service/cardService.js';
import { processPokemon } from '/js/view/cardView.js';


function init() {
  if ($('#userInput').val()) {
    fetchPokemon(processPokemon);
  }
}

export default { init };
