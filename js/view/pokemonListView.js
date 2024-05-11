import cardView from '/js/view/cardView.js';
import { fetchName } from '/js/service/cardService.js';

function showList(results) {
  var list = results.split(/[\n:]/);

  var mainDiv = $('#mainDiv');
  mainDiv.empty();

  var pokeTable = `<div id="pokeTable"></div>`;

  mainDiv.append(pokeTable);

  for (let i = 0; i < list.length; i = i + 2) {

    let pokeDiv = `<div class="nameImg" id="${list[i+1]}"></div>`;

    $("#pokeTable").append(pokeDiv)
    
    let pokeName = `<div>${list[i]}</div>`;
    let pokeImg = `<div><a href="#/pokemon" id="${list[i + 1]}">
                   <img src="https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${list[i + 1]}.png"></a></div>`;

    $(`#${list[i+1]}`).append(pokeName);
    $(`#${list[i+1]}`).append(pokeImg);


    document.getElementById(list[i + 1]).addEventListener('click', function () {
      fetchName(cardView.processPokemon, list[i + 1]);
    });
  }
}

$('#pokeList').on('click', function cleanPage() {
  document.getElementById('userInput').value = '';
});

export { showList };
