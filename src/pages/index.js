import '../pages/index.css';

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import popupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import { 
  cardAddButton,
  infoEditButton,
  nameInput,
  jobInput,
  config,
  popupTypeAdd,
  popupTypeEdit,
  popupTypeAvatar,
  popupTypeDelete,
  avatarEditButton
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
      popupWithDeleteCardHandler.open();
      popupWithDeleteCardHandler.setSubmitAction(() => {
        api.deleteCard(card)
          .then((res) => {
            card.deleteCard(res);
            popupWithDeleteCardHandler.close();
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
  .then((data) => {
    user.setUserInfo({name: data.name, about: data.about, avatar: data.avatar});
  })
  .catch((err) => console.log(err))

const popupWithEditInfoForm = new PopupWithForm('.popup_type_edit', (data) => {
  popupWithEditInfoForm.displayLoading(true, 'Сохранить', 'Сохранение...')
  api.setUserInfo(data)
    .then((res) => {
      user.setUserInfo(res);
      popupWithEditInfoForm.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithEditInfoForm.displayLoading(false, 'Сохранить', 'Сохранение...')
    })
});

const popupWithEditAvatarForm = new PopupWithForm('.popup_type_avatar', (item) => {
  popupWithEditAvatarForm.displayLoading(true, 'Сохранить', 'Cохранение...')
  api.editAvatar(item.avatar)
    .then((res) => {
      user.setUserInfo(res);
      popupWithEditAvatarForm.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupWithEditAvatarForm.displayLoading(false, 'Сохранить', 'Сохранение...')
    })
})

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

avatarEditButton.addEventListener('click', function() {
  popupWithEditAvatarForm.open();
  avatarFormValidator.disableSubmitButton(config.submitButtonSelector);
})

popupWithPicture.setEventListeners();
popupWithAddCardForm.setEventListeners();
popupWithEditInfoForm.setEventListeners();
popupWithDeleteCardHandler.setEventListeners();
popupWithEditAvatarForm.setEventListeners();

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    user.setUserInfo(userData);
    cardList.renderItems(cards);
  })
  .catch((err) => console.log(err));



