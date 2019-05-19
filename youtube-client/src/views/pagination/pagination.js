import './pagination.css';

export default class Pagination {
  constructor() {
    this.element = document.createElement('ul');
    this.element.classList.add('pagination');
    this.element.id = "pagination";
    this.element.innerHTML =
      `<li class="pagination__item pagination__item--prev">prev</li>
       <li class="pagination__item pagination__item--cur"></li>
       <li class="pagination__item pagination__item--next">next</li>`;
  }
}
