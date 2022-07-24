export default class UserInfo {
    constructor({ name: nameSelector, about: jobSelector, avatar: avatarSelector }) {
      this._name = document.querySelector(nameSelector);
      this._job = document.querySelector(jobSelector);
      this._avatar = document.querySelector(avatarSelector);
    }
  
    getUserInfo() {
      const userData = {
        name: this._name.textContent,
        about: this._job.textContent,
        avatar: this._avatar
      };
      return userData;
    }
  
    setUserInfo(data) {
      console.log({data})
      this._name.textContent = data.name;
      this._job.textContent = data.about;
      this._avatar.style.backgroundImage = `url(${data.avatar})`;
    }
  }