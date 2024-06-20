import { fetchPokemon } from '/js/service/cardService.js';
import { processPokemon } from '/js/view/cardView.js';

function init() {

  function getPokemonNameFromHash() {
    const path = window.location.hash;
    return path.split('/')[2];
  }

  const pokemonName = getPokemonNameFromHash();
  
  fetchPokemon(pokemonName, processPokemon);

}

export default { init };