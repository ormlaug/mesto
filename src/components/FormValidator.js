export class FormValidator {
  constructor (config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(formElement.querySelectorAll(`${config.inputSelector}`));
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  disableSubmitButton() {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute('disabled', '');
  }

  _enableSubmitButton(buttonElement) {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
  
  _toggleButtonState(buttonElement) {
    if(this._hasInvalidInput()) {
      this.disableSubmitButton(buttonElement);
    } else {
      this._enableSubmitButton(buttonElement);
    }
  }

  _setEventListeners() {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      console.log(inputElement)
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(buttonElement);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
