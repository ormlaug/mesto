export default class UserInfo {
    constructor(nameSelector, jobSelector) {
      this._name = document.querySelector(nameSelector);
      this._job = document.querySelector(jobSelector);
    }
  
    getUserInfo() {
      const userData = {
        name: this._name.textContent,
        job: this._job.textContent,
      };
  
      return userData;
    }
  
    setUserInfo(item) {
      this._name.textContent = item['name-input'];
      this._job.textContent = item['about-input'];
    }
  }