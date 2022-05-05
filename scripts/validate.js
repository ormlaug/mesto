const config = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_on'
};

const showError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const inputWithError = formElement.querySelector(`#${inputElement.id}-error`);
  inputWithError.textContent = inputElement.validationMessage;
  inputElement.classList.add(inputErrorClass);
  inputWithError.classList.add(errorClass);
};

const hideError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const inputWithError = formElement.querySelector(`#${inputElement.id}-error`);
  inputWithError.textContent = '';
  inputElement.classList.remove(inputErrorClass);
  inputWithError.classList.remove(errorClass);
};

const checkInputValidity = function (event, formElement, inputElement) {
  if(!inputElement.validity.valid) {
    showError(formElement, inputElement, config.inputErrorClass, config.errorClass);
  } else {
    hideError(formElement, inputElement, config.inputErrorClass, config.errorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
};

const setEventListeners = (object, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(`${config.inputSelector}`));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(object, formElement, inputElement);
      toggleButtonState(inputList, buttonElement, config.inactiveButtonClass);
    });
  });
};

const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(object, formElement);
  });
};

enableValidation(config);
