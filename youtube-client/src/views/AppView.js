import './app-view.css';
import SearchBox from './searchBox/search-box';
import ClipsBox from './clipsBox/clipsBox';


export default class AppView {
  constructor() {
    this.searchBox = new SearchBox();
    this.clipsBox = new ClipsBox();
  }

  renderStartPage() {
    document.body.appendChild(this.searchBox.element);
    document.body.appendChild(this.clipsBox.element);
  }

  renderGreeting() {
    const greeting = document.createElement('div');
    greeting.classList.add('greeting');
    greeting.innerHTML = '<p class="greeting__text ">Welcome to</p><p class="greeting__text greeting__text--red"> YouTube Client</p>';
    this.clipsBox.element.appendChild(greeting);
  }
}


//  const content = document.createElement('ul');
//  content.innerHTML = this.titles.map(title => `<li>${title}</li>`).join('');
//  document.body.appendChild(content);
