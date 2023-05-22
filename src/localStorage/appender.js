export default class Appender {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.render();
    this.setEvent();
  }

  template() {
    return `
      <form>
        <input type="text" placeholder="내용을 입력하세요." name="input" />
				<button class='button'>추가</button>
      </form>
    `;
  }

  render() {
    this.$target.innerHTML = this.template();
    const input = this.$target.querySelector('input');
    input.focus();
  }

  setEvent() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { addItem } = this.props;
      const element = e.target;
      if (element[0].value === '') {
        element[0].focus();
        return;
      }
      addItem(element[0].value);
    });
  }
}
