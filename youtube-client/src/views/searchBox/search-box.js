import './search-box.css';

export default class SearchBox {
  constructor() {
    this.element = document.createElement('input');
    this.element.classList.add('search-box');
    this.element.setAttribute('placeholder', 'Try to find something here')
  }
}
