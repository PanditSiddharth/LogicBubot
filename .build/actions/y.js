"use strict";
const https = require("https");
const fs = require("fs");
const videoUrl = "https://www.youtube.com/watch?v=QGJuMBdaqIw";
https.get(videoUrl, (res) => {
  res.on("data", (data) => {
    fs.appendFileSync("video.mp4", data);
  });
  res.on("end", () => {
    console.log("Video downloaded successfully!");
  });
});
//# sourceMappingURL=y.js.map
