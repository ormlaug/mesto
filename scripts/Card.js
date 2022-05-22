export class Card {
  constructor (item) {
    this._name = item.name;
    this._link = item.link;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('.template')
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.cards__photo').src = this._link;
    this._element.querySelector('.cards__photo').alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;

    return this._element;
  }

  _handleLikeButton() {
    const likeButton = this._element.querySelector('.cards__like-button');
    likeButton.classList.toggle('cards__like-button_active');
  }

  _handleDeleteButton() {
    this._element.remove();
  }
}



// function render() {
//   const cards = initialCards.map(getElement);
//   cardList.append(...cards);
// }

// function getElement(item) {
//   const pageElementsTemplate = template.content.cloneNode(true);
//   const cardTitle = pageElementsTemplate.querySelector('.cards__title');
//   const cardPhoto = pageElementsTemplate.querySelector('.cards__photo');
  
//   const deleteButton = pageElementsTemplate.querySelector('.cards__delete-button');

//   cardTitle.textContent = item.name;
//   cardPhoto.src = item.link;
//   cardPhoto.alt = item.name;

//   deleteButton.addEventListener('click', function (evt) {
//     const listItem = evt.target.closest('.cards__item');
//     listItem.remove();
//   });



//   cardPhoto.addEventListener('click', () => openPopupTypePicture(item));

//   return pageElementsTemplate;
// }