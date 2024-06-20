function showList(results) {
  var list = results.split(/[\n:]/);

  var mainDiv = $('#mainDiv');
  mainDiv.empty();

  var pokeTable = $('<div>', { id: 'pokeTable' });
  mainDiv.append(pokeTable);

  for (let i = 0; i < list.length; i += 2) {
    
    let pokemonName = list[i + 1];

    let pokeDiv = $('<div>', {
      class: 'nameImg',
      id: pokemonName
    });

    $('#pokeTable').append(pokeDiv);


    let pokeName = $('<div>', { text: list[i] });
    let pokeImg = $('<div>').append(
      $('<a>', {
        href: `#/pokemon/${pokemonName}`,
        id: pokemonName
      }).append(
        $('<img>', {
          src: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${pokemonName}.png`
        })
      )
    );

    pokeDiv.append(pokeName);
    pokeDiv.append(pokeImg);

    pokeTable.append(pokeDiv);
  }
}

$('#pokeList').on('click', function cleanPage() {
  document.getElementById('userInput').value = '';
});

export { showList };