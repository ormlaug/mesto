import Section from "../components/Section.js";
import { initialCards } from "../components/initial-cards.js";
import Card from "../components/Card.js";
import popupWithImage from '../components/PopupWithImage.js';


const cardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
    const card = new Card(item, '.template', () => popupWithPicture.open({name: item.name, link: item.link}));
    return card.generateCard();
  },
},
'.cards__list');

const popupWithPicture = new popupWithImage('.popup_type_picture');


cardList.renderItems();



