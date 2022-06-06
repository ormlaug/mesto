import { Popup } from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageSelector, subtitleSelector) {
    super(popupSelector);
    this._imageSelector = this._popupSelector.querySelector(imageSelector);
    this._subtitleSelector = this._popupSelector.querySelector(subtitleSelector);
  }

  open(item) {
    this._imageSelector.src = item.link;
    this._imageSelector.alt = item.name;
    this._subtitleSelector.textContent = item.name;
    super.open();
  }
}