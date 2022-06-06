export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
      }
    }

  open() {
    this._popupSelector.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
      if (evt.target.classList.contains('popup_active')) {
        this.close();
      }
    });
  }
}