export default class UserInfo {
    constructor({ name: nameSelector, about: jobSelector }) {
      this._name = document.querySelector(nameSelector);
      this._job = document.querySelector(jobSelector);
    }
  
    getUserInfo() {
      const userData = {
        name: this._name.textContent,
        about: this._job.textContent,
      };
  
      return userData;
    }
  
    setUserInfo(data) {
      this._name.textContent = data.name;
      this._job.textContent = data.about;
    }
  }