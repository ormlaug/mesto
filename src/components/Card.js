export default class Card {
  constructor (
    data,
    templateSelector,
    myId,
    handleCardClick,
    handleLikeButton,
    handleRemoveLike,
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
    this._handleRemoveLike = handleRemoveLike;
    this._handleDeleteButton = handleDeleteButton;
  }

  _getTemplate = () => {
    return document
    .querySelector(this._templateSelector)
    .content.querySelector('.cards__item')
    .cloneNode(true);
  }

  //_handleLikeButton() {
   // this._likeButton.classList.toggle('cards__like-button_active');
  //}
  
  deleteCard() {
    this._element.remove();
    this._element = null;
  }



  _setCardsOwner() {
    if (this._ownerId !== this._myId) {
      this._deleteButton.remove();
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardPhoto = this._element.querySelector('.cards__photo');
    this._likeButton = this._element.querySelector('.cards__like-button');
    this._deleteButton = this._element.querySelector('.cards__delete-button');
    this._likesNumber = this._element.querySelector('.cards__likes-number');


    this._element.querySelector('.cards__title').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._likesNumber.textContent = this._data.likes.length;


    this._setCardsOwner();
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this.likeButton = this._element.querySelector('.cards__like-button');

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteButton(this);
    });

    this.likeButton.addEventListener('click', () => {
      console.log(this._data)
      this._handleLikeButton(this._data);
    });

    this._cardPhoto.addEventListener('click', () => this._handleCardClick(this._data));
  }
}


