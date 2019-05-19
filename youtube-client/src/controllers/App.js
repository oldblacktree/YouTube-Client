import AppModel from '../models/AppModel';
import AppView from '../views/AppView';


let model;
const view = new AppView();
let request = '';
let i;

function start() {
  view.renderStartPage();
  view.renderGreeting();

  view.searchBox.element.addEventListener('keyup', async () => {
    if (event.keyCode === 13) {
      let g = await document.getElementsByClassName('greeting')[0];
      g.classList.add('display-none');
      document.getElementById('clips-box').innerHTML = '';
      document.getElementById('clips-box').style.setProperty('--i', '0');

      request = view.searchBox.element.value;
      model = await new AppModel(request);
      const clips = await model.getClips();
      view.clipsBox.renderClips(clips);
    }
  });
}

export default start;


// async start() {
//   const model = new AppModel(this.state);
//   const data = await model.getClipNames();
//   const view = new AppView(data);

//   view.render();
// }
// 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRiMRQqTS_lqEQ8vsicotuSzhTlnaEhc0&type=video&part=snippet&maxResults=15&q=js
