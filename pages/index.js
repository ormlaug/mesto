import Section from "../components/Section.js";
import { initialCards } from "../components/initial-cards.js";
import Card from "../components/Card.js";
import popupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { 
  cardAddButton,
  infoEditButton,
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

const popupWithAddCardForm = new PopupWithForm('.popup_type_add', () => {console.log("handleASubmit");
  popupWithAddCardForm.close();
});

const popupWithEditInfoForm = new PopupWithForm('.popup_type_edit', () => {console.log("handleESubmit")
  popupWithEditInfoForm.close();
});

cardAddButton.addEventListener('click', function() {
  popupWithAddCardForm.open();
});

infoEditButton.addEventListener('click', function() {
  popupWithEditInfoForm.open();
})

popupWithPicture.setEventListeners();
popupWithAddCardForm.setEventListeners();
popupWithEditInfoForm.setEventListeners();

cardList.renderItems();



