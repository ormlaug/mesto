export default class UserInfo {
    constructor({ name: nameSelector, about: jobSelector, avatar: avatarSelector }) {
      this._name = document.querySelector(nameSelector);
      this._job = document.querySelector(jobSelector);
      this._avatar = document.querySelector(avatarSelector);
    }
  
    getUserInfo() {
      const userData = {
        name: this._name.textContent,
        about: this._job.textContent
      };
  
      return userData;
    }
  
    setUserInfo(data) {
      this._name.textContent = data.name;
      this._job.textContent = data.about;
    }

    setAvatar(url) {
      this._avatar.src = url;
    }
  }