let editInfoButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close');
let nameOriginal = document.querySelector('.profile__name');
let jobOriginal = document.querySelector('.profile__text');
let nameInput = popup.querySelector('.form__item_el_name');
let jobInput = popup.querySelector('.form__item_el_text');
let formPopup = popup.querySelector('.form');

function togglePopup() {
  popup.classList.toggle('popup_active');
  if (popup.classList.contains('popup_active')) {
    nameInput.value = nameOriginal.textContent;
    jobInput.value = jobOriginal.textContent;
  }
}

function formSaveHandler (evt) {
  evt.preventDefault();
  nameOriginal.textContent = nameInput.value;
  jobOriginal.textContent = jobInput.value;
  togglePopup();
}

editInfoButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);
formPopup.addEventListener('submit', formSaveHandler);