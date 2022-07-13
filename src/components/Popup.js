export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
      }
    }

  _handleCloseClick = (evt) => {
    if (evt.target.classList.contains('popup')
    || evt.target.classList.contains('popup__close')) {
      this.close();
    }
      
  }

  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    document.addEventListener('mousedown', this._handleCloseClick);
    this._popup.addEventListener('click', this._handleCloseClick);
  }
}