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
var settings_exports = {};
__export(settings_exports, {
  default: () => settings_default
});
module.exports = __toCommonJS(settings_exports);
var import_telegram = require("telegram");
var import_chk = __toESM(require("../helpers/chk"));
const { Button } = require("../node_modules/telegram/tl/custom/button");
const settings = async (client, client1, e) => {
  try {
    const m = e.message;
    const resut = await client.invoke(
      new import_telegram.Api.messages.GetInlineBotResults({
        bot: "@node231bot",
        peer: "@shabdt",
        query: "bot",
        offset: "@gif ",
        geoPoint: new import_telegram.Api.InputGeoPoint({
          lat: 8.24,
          long: 8.24,
          accuracyRadius: 1
        })
      })
    );
    let y = new import_chk.default(client, e);
    const result2 = await client.invoke(
      new import_telegram.Api.messages.SendInlineBotResult({
        peer: await y.chat(),
        queryId: resut.queryId,
        id: resut.results[0].id,
        hideVia: true,
        scheduleDate: 0
      })
    );
    console.log(result2.updates[2].message);
    let med = result2.updates[2].message.media;
  } catch (error) {
    console.log("settings: " + error.message);
  }
};
var settings_default = settings;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=settings.js.map
