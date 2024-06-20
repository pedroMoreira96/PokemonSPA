function fetchPokemon(name, cb) {

  let URL =
    'https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=' +
    name;

  $.ajax({
    url: URL,
    async: true,
    type: 'GET',
    dataType: 'json',
    success: cb,
    error: function () { 
      window.location.hash = (`/notFound`);
    }
  });
}

export { fetchPokemon };