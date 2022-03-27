let editInfoButton = document.querySelector('.profile__edit-button');
let modalWindow = document.querySelector('.popup');
let modalCloseButton = modalWindow.querySelector('.popup__close');

function toggleModalWindow() {
  modalWindow.classList.toggle('popup_active');
}

editInfoButton.addEventListener('click', toggleModalWindow);
modalCloseButton.addEventListener('click', toggleModalWindow);

let nameOriginal = document.querySelector('.profile__name');
let jobOriginal = document.querySelector('.profile__text');

let nameInput = modalWindow.querySelector('.popup__item_el_name');
let jobInput = modalWindow.querySelector('.popup__item_el_text');

let saveButton = modalWindow.querySelector('.popup__save-button');

function formHandler (evt) {
  evt.preventDefault();
  nameInput.value = nameOriginal.textContent;
  jobInput.value = jobOriginal.textContent;
}

editInfoButton.addEventListener('click', formHandler);

function formSaveHandler (evt) {
  evt.preventDefault();
  nameOriginal.textContent = nameInput.value;
  jobOriginal.textContent = jobInput.value;
}

saveButton.addEventListener('click', formSaveHandler);
saveButton.addEventListener('click', toggleModalWindow);