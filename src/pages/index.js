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
  popupTypeEdit,
  popupTypeAvatar,
  popupTypeDelete
} from '../utils/constants.js';
import { FormValidator } from "../components/FormValidator.js";
import Api from '../components/Api.js';

let userId = null;

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-45');

//валидация всех инпутов
const cardFormValidator = new FormValidator(config, popupTypeAdd);
cardFormValidator.enableValidation();
const infoFormValidator = new FormValidator(config, popupTypeEdit);
infoFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(config, popupTypeAvatar);
avatarFormValidator.enableValidation();


function createCard(item) {
  const card = new Card(
    item,
    '.template',
    () => popupWithPicture.open({name: item.name, link: item.link}),
    userId,
    handleLikeButton,
    handleDeleteButton);
  return card.generateCard(item);
}

//здесь начать расписывать handleLikeButton и handleDeleteButton
function handleLikeButton(card) {
  api.handleLikeButton()
    .then(res => card.handleLikeButton(res))
    .catch((err) => console.log(err))
}

function handleDeleteButton(card) {
  popupTypeDelete.open();
  popupTypeDelete.setSubmitAction(() => {
    api.deleteCard(card)
      .then(() => {
        card.deleteCard();
        popupTypeDelete.close();
      })
      .catch((err) => console.log(err))
  })
}

const cardList = new Section({ 
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card);
  },
},
'.cards__list');

api.getInitialCards()
  .then(res => {
    cardList.renderItems(res);
  })
  .catch(err => {
    console.log(err)
  })

const popupWithPicture = new popupWithImage('.popup_type_picture');

const popupWithAddCardForm = new PopupWithForm('.popup_type_add', (item) => {
  cardList.addItem(createCard({name: item.place, link: item.link}));
  popupWithAddCardForm.close();
});

const user = new UserInfo({ name: '.profile__name', about: '.profile__text'});

api.getUserInfo()
  .then(data => {
    user.setUserInfo({name: data.name, about: data.about});
    user.setAvatar(data.avatar)
  })
  .catch(err => {
    console.log(err)
  })

const popupWithEditInfoForm = new PopupWithForm('.popup_type_edit', (item) => {
  user.setUserInfo(item);
  popupWithEditInfoForm.close();
});

cardAddButton.addEventListener('click', function() {
  popupWithAddCardForm.open();
  cardFormValidator.disableSubmitButton(config.submitButtonSelector);
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

//cardList.renderItems();



