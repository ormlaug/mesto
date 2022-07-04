
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
import { PopupWithForm, PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo, UserInfo } from "../components/UserInfo.js";


const addFormValidator = new FormValidator(config, popupTypeAdd);
const editFormValidator = new FormValidator(config, popupTypeEdit);
addFormValidator.enableValidation();
editFormValidator.enableValidation();


const cardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
      const cards = new Card(item, '.cards');
      const card = cards.generateCard();
      cardList.addItem(card);
   }}, 
 '.cards__list');

cardList.renderer();

const UserInfo = new UserInfo(
  nameSelector, jobSelector
);

const popupWithEditForm = new PopupWithForm('.popup_type_edit', )
const PopupWithAddForm = new PopupWithForm('.popup_type_add', )



