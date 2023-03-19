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
var info_exports = {};
__export(info_exports, {
  default: () => info_default
});
module.exports = __toCommonJS(info_exports);
var import_telegram = require("telegram");
var import_chk = __toESM(require("../helpers/chk"));
const info = async (client, e, upt) => {
  let y = new import_chk.default(client, e);
  const m = e.message;
  const chatId = m.chatId || m.peerId;
  try {
    let usr = await y.chk();
    let ch;
    try {
      ch = await client.invoke(
        new import_telegram.Api.users.GetFullUser({
          id: usr
        })
      );
    } catch (error) {
      if (!ch)
        return y.edit("Sorry I can't find details you can use [ *init 9 ] command then again send your commands");
    }
    const user = ch.users[0];
    const sent = await y.edit(`
\u{1D5DC}\u{1D5FB}\u{1D5F3}\u{1D5FC} \u{1D5FC}\u{1D5F3} \u{1D5E8}\u{1D600}\u{1D5F2}\u{1D5FF} ${user.firstName}

 \u{1D5D9}\u{1D5F6}\u{1D5FF}\u{1D600}\u{1D601} \u{1D5E1}\u{1D5EE}\u{1D5FA}\u{1D5F2}: ${user.firstName}${user.lastName ? "\n \u{1D5DF}\u{1D5EE}\u{1D600}\u{1D601} \u{1D5E1}\u{1D5EE}\u{1D5FA}\u{1D5F2}: " + user.lastName : ""}
 \u{1D5E8}\u{1D600}\u{1D5F2}\u{1D5FF}\u{1D5DC}\u{1D5F1}: ${user.id}${user.username ? "\n \u{1D5E8}\u{1D600}\u{1D5F2}\u{1D5FF}\u{1D5FB}\u{1D5EE}\u{1D5FA}\u{1D5F2}: @" + user.username : ""}
 \u{1D5E3}\u{1D5FF}\u{1D5F2}\u{1D5FA}\u{1D5F6}\u{1D602}\u{1D5FA}: ${user.premium == true ? JSON.stringify(user.premium) : "No"}${user.phone ? "\n \u{1D5E3}\u{1D5F5}\u{1D5FC}\u{1D5FB}\u{1D5F2}: " + user.phone : ""}
 \u{1D5D9}\u{1D5EE}\u{1D5F8}\u{1D5F2}: ${user.fake == false ? "No" : "Yes"}${user.scam != false ? "\n Scammed: " + JSON.stringify(user.scam) : ""}
    `);
  } catch (error) {
    console.log("info: " + error.message);
  }
};
var info_default = info;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=info.js.map
