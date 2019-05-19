export default class AppModel {
  constructor(request) {
    this.url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRiMRQqTS_lqEQ8vsicotuSzhTlnaEhc0&type=video&part=snippet&maxResults=15&q=${request}`;
  }

  async getClips() {
    const responceId = await fetch(this.url);
    const dataId = await responceId.json();

    const arrVideoId = dataId.items.map(clip => clip.id.videoId);

    const responceAllData = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDRiMRQqTS_lqEQ8vsicotuSzhTlnaEhc0&id=${arrVideoId.join(',')}&part=snippet,statistics`);
    const allData = await responceAllData.json();

    const arrClipData = allData.items.map((clip) => {
      const clipData = {
        image: clip.snippet.thumbnails.medium.url,
        date: clip.snippet.publishedAt.slice(0, 10),
        title: clip.snippet.title,
        description: clip.snippet.description,
        author: clip.snippet.channelTitle,
        view: clip.statistics.viewCount,
        id: clip.id
      };
      return clipData;
    });
    return arrClipData;
  }
}


// static extractClips(data) {
//   console.log('data from response', data);
//   const videoId = [];

//   let arrClipData = data.items.map((clip) => {
//     videoId.push(clip.id.videoId);
//     const clipData = {
//       image: clip.snippet.thumbnails.medium.url,
//       date: clip.snippet.publishedAt.slice(0,10),
//       title: clip.snippet.title,
//       description: clip.snippet.description,
//       author: clip.snippet.channelTitle,
//     };

//     console.log('полученный массив готовых данных', arrClipData)
//     return clipData;
//   });
// }
// async getClipsData() {
//   const responce = await fetch(this.url);
//   const data = await responce.json();
//   return AppModel.extractClips(data);
// }
// const videoId = clip.id.videoId;
// const viewdata = fetch(
//   `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDRiMRQqTS_lqEQ8vsicotuSzhTlnaEhc0&id=${videoId}&part=snippet,statistics`
// );
// console.log('viewdata ', viewdata);
// const views = viewdata.json()


// async getClips() {
//   const responce = await fetch(this.url);
//   const data = await responce.json();
//   const arrVideoId = [];

//   const arrClipData = data.items.map((clip) => {
//     arrVideoId.push(clip.id.videoId);
//     const clipData = {
//       image: clip.snippet.thumbnails.medium.url,
//       date: clip.snippet.publishedAt.slice(0, 10),
//       title: clip.snippet.title,
//       description: clip.snippet.description,
//       author: clip.snippet.channelTitle,
//     };
//     return clipData;
//   });

//   const responseForViews = await fetch(
//     `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDRiMRQqTS_lqEQ8vsicotuSzhTlnaEhc0&id=${arrVideoId.join(',')}&part=snippet,statistics`
//   );
//   const dataViews = await responseForViews.json();
//   const arrViews = dataViews.items.map((clip) => {
//     return clip.statistics.viewCount
//   })
//   console.log('arrClipData', arrClipData);
//   console.log('arrVieoId', arrVideoId);
//   console.log('arrViews', arrViews);
// }
