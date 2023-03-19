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
var start_exports = {};
__export(start_exports, {
  default: () => start_default
});
module.exports = __toCommonJS(start_exports);
var import_NewMessage = require("telegram/events/NewMessage");
var import_strt = require("./strt");
var import_actions = __toESM(require("./actions"));
var import_chk = __toESM(require("./helpers/chk"));
var import_help = __toESM(require("./bot/help"));
const start = async (client, bot) => {
  try {
    let upt = (0, import_strt.up)();
    let aa = true;
    const handler = async (event) => {
      try {
        (0, import_help.default)(bot);
      } catch (error) {
      }
      const y = new import_chk.default(client, event);
      const e = event;
      const m = event.message;
      const mm = await JSON.parse(JSON.stringify(event.message));
      if (m.fromId && mm.peerId.channelId && mm.peerId.channelId == "1492591072") {
        let str = "461843263 609517172 1806208310";
        if (str.includes(mm.fromId.userId)) {
          try {
            client.deleteMessages(m.peerId, [m.id], {});
          } catch (error) {
          }
        }
      }
      if ((m.out === true || m.fromId && (mm.fromId.userId == 1791106582 || mm.fromId.userId == 5860242015)) && m.message.startsWith(upt.strt)) {
        try {
          if (aa) {
            aa = false;
            (0, import_strt.sleep)(200).then(() => aa = true);
            await (0, import_actions.default)(client, e, upt, bot);
          }
        } catch (err) {
          console.log(err);
        }
      } else if (m.isPrivate && aa) {
        aa = false;
        (0, import_strt.sleep)(3e3).then(() => aa = true);
        y.edit("Sleeping 3seconds here for your id security(use it in group/channels)");
        await (0, import_actions.default)(client, e, upt, bot);
      }
    };
    client.addEventHandler(handler, new import_NewMessage.NewMessage({}));
  } catch (err) {
    console.log("start: " + err);
  }
};
var start_default = start;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=start.js.map
