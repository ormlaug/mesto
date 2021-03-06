import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupForm = this._popup.querySelector('.form');
    this._inputList = Array.from(this._popup.querySelectorAll('.form__item'));
    this._submitButton = this._popupForm.querySelector('.form__save-button');

  }

  displayLoading(loading, initialTextContent, loadingTextContent) {
      if (!loading) {
        this._submitButton.textContent = initialTextContent;
      } else {
        this._submitButton.textContent = loadingTextContent;
      }
    }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}