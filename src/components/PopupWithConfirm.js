import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.form');
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    this._popupForm .addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}

