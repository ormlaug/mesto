import { Popup } from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleAddCard) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.'));
    this._handleAddCard = handleAddCard;
    this._submitButton = this._popupForm.querySelector('.')
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleAddCard(this._getInputValues());
    });
    super.setEventListeners();
  }
}