import notFoundView from '/js/view/notFoundView.js';

function fetchPokemon(cb) {
  var URL =
    'https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=' +
    $('#userInput').val();

  $.ajax({
    url: URL,
    async: true,
    type: 'GET',
    dataType: 'json',
    success: cb,
    error: notFoundView.showView,
  });
}

function fetchName(cb, name) {
  var URL =
    'https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=' +
    name;

  $.ajax({
    url: URL,
    async: true,
    type: 'GET',
    dataType: 'json',
    success: cb,
    error: notFoundView.showView,
  });
}

export { fetchPokemon, fetchName };
