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

const editInfoButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup_type_edit');
const popupCloseButton = popup.querySelector('.popup__close');

const nameOriginal = document.querySelector('.profile__name');
const jobOriginal = document.querySelector('.profile__text');
const nameInput = popup.querySelector('.form__item_el_name');
const jobInput = popup.querySelector('.form__item_el_text');
const formPopup = popup.querySelector('.form');

const cardList = document.querySelector('.cards__list');
const template = document.querySelector('.template');

function render() {
  const html = initialCards.map(getElement);
  cardList.append(...html);
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const cardTitle = getElementTemplate.querySelector('.cards__title');
  const cardPhoto = getElementTemplate.querySelector('.cards__photo');
  cardTitle.textContent = item.name;
  cardPhoto.src = item.link;
  return getElementTemplate;
}

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

render();