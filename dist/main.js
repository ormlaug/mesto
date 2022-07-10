(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.items,o=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"addItem",value:function(e){this._renderedItems.unshift({name:e["place-input"],link:e["link-input"]}),this.renderItems()}},{key:"renderItems",value:function(){var e=this;this._container.replaceChildren(),this._renderedItems.forEach((function(t){var n=e._renderer(t);e._container.append(n)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){var o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(){return document.querySelector(u._templateSelector).content.querySelector(".cards__item").cloneNode(!0)},(o="_getTemplate")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._data=t,this._name=t.name,this._link=t.link,this._templateSelector=n,this._handleCardClick=r}var t,r;return t=e,(r=[{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handleDeleteButton()})),this._likeButton.addEventListener("click",(function(){e._handleLikeButton()})),this._cardPhoto.addEventListener("click",(function(){return e._handleCardClick(e._data)}))}},{key:"_handleLikeButton",value:function(){this._likeButton.classList.toggle("cards__like-button_active")}},{key:"_handleDeleteButton",value:function(){this._element.remove()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardPhoto=this._element.querySelector(".cards__photo"),this._likeButton=this._element.querySelector(".cards__like-button"),this._deleteButton=this._element.querySelector(".cards__delete-button"),this._element.querySelector(".cards__title").textContent=this._name,this._cardPhoto.src=this._link,this._cardPhoto.alt=this._name,this._setEventListeners(),this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),i(this,"_handleCloseClick",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&n.close()})),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){document.addEventListener("mousedown",this._handleCloseClick),document.addEventListener("click",this._handleCloseClick)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"open",value:function(e){var t=this._popup.querySelector(".popup__image"),n=this._popup.querySelector(".popup__subtitle");t.src=e.link,n.alt=e.name,n.textContent=e.name,s(d(u.prototype),"open",this).call(this)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function k(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var n,r,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),c=function(){var e={};return Array.from(n._popup.querySelectorAll(".form__item")).forEach((function(t){e[t.name]=t.value})),e},(o="_getInputValues")in(r=S(n=i.call(this,e)))?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._handleSubmit=t,n._popupForm=n._popup.querySelector(".form"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;m(w(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){m(w(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._job=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e["name-input"],this._job.textContent=e["about-input"]}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__save-button",inactiveButtonClass:"form__save-button_disabled",inputErrorClass:"form__item_type_error",errorClass:"form__error_on"},C=document.querySelector(".profile__edit-button"),P=document.querySelector(".profile__add-button"),L=document.querySelector(".popup_type_add"),q=document.querySelector(".popup_type_edit"),B=document.querySelector(".popup_type_picture"),x=(B.querySelector(".popup__image"),B.querySelector(".popup__subtitle"),Array.from(document.querySelectorAll(".popup")),document.querySelector(".form__item_el_card-name"),document.querySelector(".form__item_el_link"),document.querySelector(".form__item_el_name")),I=document.querySelector(".form__item_el_text");function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}q.querySelector(".form"),L.querySelector(".form"),document.querySelector(".cards__list");var T=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=document.querySelector(n),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll("".concat(t.inputSelector)))}var t,n;return t=e,n=[{key:"_showError",value:function(e,t,n,r){var o=this._formElement.querySelector("#".concat(t.id,"-error"));o.textContent=t.validationMessage,t.classList.add(this._inputErrorClass),o.classList.add(this._errorClass)}},{key:"_hideError",value:function(e,t,n,r){var o=this._formElement.querySelector("#".concat(t.id,"-error"));o.textContent="",t.classList.remove(this._inputErrorClass),o.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e,t,n){n.validity.valid?this._hideError(t,n,this._inputErrorClass,this._errorClass):this._showError(t,n,this._inputErrorClass,this._errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableSubmitButton",value:function(e){e.classList.add(this._inactiveButtonClass),e.setAttribute("disabled","")}},{key:"_enableSubmitButton",value:function(e){e.classList.remove(this._inactiveButtonClass),e.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput()?this.disableSubmitButton(e):this._enableSubmitButton(e)}},{key:"_setEventListeners",value:function(e,t){var n=this,r=this._formElement.querySelector(this._submitButtonSelector);this._inputList.forEach((function(o){o.addEventListener("input",(function(){n._checkInputValidity(e,t,o),n._toggleButtonState(r)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(this._config,this._formElement)}}],n&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=new t({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return new r(e,".template",(function(){return D.open({name:e.name,link:e.link})})).generateCard()}},".cards__list"),D=new y(".popup_type_picture"),V=new g(".popup_type_add",(function(e){A.addItem(e),V.close()})),U=new O(".profile__name",".profile__text"),F=new g(".popup_type_edit",(function(e){U.setUserInfo(e),F.close()}));P.addEventListener("click",(function(){V.open()})),C.addEventListener("click",(function(){var e=U.getUserInfo();x.value=e.name,I.value=e.job,F.open()})),D.setEventListeners(),V.setEventListeners(),F.setEventListeners(),new T(j,".popup_type_add").enableValidation(),new T(j,".popup_type_edit").enableValidation(),A.renderItems()})();