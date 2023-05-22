'use strict';
export default class Items {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.render();
    this.setEvent();
  }

  template() {
    const { items } = this.props;
    return `
    ${items
      .map(
        (item) => `
      <li class="item__row">
				<span data-key="${item.id}" class="item__name">${item.text}</span>
				<button class="item__delete" data-id="${item.id}">삭제</button>
			</li>
    `
      )
      .join('')}
    `;
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  setEvent() {
    const { deleteItem } = this.props;
    const { items } = this.props;
    this.$target.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      console.log(id);
      if (id) {
        deleteItem(id);
      }
    });
  }
}
