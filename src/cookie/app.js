'use strict';

import MakeCookie from './makeCookie.js';
import Modal from './modal.js';
import Table from './table.js';

export default class App {
  constructor($app) {
    this.$app = $app;
    this.render();
    this.setEvent();
  }

  template() {
    return `
      <h1 class='title'>Cookie</h1>
      <main class='container'>
        <div class='makeCookie'></div>
        <div class='tableContainer'></div>
      </main>
      <div id='modal' class='overlay'></div>
    `;
  }

  render() {
    this.$app.innerHTML = this.template();
    this.checkCookie();
    const modal = document.querySelector('#modal');
    const tableContainer = document.querySelector('.tableContainer');
    const makeCookie = document.querySelector('.makeCookie');
    new Table(tableContainer, {
      getCookie: () => this.getCookie(),
      deleteCookie: () => this.deleteCookie(),
      AllDeleteCookie: () => this.AllDeleteCookie(),
    });
    new Modal(modal, {
      setCookie: (name, value, expire) => this.setCookie(name, value, expire),
    });
    new MakeCookie(makeCookie, {
      setCookie: (name, value, expire) => this.setCookie(name, value, expire),
    });
  }

  checkCookie() {
    const cookie = document.cookie.split('; ').find((v) => v === 'modal=close');
    const modal = document.querySelector('#modal');
    if (cookie) {
      modal.classList.add('modal__close');
    }
  }

  setEvent() {}

  getCookie = () => {
    const cookie = document.cookie;
    alert(cookie ? `${cookie}` : '저장 된 쿠기 없음!!');
  };

  setCookie = (name, value, expire) => {
    let expiration = new Date();
    expiration.setDate(expiration.getDate() + +expire);
    document.cookie = `${name}=${value};expires=${expiration.toUTCString()}`;
  };

  deleteCookie = () => {
    if (!document.cookie) {
      alert('저장 된 쿠기 없음!');
      return;
    }
    const cookieArr = document.cookie.split('; ').map((v) => v.split('='));
    const name = cookieArr[0][0];
    this.setCookie(name, '', -1);
    alert('쿠키 삭제 완료!');
  };

  AllDeleteCookie = () => {
    const cookie = document.cookie;
    if (!cookie) {
      alert('저장 된 쿠기 없음!');
      return;
    }
    cookie.split('; ').map((v) => {
      const [name, value] = v.split('=');
      this.setCookie(name, '', -1);
    });
    alert('쿠키 전체삭제 완료!');
  };
}
