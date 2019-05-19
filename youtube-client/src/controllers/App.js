import AppModel from '../models/AppModel';
import AppView from '../views/AppView';


let model;
const view = new AppView();
let request = '';

function start() {
  view.renderStartPage();
  view.renderGreeting();

  view.searchBox.element.addEventListener('keyup', async () => {
    if (event.keyCode === 13) {
      view.resetPosition();
      request = view.searchBox.element.value;
      model = await new AppModel(request);
      const clips = await model.getClips();
      view.clipsBox.renderClips(clips);

      view.showPagination();
    }
  });
  view.renderPagination();
}

export default start;
