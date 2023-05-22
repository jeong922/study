'use strict';
export default class Storage {
  setLocalStorage(item) {
    localStorage.setItem('items', JSON.stringify(item));
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('items'));
  }
}
