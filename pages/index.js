
import { initialCards } from "../components/initial-cards.js";
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import {
  config,
  infoEditButton,
  popupCloseButtonEdit,
  cardAddButton,
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
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo, UserInfo } from "../components/UserInfo.js";


const addFormValidator = new FormValidator(config, popupTypeAdd);
const editFormValidator = new FormValidator(config, popupTypeEdit);
addFormValidator.enableValidation();
editFormValidator.enableValidation();


const cardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
      const card = createCard(item);
      cardList.addItem(card);
   }}, 
 '.cards__list');

function createCard(item) {
  const card = new Card(item, '.template', {handleCardClick: () => {
    popupTypePicture.open(item)
  }});
  const cardElement = card.generateCard(); 
  return cardElement;
}

const UserInfo = new UserInfo(
  nameSelector, jobSelector
);

