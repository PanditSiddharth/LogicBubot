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
var kick_exports = {};
__export(kick_exports, {
  default: () => kick_default
});
module.exports = __toCommonJS(kick_exports);
var import_telegram = require("telegram");
var import_chk = __toESM(require("../helpers/chk"));
const kcik = async (client, e, upt) => {
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
      return await y.edit(`I can't kick User is admin`);
    }
    if (!lt)
      return await y.edit(`User is already kicked`);
    await client.invoke(
      new import_telegram.Api.channels.EditBanned({
        channel: await y.chat(),
        participant: usr,
        bannedRights: new import_telegram.Api.ChatBannedRights({
          untilDate: Math.floor(Date.now() / 1e3),
          viewMessages: true
        })
      })
    );
    const result = await client.invoke(
      new import_telegram.Api.channels.EditBanned({
        channel: await y.chat(),
        participant: usr,
        bannedRights: new import_telegram.Api.ChatBannedRights({
          untilDate: Math.floor(Date.now() / 1e3),
          viewMessages: false
        })
      })
    );
    if (result)
      await y.edit("User kicked");
  } catch (error) {
    console.log("Kick: " + error.message);
    await y.gperr(error.message);
  }
};
var kick_default = kcik;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=kick.js.map
