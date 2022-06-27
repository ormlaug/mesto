export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
      }
    }

  _handleCloseClick = () => {
    this.close();
  }

  setEventListeners() {
    this._popup = document.querySelector(this._popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');

    this._popup.addEventListener('mousedown', this._handleCloseClick);
    this._closeButton.addEventListener('cklick', this._handleCloseClick);
  }

  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }
}