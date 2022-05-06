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

const disableSubmitButton = (inactiveButtonClass, buttonElement) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.setAttribute('disabled', '');
};

const enableSubmitButton = (inactiveButtonClass, buttonElement) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if(hasInvalidInput(inputList)) {
    disableSubmitButton(inactiveButtonClass, buttonElement);
  } else {
    enableSubmitButton(inactiveButtonClass, buttonElement);
  }
};

const setEventListeners = (config, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(`${config.inputSelector}`));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(config, formElement, inputElement);
      toggleButtonState(inputList, buttonElement, config.inactiveButtonClass);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(config, formElement);
  });
};

enableValidation(config);
