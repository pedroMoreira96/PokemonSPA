
function processPokemon(results) {
  const mainDiv = $('#mainDiv');
  mainDiv.empty();

  const name = results.name;
  const nameImg = name.toLowerCase().replace("'", '');

  const URL = `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/images/${nameImg}.jpg`;

  const card = $('<div>', { class: 'card', id: 'zeca'});

  const imageDiv = $('<div>', { class: 'imageDiv' });
  const img = $('<img>', { src: URL, class: 'card-img-top', alt: name });
  imageDiv.append(img);
  card.append(imageDiv);

  const cardBody = $('<div>', { class: 'card-body' });
  const cardTitle = $('<h5>', { class: 'card-title', text: name });
  const cardTitleCenter = $('<center>').append(cardTitle);
  const cardText = $('<p>', { class: 'card-text', text: results.info.description });
  cardBody.append(cardTitleCenter, $('<p>'), cardText);
  card.append(cardBody);

  const listGroup = $('<ul>', { class: 'list-group list-group-flush' });
  const idItem = $('<li>', { class: 'list-group-item', text: `Id: ${results.info.id}` });
  const typeItem = $('<li>', { class: 'list-group-item' });
  typeItem.html(`Type: <div class="type-icon type-${results.info.type}">${results.info.type}</div>`);
  const weaknessItem = $('<li>', { class: 'list-group-item' });
  weaknessItem.html(`Weakness: <div class="type-icon type-${results.info.weakness}">${results.info.weakness}</div>`);
  listGroup.append(idItem, typeItem, weaknessItem);
  card.append(listGroup);

  const cardFooter = $('<div>', { class: 'card-body' });
  const moreInfoLink = $('<a>', {
    href: `https://www.pokemon.com/us/pokedex/${name}`,
    class: 'card-link',
    style: 'color: green',
    text: 'More info',
    target: '_blank'
  });
  const dontClickLink = $('<a>', {
    href: 'https://streamable.com/lf027o?src=player-page-share',
    class: 'card-link',
    style: 'color: red',
    text: "DON'T CLICK",
    target: '_blank'
  });
  const centerFooter = $('<center>').append(moreInfoLink, dontClickLink);
  cardFooter.append(centerFooter);
  card.append(cardFooter);

  mainDiv.append(card);
}

export { processPokemon };
