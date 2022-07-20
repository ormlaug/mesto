export default class Card {
  constructor (data, templateSelector, handleCardClick, owner) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate = () => {
    return document
    .querySelector(this._templateSelector)
    .content.querySelector('.cards__item')
    .cloneNode(true);
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteButton();
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

    this._cardPhoto.addEventListener('click', () => this._handleCardClick(this._data));
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('cards__like-button_active');
  }
  
  _handleDeleteButton() {
    this._element.remove();
  }

  generateCard() {
    this._element = this. _getTemplate();
    this._cardPhoto = this._element.querySelector('.cards__photo');
    this._likeButton = this._element.querySelector('.cards__like-button');
    this._deleteButton = this._element.querySelector('.cards__delete-button');


    this._element.querySelector('.cards__title').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}


