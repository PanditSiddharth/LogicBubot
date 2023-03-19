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
var ban_exports = {};
__export(ban_exports, {
  default: () => ban_default
});
module.exports = __toCommonJS(ban_exports);
var import_telegram = require("telegram");
var import_chk = __toESM(require("../helpers/chk"));
const ban = async (client, e, upt) => {
  const y = new import_chk.default(client, e);
  try {
    const m = e.message;
    let usr = await y.chk();
    if (!(m == null ? void 0 : m.isChannel))
      return await y.edit("This command is group/channels specific");
    let lt;
    try {
      lt = await client.invoke(
        new import_telegram.Api.channels.GetParticipant({
          channel: m == null ? void 0 : m.peerId,
          participant: usr
        })
      );
    } catch (error) {
    }
    if (lt && (lt.participant.className == "ChannelParticipantCreator" || lt.participant.className == "ChannelParticipantAdmin")) {
      return await y.edit(`I can't ban User is admin`);
    }
    let tim = await y.dtm();
    const result = await client.invoke(
      new import_telegram.Api.channels.EditBanned({
        channel: await y.chat(),
        participant: usr,
        bannedRights: new import_telegram.Api.ChatBannedRights({
          untilDate: Math.floor(Date.now() / 1e3) + (tim && tim < 30 ? 30 : tim),
          viewMessages: true
        })
      })
    );
    if (!lt)
      await y.edit(`User is already banned or not available in group`);
    else if (result)
      await y.edit("User banned: " + (tim && tim >= 10 ? tim >= 30 ? " until: " + tim + " seconds" : "\nBanning user 30 seconds\nTg not allow to mute less than 30 seconds" : ""));
  } catch (error) {
    console.log("Ban: " + error.message);
    await y.gperr(error.message);
  }
};
var ban_default = ban;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=ban.js.map
