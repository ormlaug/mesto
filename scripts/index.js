import { initialCards } from "./initial-cards.js";
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { config } from '../utils.js';


const infoEditButton = document.querySelector('.profile__edit-button');
const popupCloseButtonEdit = document.querySelector('.popup__close');
const cardAddButton = document.querySelector('.profile__add-button');

const popupTypeAdd = document.querySelector('.popup_type_add');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypePicture = document.querySelector('.popup_type_picture');

const formCardName = document.querySelector('.form__item_el_card-name');
const formCardLink = document.querySelector('.form__item_el_link');

const nameOriginal = document.querySelector('.profile__name');
const jobOriginal = document.querySelector('.profile__text');
const nameInput = document.querySelector('.form__item_el_name');
const jobInput = document.querySelector('.form__item_el_text');
const formEdit = popupTypeEdit.querySelector('.form');
const formAdd = popupTypeAdd.querySelector('.form');

const cardList = document.querySelector('.cards__list');
const template = document.querySelector('.template');
const popupCloseButtonAdd = popupTypeAdd.querySelector('.popup__close');
const popupCloseButtonPicture = popupTypePicture.querySelector('.popup__close');
const popupPhoto = popupTypePicture.querySelector('.popup__image');
const popupSubtitle = popupTypePicture.querySelector('.popup__subtitle');
const popupAddSubmitBtn = popupTypeAdd.querySelector('.form__save-button');

const cardFormValidator = new FormValidator(config, popupTypeAdd);
const profileFormValidator = new FormValidator(config, popupTypeEdit);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

function openPopup(popup) {
  popup.classList.add('popup_active');
  popup.addEventListener('click', clickOverlayToClosePopup);
  document.addEventListener('keydown', tapEscToClosePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  popup.removeEventListener('click', clickOverlayToClosePopup);
  document.removeEventListener('keydown', tapEscToClosePopup);
}

function openPopupTypePicture(data) {
  popupSubtitle.textContent = data.name;
  popupPhoto.src = data.link;
  popupPhoto.alt = data.name;

  openPopup(popupTypePicture);
}

infoEditButton.addEventListener('click', function() {
  nameInput.value = nameOriginal.textContent;
  jobInput.value = jobOriginal.textContent;
  openPopup(popupTypeEdit);
});

cardAddButton.addEventListener('click', function() {
  formCardName.value ='';
  formCardLink.value ='';
  cardFormValidator.disableSubmitButton(config.inactiveButtonClass, popupAddSubmitBtn);
  openPopup(popupTypeAdd);
});

function formSaveHandler (evt) {
  evt.preventDefault();
  nameOriginal.textContent = nameInput.value;
  jobOriginal.textContent = jobInput.value;
  closePopup(popupTypeEdit);
}

function cardSaveHandler (evt) {
  evt.preventDefault();
  const newCard = getElement(
    {
      name: formCardName.value, 
      link: formCardLink.value
    });
  cardList.prepend(newCard);
  closePopup(popupTypeAdd);
};

function clickOverlayToClosePopup (evt) {
  const popupOpened = document.querySelector('.popup_active');
  if (evt.target.classList.contains('popup')) {
    closePopup(popupOpened);
  }
}

function tapEscToClosePopup (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_active');
    if (popupOpened !==null) {
      closePopup(popupOpened);
    }
  }
}

popupCloseButtonEdit.addEventListener('click', () => closePopup(popupTypeEdit));
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));
popupCloseButtonPicture.addEventListener('click', () => closePopup(popupTypePicture));
formEdit.addEventListener('submit', formSaveHandler);
formAdd.addEventListener('submit', cardSaveHandler);

initialCards.forEach((item) => {
  const card = new Card(item, openPopupTypePicture);
  const cardElement = card.generateCard();
  cardList.append(cardElement);
});