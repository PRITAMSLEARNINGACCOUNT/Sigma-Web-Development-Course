import ytdl from "ytdl-core";

let Downloader = await ytdl.getVideoID(
  "http://www.youtube.com/watch?v=aqz-KE-bpKQ"
);
let info = await ytdl.getInfo(Downloader);
console.log(info);
console.log();

