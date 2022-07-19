(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.items,o=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){var o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(){return document.querySelector(u._templateSelector).content.querySelector(".cards__item").cloneNode(!0)},(o="_getTemplate")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._data=t,this._name=t.name,this._link=t.link,this._templateSelector=n,this._handleCardClick=r}var t,r;return t=e,(r=[{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handleDeleteButton()})),this._likeButton.addEventListener("click",(function(){e._handleLikeButton()})),this._cardPhoto.addEventListener("click",(function(){return e._handleCardClick(e._data)}))}},{key:"_handleLikeButton",value:function(){this._likeButton.classList.toggle("cards__like-button_active")}},{key:"_handleDeleteButton",value:function(){this._element.remove()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardPhoto=this._element.querySelector(".cards__photo"),this._likeButton=this._element.querySelector(".cards__like-button"),this._deleteButton=this._element.querySelector(".cards__delete-button"),this._element.querySelector(".cards__title").textContent=this._name,this._cardPhoto.src=this._link,this._cardPhoto.alt=this._name,this._setEventListeners(),this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),i(this,"_handleCloseClick",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&n.close()})),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleCloseClick)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imageOfThePopup=t._popup.querySelector(".popup__image"),t._subtitleOfThePopup=t._popup.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"open",value:function(e){this._imageOfThePopup.src=e.link,this._subtitleOfThePopup.alt=e.name,this._subtitleOfThePopup.textContent=e.name,s(d(u.prototype),"open",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function k(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var n,r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(){var e={};return n._inputList.forEach((function(t){e[t.name]=t.value})),e},(o="_getInputValues")in(r=S(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._handleSubmit=t,n._popupForm=n._popup.querySelector(".form"),n._inputList=Array.from(n._popup.querySelectorAll(".form__item")),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;m(g(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){m(g(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.name,r=t.about;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__save-button",inactiveButtonClass:"form__save-button_disabled",inputErrorClass:"form__item_type_error",errorClass:"form__error_on"},P=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__add-button"),L=document.querySelector(".popup_type_add"),q=document.querySelector(".popup_type_edit"),B=document.querySelector(".popup_type_picture"),I=(B.querySelector(".popup__image"),B.querySelector(".popup__subtitle"),Array.from(document.querySelectorAll(".popup")),document.querySelector(".form__item_el_card-name"),document.querySelector(".form__item_el_link"),document.querySelector(".form__item_el_name")),T=document.querySelector(".form__item_el_text");function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}q.querySelector(".form"),L.querySelector(".form"),document.querySelector(".cards__list");var R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(n.querySelectorAll("".concat(t.inputSelector)))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));t.classList.add(this._errorClass),t.textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));t.textContent="",e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableSubmitButton",value:function(){var e=this._formElement.querySelector(this._submitButtonSelector);e.classList.add(this._inactiveButtonClass),e.setAttribute("disabled","")}},{key:"_enableSubmitButton",value:function(e){e.classList.remove(this._inactiveButtonClass),e.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput()?this.disableSubmitButton(e):this._enableSubmitButton(e)}},{key:"_setEventListeners",value:function(){var e=this,t=this._formElement.querySelector(this._submitButtonSelector);this._inputList.forEach((function(n){n.addEventListener("input",(function(){e._checkInputValidity(n),e._toggleButtonState(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers=n}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"365d1fcf-c146-4ff9-b926-f9497a7fa8e2","Content-Type":"application/json"}});var D=new R(j,L);function V(e){return new r(e,".template",(function(){return F.open({name:e.name,link:e.link})})).generateCard(e)}D.enableValidation(),new R(j,q).enableValidation();var U=new t({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=V(e);U.addItem(t)}},".cards__list"),F=new y(".popup_type_picture"),z=new w(".popup_type_add",(function(e){U.addItem(V({name:e.place,link:e.link})),z.close()})),N=new E({name:".profile__name",about:".profile__text"}),G=new w(".popup_type_edit",(function(e){N.setUserInfo(e),G.close()}));C.addEventListener("click",(function(){z.open(),D.disableSubmitButton(j.submitButtonSelector)})),P.addEventListener("click",(function(){var e=N.getUserInfo();I.value=e.name,T.value=e.about,G.open()})),F.setEventListeners(),z.setEventListeners(),G.setEventListeners(),U.renderItems()})();