export default class Button {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  displayButton = () => {
    return `
			<button class="AllcloseBtn">FAQ 모두 닫기</button>
		`;
  };

  render() {
    this.$target.innerHTML = this.displayButton();
    const btn = document.querySelector(".AllcloseBtn");

    btn.addEventListener("click", () => {
      const answer = document.querySelectorAll(`.answer`);
      answer.forEach((v) => v.classList.remove("active"));
    });
  }
}
