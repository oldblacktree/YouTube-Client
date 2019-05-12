import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor() {
    this.state = {
      url:
        'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRiMRQqTS_lqEQ8vsicotuSzhTlnaEhc0&type=video&part=snippet&maxResults=15&q=js',
    };
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await model.getClipNames();

    const view = new AppView(data);

    view.render();
  }
}
