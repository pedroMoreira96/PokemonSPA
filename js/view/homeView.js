function showHome() {
  var mainDiv = $('#mainDiv');
  mainDiv.empty();

  var logo = $('<img>', {
    src: 'resources/logoPokemon.png',
    alt: 'logo.png',
    id: 'logo'
  });

  var ashImage = $('<img>', {
    id: 'ash',
    src: '/resources/ash-walking.gif'
  });

  mainDiv.append(logo);
  mainDiv.append(ashImage);
}



$('#homePokeball').on('click', function cleanPage() {
  showHome();
  document.getElementById('userInput').value = '';
});

$('#pokeList').on('click', function cleanPage() {
  document.getElementById('userInput').value = '';
});



const nav = document.querySelector('.nav');
const searchIcon = document.querySelector('#searchIcon');
const navOpenBtn = document.querySelector('.navOpenBtn');

searchIcon.addEventListener('click', () => {
  nav.classList.toggle('openSearch');
  nav.classList.remove('openNav');
  if (nav.classList.contains('openSearch')) {
    searchIcon.classList.replace('uil-search', 'uil-times');
  } else {
    searchIcon.classList.replace('uil-times', 'uil-search');
  }
});

navOpenBtn.addEventListener('click', () => {
  nav.classList.toggle('openNav');
  nav.classList.remove('openSearch');
  if (!nav.classList.contains('openNav')) {
    searchIcon.classList.replace('uil-times', 'uil-search');
  }
});

$('#userInput').on('keypress', function (e) {
  if (e.which === 13) {
    let pokemonName = $('#userInput').val();
    window.location.hash = (`/pokemon/${pokemonName}`);
    $('#userInput').val('');

    nav.classList.remove('openNav');
    searchIcon.classList.replace('uil-times', 'uil-search');
  }
});

window.addEventListener('hashchange', function () {
  nav.classList.remove('openSearch');
  nav.classList.remove('openNav');
  searchIcon.classList.replace('uil-times', 'uil-search');
});

export default { showHome };