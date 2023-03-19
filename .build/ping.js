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
var ping_exports = {};
__export(ping_exports, {
  default: () => ping_default
});
module.exports = __toCommonJS(ping_exports);
var import_strt = require("./strt");
var import_chk = __toESM(require("./helpers/chk"));
const ping = async (client, e, upt) => {
  const m = e.message;
  try {
    upt = (0, import_strt.up)();
    const y = new import_chk.default(client, e);
    await y.edit(`
  .\u256D\u256E\u2571\u2571\u2571\u2571\u2571\u2571\u2571\u2571\u256D\u2501\u2501\u256E
  \u2503\u2503\u2571\u2571\u2571\u2571\u2571\u2571\u2571\u2571\u2503\u256D\u256E\u2503
  \u2503\u2503\u2571\u2571\u2533\u2501\u2501\u2533\u2501\u2501\u2503\u2570\u256F\u2570\u256E
  \u2503\u2503\u2571\u256D\u2503\u256D\u256E\u252B\u256D\u2501\u2503\u256D\u2501\u256E\u2503
  \u2503\u2570\u2501\u256F\u2503\u2570\u256F\u2503\u2570\u2501\u252B\u2570\u2501\u256F\u2503
  \u2570\u2501\u2501\u2501\u253B\u256E\u2501\u253B\u2501\u2501\u253B\u2501\u2501\u2501\u256F
  \u2571\u2571\u2571\u256D\u2501\u256F\u2503
  \u2571\u2571\u2571\u2570\u2501\u2501\u256F
  
  \u{1F493} PONG! Your Logic.B userbot is ready.
  \u{1F493} \u{1D5E8}\u{1D5FD}\u{1D601}\u{1D5F6}\u{1D5FA}\u{1D5F2} \u{1F449} ${upt.h + " : " + upt.m + " : " + upt.s}
  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
  `);
  } catch (err) {
    console.log(err);
  }
};
var ping_default = ping;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=ping.js.map
