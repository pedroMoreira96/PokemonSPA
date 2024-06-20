function showAbout() {
  var mainDiv = $('#mainDiv');
  mainDiv.empty();

  var container = $('<div>', { class: 'container' });

  var people = [
    {
      name: 'Álvaro Mendes',
      linkedin: 'https://www.linkedin.com/in/alvaro-afp-mendes/',
      github: 'https://github.com/AlvaroMyGit'
    },
    {
      name: 'Carlos Minhós',
      linkedin: 'https://www.linkedin.com/in/carlos-minhos/',
      github: 'https://github.com/CarlosMinhos'
    },
    {
      name: 'José Pereira',
      linkedin: 'https://www.linkedin.com/in/sapereira97/',
      github: 'https://github.com/SaPereira97'
    },
    {
      name: 'Pedro Moreira',
      linkedin: 'https://www.linkedin.com/in/pedroarmoreira/',
      github: 'https://github.com/pedroMoreira96'
    }
  ];

  people.forEach((person, index) => {
    var card = $('<div>', { class: `cardC card${index}` });
    var border = $('<div>', { class: 'border' });
    var name = $('<h2>', { text: person.name });
    
    var icons = $('<div>', { class: 'icons' });
    var linkedinIcon = $('<i>', {
      class: 'fa fa-linkedin',
      'aria-hidden': 'true',
      click: function () { window.open(person.linkedin); }
    });
    var githubIcon = $('<i>', {
      class: 'fa fa-github',
      'aria-hidden': 'true',
      click: function () { window.open(person.github); }
    });

    icons.append(linkedinIcon, githubIcon);
    border.append(name, icons);
    card.append(border);
    container.append(card);
  });

  mainDiv.append(container);
}

export default { showAbout };