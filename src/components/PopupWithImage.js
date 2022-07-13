import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageOfThePopup = this._popup.querySelector('.popup__image');
    this._subtitleOfThePopup = this._popup.querySelector('.popup__subtitle');
  }

  open(item) {
    this._imageOfThePopup.src = item.link;
    this._subtitleOfThePopup.alt = item.name;
    this._subtitleOfThePopup.textContent = item.name;
    super.open();
  }
}