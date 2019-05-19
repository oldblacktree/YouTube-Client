export default class AppModel {
  constructor(request) {
    this.url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA8shEa0MdEU06gOwbZYyYZRpoFIa3Y2QU&type=video&part=snippet&maxResults=15&q=${request}`;
  }

  async getClips() {
    const responceId = await fetch(this.url);
    const dataId = await responceId.json();

    const arrVideoId = dataId.items.map(clip => clip.id.videoId);

    const responceAllData = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA8shEa0MdEU06gOwbZYyYZRpoFIa3Y2QU&id=${arrVideoId.join(
        ',',
      )}&part=snippet,statistics`,
    );
    const allData = await responceAllData.json();

    const arrClipData = allData.items.map((clip) => {
      const clipData = {
        image: clip.snippet.thumbnails.medium.url,
        date: clip.snippet.publishedAt.slice(0, 10),
        title: clip.snippet.title,
        description: clip.snippet.description,
        author: clip.snippet.channelTitle,
        view: clip.statistics.viewCount,
        id: clip.id,
      };
      return clipData;
    });
    return arrClipData;
  }
}
