import './search-box.css';

export default class SearchBox {
  constructor() {
    this.element = document.createElement('input');
    this.element.classList.add('search-box');
  }
}
