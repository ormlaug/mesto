export class FormValidator {
  constructor (config, formElement) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(`${config.inputSelector}`));
  }

  _showError(formElement, inputElement, inputErrorClass, errorClass) {
    const inputWithError = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputWithError.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
    inputWithError.classList.add(this._errorClass);
  }

  _hideError(formElement, inputElement, inputErrorClass, errorClass) {
    const inputWithError = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputWithError.textContent = '';
    inputElement.classList.remove(this._inputErrorClass);
    inputWithError.classList.remove(this._errorClass);
  }

  _checkInputValidity(event, formElement, inputElement) {
    if(!inputElement.validity.valid) {
      this._showError(formElement, inputElement, this._inputErrorClass, this._errorClass);
    } else {
      this._hideError(formElement, inputElement, this._inputErrorClass, this._errorClass);
    }
  }
  
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  disableSubmitButton(buttonElement, inactiveButtonClass) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute('disabled', '');
  }

  enableSubmitButton(buttonElement, inactiveButtonClass) {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
  
  _toggleButtonState(buttonElement, inactiveButtonClass) {
    if(this._hasInvalidInput()) {
      this.disableSubmitButton(buttonElement, inactiveButtonClass);
    } else {
      this.enableSubmitButton(buttonElement, inactiveButtonClass);
    }
  }

  _setEventListeners(config, formElement) {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(config, formElement, inputElement);
        this._toggleButtonState(buttonElement, inactiveButtonClass);
      });
    });
  }

  enableValidation() {
    this._setEventListeners(this._config, this._formElement);
  }
}
