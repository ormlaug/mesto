const infoEditButton = document.querySelector('.profile__edit-button');
const popupCloseButtonEdit = document.querySelector('.popup__close');
const cardAddButton = document.querySelector('.profile__add-button');

const popupTypeAdd = document.querySelector('.popup_type_add');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypePicture = document.querySelector('.popup_type_picture');

const formCardName = document.querySelector('.form__item_el_card-name');
const formCardLink = document.querySelector('.form__item_el_link');

const nameOriginal = document.querySelector('.profile__name');
const jobOriginal = document.querySelector('.profile__text');
const nameInput = document.querySelector('.form__item_el_name');
const jobInput = document.querySelector('.form__item_el_text');
const formEdit = document.querySelector('.form_type_edit');
const formAdd = document.querySelector('.form_type_add');

const cardList = document.querySelector('.cards__list');
const template = document.querySelector('.template');
const popupCloseButtonAdd = popupTypeAdd.querySelector('.popup__close');
const popupCloseButtonPicture = popupTypePicture.querySelector('.popup__close');
const popupPhoto = popupTypePicture.querySelector('.popup__image');

function render() {
  const cards = initialCards.map(getElement);
  cardList.append(...cards);
}

function getElement(item) {
  const pageElementsTemplate = template.content.cloneNode(true);
  const cardTitle = pageElementsTemplate.querySelector('.cards__title');
  const cardPhoto = pageElementsTemplate.querySelector('.cards__photo');
  const likeButton = pageElementsTemplate.querySelector('.cards__like-button');
  const deleteButton = pageElementsTemplate.querySelector('.cards__delete-button');

  cardTitle.textContent = item.name;
  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;

  deleteButton.addEventListener('click', function (evt) {
    const listItem = evt.target.closest('.cards__item');
    listItem.remove();
  });

  likeButton.addEventListener('click', function(evt) {
    const like = evt.target.closest('.cards__like-button');
    likeButton.classList.toggle('cards__like-button_active');
  });

  cardPhoto.addEventListener('click', openPopupTypePicture);

  return pageElementsTemplate;
}

function openPopup(popup) {
  popup.classList.add('popup_active');
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
}

function openPopupTypePicture(item) {
  const listItem = item.target.closest('.cards__item');
  const cardTitle = listItem.querySelector('.cards__title');
  const cardPhoto = listItem.querySelector('.cards__photo');
  const popupSubtitle = popupTypePicture.querySelector('.popup__subtitle');

  popupSubtitle.textContent = cardTitle.textContent;
  popupPhoto.src = cardPhoto.src;
  popupPhoto.alt = cardPhoto.alt;

  openPopup(popupTypePicture);
}

infoEditButton.addEventListener('click', function() {
  nameInput.value = nameOriginal.textContent;
  jobInput.value = jobOriginal.textContent;
  openPopup(popupTypeEdit);
});

cardAddButton.addEventListener('click', function() {
  formCardName.value ='';
  formCardLink.value ='';
  openPopup(popupTypeAdd);
});

function formSaveHandler (evt) {
  evt.preventDefault();
  nameOriginal.textContent = nameInput.value;
  jobOriginal.textContent = jobInput.value;
  closePopup(popupTypeEdit);
}

function cardSaveHandler (evt) {
  evt.preventDefault();
  const newCard = getElement(
    {
      name: formCardName.value, 
      link: formCardLink.value
    });
  cardList.prepend(newCard);
  closePopup(popupTypeAdd);
};

popupCloseButtonEdit.addEventListener('click', () => closePopup(popupTypeEdit));
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupTypeAdd));
popupCloseButtonPicture.addEventListener('click', () => closePopup(popupTypePicture));
formEdit.addEventListener('submit', formSaveHandler);
formAdd.addEventListener('submit', cardSaveHandler);

render();