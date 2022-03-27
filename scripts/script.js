let editInfoButton = document.querySelector('.profile__edit-button');
let modalWindow = document.querySelector('.popup');
let modalCloseButton = modalWindow.querySelector('.popup__close');

function toggleModalWindow() {
  modalWindow.classList.toggle('popup_active');
}

editInfoButton.addEventListener('click', toggleModalWindow);
modalCloseButton.addEventListener('click', toggleModalWindow);