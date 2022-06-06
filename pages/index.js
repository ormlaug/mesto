import { initialCards } from "../components/initial-cards.js";
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { config } from '../utils.js';
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";


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
const templateSelector = document.querySelector('.template');
const popupCloseButtonAdd = popupTypeAdd.querySelector('.popup__close');
const popupCloseButtonPicture = popupTypePicture.querySelector('.popup__close');
const popupPhoto = popupTypePicture.querySelector('.popup__image');
const popupSubtitle = popupTypePicture.querySelector('.popup__subtitle');
const popupAddSubmitBtn = popupTypeAdd.querySelector('.form__save-button');

const addFormValidator = new FormValidator(config, popupTypeAdd);
const editFormValidator = new FormValidator(config, popupTypeEdit);
addFormValidator.enableValidation();
editFormValidator.enableValidation();




infoEditButton.addEventListener('click', function() {
  nameInput.value = nameOriginal.textContent;
  jobInput.value = jobOriginal.textContent;
  openPopup(popupTypeEdit);
});

cardAddButton.addEventListener('click', function() {
  formCardName.value ='';
  formCardLink.value ='';
  addFormValidator.disableSubmitButton(popupAddSubmitBtn);
  openPopup(popupTypeAdd);
});

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  nameOriginal.textContent = nameInput.value;
  jobOriginal.textContent = jobInput.value;
  closePopup(popupTypeEdit);
}

function handleNewCardSubmit (evt) {
  evt.preventDefault();
  cardList.prepend(createCard({name: formCardName.value, link: formCardLink.value}));
  closePopup(popupTypeAdd);
};



function createCard(item) {
  const card = new Card(item, '.template' ,openPopupTypePicture);
  const cardElement = card.generateCard(); 
  return cardElement;
}

popupCloseButtonEdit.addEventListener('click', () => closePopup(popupTypeEdit));
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));
popupCloseButtonPicture.addEventListener('click', () => closePopup(popupTypePicture));
formEdit.addEventListener('submit', handleProfileFormSubmit);
formAdd.addEventListener('submit', handleNewCardSubmit);

initialCards.forEach((item) => {
  cardList.append(createCard(item));
});