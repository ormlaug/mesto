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
      const newName = document.querySelector('.form__item_el_name');
      const newJob = document.querySelector('.form__item_el_text');
      this._name.textContent = newName.value;
      this._job.textContent = newJob.value;
    }
  }