'use strict';

export default class App {
  constructor($app) {
    this.$app = $app;
    this.render();
    this.setEvent();
  }

  template() {
    return `
      <h1 class='title flex justify-center'>Cookie</h1>
      <main class='container'>
      <table>
      <thead>
        <tr>
          <th>목록</th>
          <th>버튼</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tbody_tr">
          <td class="td_text">쿠키 확인</td>
          <td>
            <button class="td_btn" name='getCookie'>쿠키 확인</button>
          </td>
        </tr>
        <tr class="tbody_tr">
          <td class="td_text">쿠키 생성하기</td>
          <td>
            <button class="td_btn" name='setCookie'>쿠키 생성하기</button>
          </td>
        </tr>
        <tr class="tbody_tr">
          <td class="td_text">쿠키 삭제하기</td>
          <td>
            <button class="td_btn" name='deleteCookie'>쿠키 삭제하기</button>
          </td>
        </tr>
      </tbody>
    </table>
      </main>
    `;
  }

  render() {
    this.$app.innerHTML = this.template();
  }

  setEvent() {
    const table = document.querySelector('table');

    table.addEventListener('click', (e) => {
      const name = e.target.name;
      if (name === 'getCookie') {
        this.getCookie();
      } else if (name === 'deleteCookie') {
        this.deleteCookie();
      } else {
        this.setCookie();
      }
    });
  }

  getCookie() {
    const cookie = document.cookie;
    alert(cookie ? `${cookie}` : '쿠키 없음!');
  }

  setCookie() {
    let expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);
    document.cookie = `id=newCookie; expires=${expiration}`;
    alert('쿠키 생성 완료!');
  }

  deleteCookie() {
    let expiration = new Date();
    expiration.setDate(expiration.getDate() - 1);
    document.cookie = `id=; expires=${expiration}`;
    alert('쿠키 삭제 완료!');
  }
}
