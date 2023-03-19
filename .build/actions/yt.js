"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var yt_exports = {};
__export(yt_exports, {
  default: () => yt_default
});
module.exports = __toCommonJS(yt_exports);
var fs = __toESM(require("fs"));
var import_uploads = require("telegram/client/uploads");
var import_chk = __toESM(require("../helpers/chk"));
const axios = require("axios");
async function getVideoInfo(videoUrl) {
  const response = await axios.get("https://ytdl.panditsiddharth.repl.co/dl", {
    params: {
      url: videoUrl
    }
  });
  return response.data;
}
const yt = async (client, e) => {
  const y = new import_chk.default(client, e);
  const m = e.message;
  let rid = await y.edit("Your Link found and processing..", { d: false });
  const videoUrl = "https://www.youtube.com/watch?v=JGwWNGJdvx8=9s";
  const yturl = m.message.substring(4);
  console.log(yturl);
  try {
    await getVideoInfo(yturl).then(async (data) => {
      await y.edit("wait i am sending video ", { id: rid.id, d: false });
      let res = "720p";
      if (m.isPrivate)
        res = "720p";
      for (let i = 0; i < data.length; i++) {
        if (data[i].url && data[i].fps != false && data[i].aud == true && data[i].fps > 24 && data[i].res == res) {
          console.log(data[i]);
          try {
            await fs.unlinkSync("./actions/video.mp4");
          } catch (err) {
            console.error(err.message);
          }
          await y.edit("Fetch completed Now downloading", { id: rid.id, d: false });
          await downloadVideo(data[i].url, "./actions/video.mp4", y, rid);
          await console.log("Video downloaded");
          let l = await y.edit("Download completed now sending here..", { id: rid.id, d: false });
          try {
            let file = await client.uploadFile({
              file: new import_uploads.CustomFile("video.mp4", fs.statSync("./actions/video.mp4").size, "./actions/video.mp4"),
              workers: 16
            });
            await client.sendFile(await y.chat(), { file, caption: "Downloaded video[" + data[i].res + "]: " + data[0].title + "\n\n     ~Powered by Logic.B", videoNote: true });
            console.log(file);
            client.deleteMessages(await y.chat(), [l.id], { revoke: false });
          } catch (err) {
            y.edit(err.message);
          }
        }
      }
    }).catch((err) => {
      y.edit(err.message);
    });
  } catch (error) {
    await y.edit("Error on download: " + error.message);
  }
};
var yt_default = yt;
async function downloadVideo(url, path, y, rid) {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream"
  });
  await y.edit("25% process completed", { d: false, id: rid.id });
  await console.log("25% process complete");
  response.data.pipe(fs.createWriteStream(path));
  return new Promise((resolve, reject) => {
    response.data.on("end", () => {
      resolve();
    });
    response.data.on("error", (error) => {
      reject(error);
    });
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=yt.js.map
