export class Card {
  constructor (data, openPopupTypePicture) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._openPopupTypePicture = openPopupTypePicture;
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
    this._setEventListeners();
    this._element.querySelector('.cards__photo').src = this._link;
    this._element.querySelector('.cards__photo').alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;

    return this._element;
  }
  _setEventListeners() {
    const deleteButton = this._element.querySelector('.cards__delete-button');
    const likeButton = this._element.querySelector('.cards__like-button');
    const cardPhoto = this._element.querySelector('.cards__photo');

    deleteButton.addEventListener('click', () => {
      this._handleDeleteButton();
    });

    likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

    cardPhoto.addEventListener('click', () => this._openPopupTypePicture(this._data));
  }

  _handleLikeButton() {
    const likeButton = this._element.querySelector('.cards__like-button');
    likeButton.classList.toggle('cards__like-button_active');
  }
  
  _handleDeleteButton() {
    this._element.remove();
  }
}


