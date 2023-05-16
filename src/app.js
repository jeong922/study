import Button from "./button.js";
import Table from "./table.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }

  template() {
    return `
      <h1 class='title'>FAQ</h1>
			<div class='btnWrapper'></div>
      <main class='container'></main>
    `;
  }

  async render() {
    this.$app.innerHTML = this.template();
    try {
      const response = await fetch("../data/data.json");
      if (response.ok) {
        const data = await response.json();
        const button = document.querySelector(".btnWrapper");
        const container = document.querySelector(".container");
        new Table(data, container);
        new Button(button);
      } else {
        console.log("서버상태 이상함");
      }
    } catch (e) {
      console.log(e);
    }
  }
}
