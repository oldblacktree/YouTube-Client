import './app-view.css';
import SearchBox from './searchBox/search-box';
import ClipsBox from './clipsBox/clipsBox';
import Pagination from './pagination/pagination';

export default class AppView {
  constructor() {
    this.searchBox = new SearchBox();
    this.clipsBox = new ClipsBox();
    this.pagination = new Pagination();
  }

  renderStartPage() {
    document.body.appendChild(this.searchBox.element);
    document.body.appendChild(this.clipsBox.element);
  }

  renderGreeting() {
    const greeting = document.createElement('div');
    greeting.classList.add('greeting');
    greeting.innerHTML = '<p class="greeting__text ">Welcome to</p><p class="greeting__text greeting__text--red"> YouTube Client</p>';
    document.body.appendChild(greeting);
  }

  resetPosition() {
    const g = document.getElementsByClassName('greeting')[0];
    g.classList.add('display-none');
    document.getElementById('clips-box').innerHTML = '';
    document.getElementById('clips-box').style.setProperty('--i', '0');
        const cur = document.getElementsByClassName('pagination__item--cur')[0];
    cur.innerHTML = "1";
  }

  renderPagination() {
    document.body.appendChild(this.pagination.element);
    const cur = document.getElementsByClassName('pagination__item--cur')[0];
    cur.innerHTML = "1";
    // let next = document.getElementsByClassName('pagination__item--next')[0];
    // next.addEventListener('click', () => {
    //   let cur = document.getElementById('clips-box').style.getPropertyValue('--i');
    //   document.getElementById('clips-box').style.setProperty('--i', cur + 1);
    // })
  }

  showPagination() {
    this.pagination.element.style.setProperty('display', 'flex');
  }
}
//  const content = document.createElement('ul');
//  content.innerHTML = this.titles.map(title => `<li>${title}</li>`).join('');
//  document.body.appendChild(content);
