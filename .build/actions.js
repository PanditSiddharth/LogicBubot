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
var actions_exports = {};
__export(actions_exports, {
  default: () => actions_default
});
module.exports = __toCommonJS(actions_exports);
var import_ban = __toESM(require("./actions/ban"));
var import_mute = __toESM(require("./actions/mute"));
var import_info = __toESM(require("./actions/info"));
var import_unmute = __toESM(require("./actions/unmute"));
var import_kick = __toESM(require("./actions/kick"));
var import_unban = __toESM(require("./actions/unban"));
var import_clone = __toESM(require("./actions/clone"));
var import_ping = __toESM(require("./ping"));
var import_chk = __toESM(require("./helpers/chk"));
var import_kill = __toESM(require("./art/kill"));
var import_yt = __toESM(require("./actions/yt"));
var import_settings = __toESM(require("./bot/settings"));
var import_timer = __toESM(require("./actions/timer"));
var import_help2 = require("./bot/help");
var import_vc = __toESM(require("./bot/vc"));
const actions = async (client, e, upt, bot) => {
  const y = new import_chk.default(client, e);
  try {
    const m = e.message;
    const chatId = m.chatId;
    if (m.message.includes(upt.strt + "mute"))
      await (0, import_mute.default)(client, e, upt);
    if (m.message.includes(upt.strt + "unmute"))
      await (0, import_unmute.default)(client, e, upt);
    if (m.message.includes(upt.strt + "info"))
      await (0, import_info.default)(client, e, upt);
    if (m.message.includes(upt.strt + "ban"))
      await (0, import_ban.default)(client, e, upt);
    if (m.message.includes(upt.strt + "kick"))
      await (0, import_kick.default)(client, e, upt);
    if (m.message.includes(upt.strt + "unban"))
      await (0, import_unban.default)(client, e, upt);
    if (m.message.includes(upt.strt + "clone"))
      await (0, import_clone.default)(client, e, upt);
    if (m.message.includes(upt.strt + "init"))
      await y.innit();
    if (m.message.includes(upt.strt + "ping"))
      (0, import_ping.default)(client, e, upt);
    if (m.message.includes(upt.strt + "yt"))
      await (0, import_yt.default)(client, e);
    if (m.message.includes(upt.strt + "kill"))
      await (0, import_kill.default)(client, e, upt);
    if (m.message.includes(upt.strt + "setdel"))
      await y.setdel();
    if (m.message.includes(upt.strt + "set") || m.message.includes(upt.strt + "settings"))
      await (0, import_settings.default)(client, e, bot);
    if (m.message.includes(upt.strt + "help") || m.message.includes(upt.strt + "hlp"))
      await (0, import_help2.hlp)(client, e);
    if (m.message.includes(upt.strt + "vc"))
      await (0, import_vc.default)(client, e);
    if (m.message.includes(upt.strt + "endvc"))
      await (0, import_vc.endvc)(client, e);
    if (m.message.includes(upt.strt + "joinvc"))
      await (0, import_vc.joinvc)(client, e);
    if (m.message.includes(upt.strt + "timer"))
      await (0, import_timer.default)(client, e);
  } catch (error) {
    console.log(`Actions: ${error.message}`);
    y.edit(error.message);
  }
};
var actions_default = actions;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=actions.js.map
