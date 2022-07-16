import '../pages/index.css';

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import popupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { 
  initialCards,
  cardAddButton,
  infoEditButton,
  nameInput,
  jobInput,
  config,
  popupTypeAdd,
  popupTypeEdit
 } from '../utils/constants.js';
 import { FormValidator } from "../components/FormValidator.js";

const cardFormValidator = new FormValidator(config, popupTypeAdd);
cardFormValidator.enableValidation();

const infoFormValidator = new FormValidator(config, popupTypeEdit);
infoFormValidator.enableValidation();

function createCard(item) {
  const card = new Card(item, '.template', () => popupWithPicture.open({name: item.name, link: item.link}));
  return card.generateCard(item);
}

const cardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card);
  },
},
'.cards__list');

const popupWithPicture = new popupWithImage('.popup_type_picture');

const popupWithAddCardForm = new PopupWithForm('.popup_type_add', (item) => {
  cardList.addItem(item);
  popupWithAddCardForm.close();
});

const user = new UserInfo({ name: '.profile__name', about: '.profile__text'});

const popupWithEditInfoForm = new PopupWithForm('.popup_type_edit', (item) => {
  user.setUserInfo(item);
  popupWithEditInfoForm.close();
});

cardAddButton.addEventListener('click', function() {
  cardFormValidator.disableSubmitButton(cardAddButton);
  popupWithAddCardForm.open();
});

infoEditButton.addEventListener('click', function() {
  const userData = user.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupWithEditInfoForm.open();
});

popupWithPicture.setEventListeners();
popupWithAddCardForm.setEventListeners();
popupWithEditInfoForm.setEventListeners();

cardList.renderItems();



