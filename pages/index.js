import Section from "../components/Section.js";
import { initialCards } from "../components/initial-cards.js";
import Card from "../components/Card.js";
import popupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { 
  cardAddButton,
  infoEditButton,
  nameInput,
  jobInput
 } from '../utils/utils.js';


const cardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
    const card = new Card(item, '.template', () => popupWithPicture.open({name: item.name, link: item.link}));
    return card.generateCard();
  },
},
'.cards__list');

const popupWithPicture = new popupWithImage('.popup_type_picture');

const popupWithAddCardForm = new PopupWithForm('.popup_type_add', (item) => {
  cardList.addItem(console.log(item));
  popupWithAddCardForm.close();
});

const userID = new UserInfo('.profile__name', '.profile__text');

const popupWithEditInfoForm = new PopupWithForm('.popup_type_edit', (item) => {
  userID.setUserInfo(item);
  popupWithEditInfoForm.close();
});

cardAddButton.addEventListener('click', function() {
  popupWithAddCardForm.open();
});

infoEditButton.addEventListener('click', function() {
  const userData = userID.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupWithEditInfoForm.open();
});

popupWithPicture.setEventListeners();
popupWithAddCardForm.setEventListeners();
popupWithEditInfoForm.setEventListeners();

cardList.renderItems();



