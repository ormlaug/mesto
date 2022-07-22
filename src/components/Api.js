export default class Api {
    constructor(baseUrl) {
      this._url = baseUrl;
      this._headers = {
          authorization: '365d1fcf-c146-4ff9-b926-f9497a7fa8e2',
          'Content-Type': 'application/json'
      };
    }
  
    getInitialCards() {
      return fetch(`${this._url}/cards`, {
        method: 'GET',
        headers: this._headers
      })
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Вот незадача, ошибка: ${res.status}`);
      });
    }
  
    // другие методы работы с API
    setUserInfo(data) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Вот незадача, ошибка: ${res.status}`);
      })
    }

    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Вот незадача, ошибка: ${res.status}`);
        });
    }

    addNewCard(item) {
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: item.name,
          link: item.link
        })
      })
    }

    handleLikeButton(item) {
      return fetch(`${this._url}/cards/${item._id}/likes`, {
        method: 'PUT',
        headers: this._headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Вот незадача, ошибка: ${res.status}`);
      });
    }


  }