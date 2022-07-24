import '../pages/index.css';

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import popupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
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
    userId,
    () => popupWithPicture.open({name: item.name, link: item.link}),
    {handleLikeButton: (data) => {
      api.likeCard(data)
        .then((res) => card.likeCard(res))
        .catch((err) => console.log(err));
    },
    handleRemoveLike: (data) => {
      api.removeLike(data)
        .then((res) => card.removeLike(res))
        .catch((err) => console.log(err));
    },
    handleDeleteButton: (card) => {
      popupTypeDelete.open();
      popupTypeDelete.setSubmitAction(() => {
        api.deleteCard(card)
          .then(() => {
            card.deleteCard();
            popupTypeDelete.close();
          })
          .catch((err) => console.log(err))
      })
    }}
    );

  return card.generateCard(item);
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
    console.log(res)
    cardList.renderItems(res);
  })
  .catch((err) => console.log(err))

const popupWithPicture = new popupWithImage('.popup_type_picture');
const popupWithDeleteCardHandler = new PopupWithConfirm('.popup_type_delete');


const popupWithAddCardForm = new PopupWithForm('.popup_type_add', (item) => {
    popupWithAddCardForm.displayLoading(true, 'Создать', 'Cохранение...')
    api.addNewCard(item)
      .then((res) => {
        popupWithAddCardForm.close();
        return cardList.addItem(createCard(res));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupWithAddCardForm.displayLoading(false, 'Создать', 'Cохранение...')
      })
  });

const user = new UserInfo({ name: '.profile__name', about: '.profile__text', avatar: '.profile__avatar'});

api.getUserInfo()
  .then(data => {
    user.setUserInfo({name: data.name, about: data.about});
    user.setAvatar(data.avatar)
  })
  .catch((err) => console.log(err))

const popupWithEditInfoForm = new PopupWithForm('.popup_type_edit', (item) => {
  popupWithEditInfoForm.displayLoading(true, 'Сохранить', 'Сохранение')
  api.setUserInfo(data)
    .then(() => {
      popupWithEditInfoForm.close();
      return user.setUserInfo(data);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithEditInfoForm.displayLoading(false, 'Сохранить', 'Сохранение')
    })
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
popupWithDeleteCardHandler.setEventListeners();

//cardList.renderItems();



