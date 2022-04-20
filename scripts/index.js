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
const popupCloseButtonEdit = document.querySelector('.popup__close');
const addCardButton = document.querySelector('.profile__add-button');

const popupTypeAdd = document.querySelector('.popup_type_add');
const popupTypeEdit = document.querySelector('.popup_type_edit');

const formCardName = document.querySelector('.form__item_el_card-name');
const formCardLink = document.querySelector('.form__item_el_link');

const nameOriginal = document.querySelector('.profile__name');
const jobOriginal = document.querySelector('.profile__text');
const nameInput = document.querySelector('.form__item_el_name');
const jobInput = document.querySelector('.form__item_el_text');
const formPopup = document.querySelector('.form');

const cardList = document.querySelector('.cards__list');
const template = document.querySelector('.template');
const popupCloseButtonAdd = popupTypeAdd.querySelector('.popup__close');

function render() {
  const html = initialCards.map(getElement);
  cardList.append(...html);
}

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const cardTitle = getElementTemplate.querySelector('.cards__title');
  const cardPhoto = getElementTemplate.querySelector('.cards__photo');
  const likeButton = getElementTemplate.querySelector('.cards__like-button');
  const deleteButton = getElementTemplate.querySelector('.cards__delete-button');

  cardTitle.textContent = item.name;
  cardPhoto.src = item.link;

  deleteButton.addEventListener('click', cardRemoveHandler);

  likeButton.addEventListener('click', function(evt) {
    const element = evt.target.closest('.cards__like-button');
    likeButton.classList.toggle('cards__like-button_active');
  });

  return getElementTemplate;
}

function cardRemoveHandler(evt) {
  const listItem = evt.target.closest('.cards__item');
  listItem.remove();
}


editInfoButton.addEventListener('click', function() {
  if (popupTypeEdit.classList.contains('popup_active')) {
    nameInput.value = nameOriginal.textContent;
    jobInput.value = jobOriginal.textContent;
  }
  openPopup(popupTypeEdit);
});

function openPopup(popup) {
  popup.classList.add('popup_active');
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
}

addCardButton.addEventListener('click', function() {
  formCardName.value ='';
  formCardLink.value ='';
  openPopup(popupTypeAdd);
});

function formSaveHandler (evt) {
  evt.preventDefault();
  nameOriginal.textContent = nameInput.value;
  jobOriginal.textContent = jobInput.value;
  closePopup();
}

popupCloseButtonEdit.addEventListener('click', () => closePopup(popupTypeEdit));
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));
formPopup.addEventListener('submit', formSaveHandler);

render();