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
var help_exports = {};
__export(help_exports, {
  default: () => help_default
});
module.exports = __toCommonJS(help_exports);
var import_chk = __toESM(require("../helpers/chk"));
const help = async (client, e, upt) => {
  try {
    const y = new import_chk.default(client, e);
    const m = e.message;
    const chatId = m.chatId;
    y.edit(`
\u{1D407}\u{1D41E}\u{1D425}\u{1D429}: \u{1D402}\u{1D428}\u{1D426}\u{1D426}\u{1D41A}\u{1D427}\u{1D41D}\u{1D42C} \u{1D422}\u{1D427} \u{1D414}\u{1D42C}\u{1D41E}\u{1D42B}\u{1D41B}\u{1D428}\u{1D42D}

*\u{1D421}\u{1D41E}\u{1D425}\u{1D429} to see help
*\u{1D429}\u{1D422}\u{1D427}\u{1D420} to see uptime(status)
*\u{1D424}\u{1D422}\u{1D425}\u{1D425} to make animation text
*\u{1D422}\u{1D427}\u{1D422}\u{1D42D} to initialize useridies
*\u{1D42C}\u{1D41E}\u{1D42D}\u{1D41D}\u{1D41E}\u{1D425} to set auto deletion time
*\u{1D41C}\u{1D425}\u{1D428}\u{1D427}\u{1D41E} to clone users profile
    *\u{1D41C}\u{1D425}\u{1D428}\u{1D427}\u{1D41E} \u{1D42C} to save current profile
    *\u{1D41C}\u{1D425}\u{1D428}\u{1D427}\u{1D41E} \u{1D42B} to retrive saved

\u{1D406}\u{1D42B}\u{1D428}\u{1D42E}\u{1D429} \u{1D400}\u{1D41D}\u{1D426}\u{1D422}\u{1D427} \u{1D41C}\u{1D428}\u{1D426}\u{1D426}\u{1D41A}\u{1D427}\u{1D41D}\u{1D42C}: 
*\u{1D41B}\u{1D41A}\u{1D427} to ban users
*\u{1D426}\u{1D42E}\u{1D42D}\u{1D41E} to mute users
*\u{1D42E}\u{1D427}\u{1D426}\u{1D42E}\u{1D42D}\u{1D41E} to unmute users
*\u{1D42E}\u{1D427}\u{1D41B}\u{1D41A}\u{1D427} to unban users
*\u{1D424}\u{1D422}\u{1D41C}\u{1D424} to kick users

\u{1D414}\u{1D42C}\u{1D41E} \u{1D42D}\u{1D422}\u{1D426}\u{1D41E}\u{1D42C} \u{1D422}\u{1D427} \u{1D41C}\u{1D428}\u{1D426}\u{1D426}\u{1D41A}\u{1D427}\u{1D41D}\u{1D42C}:
second:s or S  minute:m  
Hour: h or H
12hour: d  24hour: D
weak: w or W
month: M   Year: y or Y

\u{1D404}\u{1D431}\u{1D41A}\u{1D426}\u{1D429}\u{1D425}\u{1D41E} \u{1D41C}\u{1D428}\u{1D426}\u{1D426}\u{1D41A}\u{1D427}\u{1D41D}\u{1D42C}:
*\u{1D426}\u{1D42E}\u{1D42D}\u{1D41E} sid 1m  // 1 minute mute
*\u{1D42E}\u{1D427}\u{1D41B}\u{1D41A}\u{1D427} sid  // unban sid

    \u{1D429}\u{1D428}\u{1D430}\u{1D41E}\u{1D42B}\u{1D41E}\u{1D41D} \u{1D41B}\u{1D432} \u{1D40B}\u{1D428}\u{1D420}\u{1D422}\u{1D41C}.\u{1D401}
    `);
  } catch (error) {
    console.log("help: " + error.message);
  }
};
var help_default = help;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=help.js.map
