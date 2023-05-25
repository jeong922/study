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
      <form>
        <input type='text' name='name' placeholder='name' required />
        <input type='text' name='value' placeholder='value' required />
        <input type='number' name='expire' placeholder='expire' required />
        <button class="td_btn">쿠키 생성하기</button>
      </form>

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
          <td class="td_text">쿠키 삭제하기</td>
          <td>
            <button class="td_btn" name='deleteCookie'>쿠키 삭제하기</button>
          </td>
        </tr>
         <tr class="tbody_tr">
          <td class="td_text">쿠키 전체삭제</td>
          <td>
            <button class="td_btn" name='AllDeleteCookie'>쿠키 전체삭제</button>
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
    const form = document.querySelector('form');
    table.addEventListener('click', (e) => {
      const name = e.target.name;
      switch (name) {
        case 'getCookie':
          this.getCookie();
          break;
        case 'deleteCookie':
          this.deleteCookie();
          break;
        case 'AllDeleteCookie':
          this.AllDeleteCookie();
          break;
        default:
          break;
      }
    });

    // 테이블 안에 form을 넣으면 정상적으로 작동 안해서 밖으로 뺌..
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = e.target.children[0].value;
      const value = e.target.children[1].value;
      const expire = e.target.children[2].value;
      if (name === '' && value === '' && expire === '') {
        e.target.children[0].focus();
        return;
      }
      this.setCookie(name, value, expire);
      alert('쿠키 생성 완료!');
      e.target.reset();
      e.target.children[0].focus();
    });
  }

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
