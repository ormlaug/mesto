import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(item) {
    const imageOfThePopup = this._popup.querySelector('.popup__image');
    const subtitleOfThePopup = this._popup.querySelector('.popup__subtitle');

    imageOfThePopup.src = item.link;
    subtitleOfThePopup.alt = item.name;
    subtitleOfThePopup.textContent = item.name;
    super.open();
  }
}