function showHome() {
  var body = $('#mainDiv');
  body.empty();

  var logo = `<img src="resources/logoPokemon.png" alt="logo.png" id="logo">`

  var ashImage = `<img id='ash' src='/resources/ash-walking.gif'>`;

  body.append(logo);
  body.append(ashImage);
}

$('#homePokeball').on('click', function cleanPage() {
  homeView.showHome();
  document.getElementById('userInput').value = '';
});

$('#pokeList').on('click', function cleanPage() {
  document.getElementById('userInput').value = '';
});


export default { showHome };
