function showNotFound() {
  var mainDiv = $('#mainDiv');
  mainDiv.empty();

  var card = $('<div>', { class: 'card', id: 'notFound'});

  var imageDiv = $('<div>', { class: 'imageDiv'});
  var img = $('<img>', { src: `/resources/200w.gif`, id: 'snorlaxSleeping', alt: "Snorlax sleeping"});
  imageDiv.append(img);

  var cardText = $('<p>', { id: 'notFoundMessage', text: 'Error 404: Pokemon not found' });

  card.append(imageDiv, cardText);

  mainDiv.append(card);

}

export default { showNotFound };
