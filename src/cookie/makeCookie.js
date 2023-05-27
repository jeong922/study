'use strict';

export default class MakeCookie {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.render();
    this.setEvent();
  }

  template() {
    return `
      <form>
        <input type='text' name='name' placeholder='name' required />
        <input type='text' name='value' placeholder='value' required />
        <input type='number' name='expire' placeholder='expire' required />
        <button class="td_btn">쿠키 생성하기</button>
      </form>
      `;
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  setEvent() {
    // 테이블 안에 form을 넣으면 정상적으로 작동 안해서 밖으로 뺌..
    const { setCookie } = this.props;
    this.$target.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = e.target.children[0].value;
      const value = e.target.children[1].value;
      const expire = e.target.children[2].value;
      if (name === '' && value === '' && expire === '') {
        e.target.children[0].focus();
        return;
      }
      setCookie(name, value, expire);
      alert('쿠키 생성 완료!');
      e.target.reset();
      e.target.children[0].focus();
    });
  }
}
