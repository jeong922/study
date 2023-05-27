'use strict';

export default class Modal {
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
      <div class="modal__wrapper">
        <div class="modal__container">
          <p class="modal__title">JavaScript</p>
          <p>
            JavaScript (JS) is a lightweight, interpreted, or just-in-time
            compiled programming language with first-class functions. While it
            is most well-known as the scripting language for Web pages, many
            non-browser environments also use it, such as Node.js, Apache
            CouchDB and Adobe Acrobat. JavaScript is a prototype-based,
            multi-paradigm, single-threaded, dynamic language, supporting
            object-oriented, imperative, and declarative (e.g. functional
            programming) styles.
          </p>
        </div>
        <div class="modal__btns">
          <button name="todayClose">오늘 하루 열리지 않음</button>
          <button name="close">닫기</button>
        </div>
      </div>
    `;
  }

  setEvent() {
    const { setCookie } = this.props;
    this.$target.addEventListener('click', (e) => {
      const name = e.target.name;
      if (name === 'todayClose') {
        setCookie('modal', 'close', 1);
        this.$target.classList.add('modal__close');
      } else if (name === 'close') {
        this.$target.classList.add('modal__close');
      }
    });
  }
}
