function showAbout() {
  var body = $('#mainDiv');
  body.empty();

  var cards = `
    <div class="container">
      <div class="cardC card0">
        <div class="border">
          <h2>Álvaro Mendes</h2>
          <div class="icons">
            <i class="fa fa-linkedin" aria-hidden="true" onclick="window.open('https://www.linkedin.com/in/alvaro-afp-mendes/')"></i>
            <i class="fa fa-github" aria-hidden="true" onclick="window.open('https://github.com/AlvaroMyGit')"></i>
          </div>
        </div>
      </div>
      <div class="cardC card1">
        <div class="border">
          <h2>Carlos Minhós</h2>
          <div class="icons">
            <i class="fa fa-linkedin" aria-hidden="true" onclick="window.open('https://www.linkedin.com/in/carlos-minhos/')"></i>
            <i class="fa fa-github" aria-hidden="true" onclick="window.open('https://github.com/CarlosMinhos')"></i>
          </div>
        </div>
      </div>
      <div class="cardC card2">
        <div class="border">
          <h2>José Pereira</h2>
          <div class="icons">
            <i class="fa fa-linkedin" aria-hidden="true" onclick="window.open('https://www.linkedin.com/in/sapereira97/')"></i>
            <i class="fa fa-github" aria-hidden="true" onclick="window.open('https://github.com/SaPereira97')"></i>
          </div>
        </div>
      </div>
      <div class="cardC card3">
        <div class="border">
          <h2>Pedro Moreira</h2>
          <div class="icons">
            <i class="fa fa-linkedin" aria-hidden="true" onclick="window.open('https://www.linkedin.com/in/pedroarmoreira/')"></i>
            <i class="fa fa-github" aria-hidden="true" onclick="window.open('https://github.com/pedroMoreira96')"></i>
          </div>
        </div>
      </div>
    </div>
  `;

  body.append(cards);
}



export default { showAbout };