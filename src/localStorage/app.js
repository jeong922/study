'use strict';

import Appender from './appender.js';
import Items from './items.js';
import Storage from './storage.js';

const storage = new Storage();

export default class App {
  constructor($app) {
    this.$app = $app;
    this.dataList();
    this.render();
  }

  template() {
    return `
      <h1 class='title flex justify-center'>LocalStorage</h1>
      <div class='appender'></div>
      <main class='container'></main>
    `;
  }

  dataList() {
    this.state = {
      items: [],
    };
    if (storage.getLocalStorage()) {
      this.state.items = storage.getLocalStorage();
    }
  }

  render() {
    this.$app.innerHTML = this.template();
    const container = document.querySelector('.container');
    const appender = document.querySelector('.appender');
    new Appender(appender, {
      items: this.state.items,
      addItem: (item) => this.addItem(item),
    });
    new Items(container, {
      items: this.state.items,
      deleteItem: (id) => this.deleteItem(id),
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addItem = (text) => {
    const { items } = this.state;
    this.setState({
      items: [...items, { id: Date.now(), text }],
    });
    storage.setLocalStorage(this.state.items);
  };

  deleteItem = (id) => {
    const items = [...this.state.items];
    const index = items.findIndex((item) => item.id + '' === id);
    items.splice(index, 1);
    this.setState({ items });
    storage.setLocalStorage(this.state.items);
  };
}
