const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardContainer = document.querySelector('.cards__list');
const template = document.querySelector('.template');

function render() {
  const html = initialCards.map(getElement);
  cardContainer.append(...html);
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const cardTitle = getElementTemplate.querySelector('.cards__title');
  const cardPhoto = getElementTemplate.querySelector('.cards__photo');
  cardTitle.textContent = item.name;
  cardPhoto.src = item.link;
  return getElementTemplate;
}

render();


let editInfoButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup_type_edit');
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