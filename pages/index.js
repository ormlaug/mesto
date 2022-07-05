import { Section } from "../components/Section.js";
import { initialCards } from "../components/initial-cards.js";
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import {

} from '../utils/utils.js';
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";


const cardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
    const card = new Card(item, '.template', () => {console.log("cardClickHandler")});
    return card.generateCard();
  },
},
'.cards__list');


const popupTypeAdd = new Popup('.popup_type_add');
const popupTypeEdit = new Popup('.popup_type_edit');
const popupTypePicture = new PopupWithImage('.popup_type_picture');


const popupWithEditForm = new PopupWithForm(editPopupSelector, (item) => {
  UserInfo.setUserInfo(item);
  popupWithEditForm.close();
});

const popupWithAddForm = new PopupWithForm(addPopupSelector, config, handleCardsSubmit);
popupWithAddForm.setEventListeners();

const user = new UserInfo(
  nameSelector, jobSelector
);

const addFormValidator = new FormValidator(config, popupTypeAdd);
const editFormValidator = new FormValidator(config, popupTypeEdit);

popupWithAddForm.setEventListeners();
popupWithEditForm.setEventListeners();

addFormValidator.enableValidation();
editFormValidator.enableValidation();

cardList.renderItems();



