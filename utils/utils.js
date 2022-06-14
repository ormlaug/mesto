export const config = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_on'
};

export const infoEditButton = document.querySelector('.profile__edit-button');
const popupCloseButtonEdit = document.querySelector('.popup__close');
const cardAddButton = document.querySelector('.profile__add-button');

export const popupTypeAdd = document.querySelector('.popup_type_add');
export const popupTypeEdit = document.querySelector('.popup_type_edit');
export const popupTypePicture = document.querySelector('.popup_type_picture');

const formCardName = document.querySelector('.form__item_el_card-name');
const formCardLink = document.querySelector('.form__item_el_link');

export const nameOriginal = document.querySelector('.profile__name');
export const jobOriginal = document.querySelector('.profile__text');
export const nameInput = document.querySelector('.form__item_el_name');
export const jobInput = document.querySelector('.form__item_el_text');
export const formEdit = popupTypeEdit.querySelector('.form');
export const formAdd = popupTypeAdd.querySelector('.form');

const cardList = document.querySelector('.cards__list');
const templateSelector = document.querySelector('.template');
const popupCloseButtonAdd = popupTypeAdd.querySelector('.popup__close');
const popupCloseButtonPicture = popupTypePicture.querySelector('.popup__close');
/*imaageSelector */ export const popupPhoto = popupTypePicture.querySelector('.popup__image');
/*captionSelector*/ export const popupSubtitle = popupTypePicture.querySelector('.popup__subtitle');
export const popupAddSubmitBtn = popupTypeAdd.querySelector('.form__save-button');