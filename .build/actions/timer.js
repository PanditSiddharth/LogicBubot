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
var timer_exports = {};
__export(timer_exports, {
  default: () => timer_default
});
module.exports = __toCommonJS(timer_exports);
var import_chk = __toESM(require("../helpers/chk"));
let timer = async (client, e) => {
  let y = new import_chk.default(client, e);
  let tim = await y.dtm() || 0;
  const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));
  y.edit(tim + " seconds left", { d: false }).then(async (mes) => {
    try {
      for (let i = 0; i < tim; i += 5) {
        await sleep(5e3);
        let s = Math.floor((tim - i - 5) % 60);
        let m = Math.floor((tim - i - 5) / 60);
        await y.edit(m + " Minutes :" + s + " seconds left", { d: false, id: mes.id });
      }
      y.edit("time end", { id: mes.id });
    } catch (err) {
      y.edit("timer error");
    }
  });
};
var timer_default = timer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=timer.js.map
