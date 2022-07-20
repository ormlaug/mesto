export default class Card {
  constructor (
    data,
    myId,
    templateSelector,
    handleCardClick,
    handleLikeButton,
    handleDeleteButton
    ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._myId = myId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeButton = handleLikeButton;
    this._handleDeleteButton = handleDeleteButton;
  }

  _getTemplate = () => {
    return document
    .querySelector(this._templateSelector)
    .content.querySelector('.cards__item')
    .cloneNode(true);
  }

  handleLikeButton() {
    this._likeButton.classList.toggle('cards__like-button_active');
  }
  
  deleteCard() {
    this._element.remove();
    this._element = null;
  }



  _setCardsOwner() {
    if (this._myId !== this._ownerId) {
      this._deleteButton.remove();
    }
  }

  generateCard() {
    this._element = this. _getTemplate();
    this._cardPhoto = this._element.querySelector('.cards__photo');
    this._likeButton = this._element.querySelector('.cards__like-button');
    this._deleteButton = this._element.querySelector('.cards__delete-button');
    this._likesNumber = this._element.querySelector('.cards__likes-number');

    this._element.querySelector('.cards__title').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._likeButton.textContent = this._likesNumber.length;

    this._setCardsOwner();
    this._setEventListeners();

    return this._element;
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
}


