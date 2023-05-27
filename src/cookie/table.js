'use strict';

export default class Table {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.render();
    this.setEvent();
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  template() {
    return `
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
    `;
  }

  setEvent() {
    const { getCookie, deleteCookie, AllDeleteCookie } = this.props;
    this.$target.addEventListener('click', (e) => {
      const name = e.target.name;
      switch (name) {
        case 'getCookie':
          getCookie();
          break;
        case 'deleteCookie':
          deleteCookie();
          break;
        case 'AllDeleteCookie':
          AllDeleteCookie();
          break;
        default:
          break;
      }
    });
  }
}
