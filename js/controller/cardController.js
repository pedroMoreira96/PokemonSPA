import { fetchPokemon } from '/js/service/cardService.js';
import { processPokemon } from '/js/view/cardView.js';

function init() {

  function getPokemonNameFromHash() {
    const path = window.location.hash;
    return path.split('/')[2];
  }

  const pokemonName = getPokemonNameFromHash();
  if (pokemonName) {
    console.log(`Fetching Pokémon: ${pokemonName}`);
    fetchPokemon(pokemonName, processPokemon);
  } else {
    console.log("No Pokémon name found in URL hash.");
  }
}

export default { init };