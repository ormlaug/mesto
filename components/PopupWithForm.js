import { Popup } from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.form');
        this._inputList = Array.from(this._popup.querySelector('.form__item'));
    }

        _getInputValues() {
            const popupFormValues = {};
            this._inputList.forEach((input) => {
                this._popupFormValues[input.name] = input.value;
            });
            return this._popupFormValues;
        }

        setEventListeners() {
            super.setEventListeners();
            this._popupForm.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._submitForm(this._getInputValues());
            });
        }

        close() {
            super.close();
            this._popupForm.reset();
        }
    }