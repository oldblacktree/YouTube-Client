import AppModel from '../models/AppModel';
import AppView from '../views/AppView';


let model;
const view = new AppView();
let request = '';

export default function start() {
  view.renderStartPage();
  view.renderGreeting();
  view.searchBox.element.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      request = view.searchBox.element.value;
      window.console.log(request);
      model = new AppModel(request);
      model.getClips();
    }
  });
}


// async start() {
//   const model = new AppModel(this.state);
//   const data = await model.getClipNames();
//   const view = new AppView(data);

//   view.render();
// }
// 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRiMRQqTS_lqEQ8vsicotuSzhTlnaEhc0&type=video&part=snippet&maxResults=15&q=js
