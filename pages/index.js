
import { initialCards } from "../components/initial-cards.js";
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import {
  config,
  cardsListSelector,
  addPopupSelector,
  editPopupSelector,

  popupTypeAdd,
  popupTypeEdit,
  popupTypePicture,
  nameOriginal,
  jobOriginal,
  nameInput,
  jobInput ,
  formEdit,
  formAdd,
  popupPhoto,
  popupSubtitle,
  popupAddSubmitBtn,
  cardList,
} from '../utils/utils.js';
import { Section } from "../components/Section.js";
import { PopupWithForm, PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo, UserInfo } from "../components/UserInfo.js";


const addFormValidator = new FormValidator(config, popupTypeAdd);
const editFormValidator = new FormValidator(config, popupTypeEdit);
addFormValidator.enableValidation();
editFormValidator.enableValidation();


const createCard = (item) => {
  const card = new Card({item}, cardSelector, openpopupTypePicture);
  return card.generateCard();
}

const cardList = new Section({ 
  items: initialCards, 
  renderer: createCard,
},
cardsListSelector);

const handleCardsSubmit = (item) => {
  cardList.addItem(item);
}

const popupWithEditForm = new PopupWithForm(editPopupSelector, )
const popupWithAddForm = new PopupWithForm(addPopupSelector, config, handleCardsSubmit);
popupWithAddForm.setEventListeners();

const UserInfo = new UserInfo(
  nameSelector, jobSelector
);


createCard.renderer();



