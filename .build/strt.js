"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var strt_exports = {};
__export(strt_exports, {
  default: () => strt_default,
  sleep: () => sleep,
  st: () => st,
  up: () => up
});
module.exports = __toCommonJS(strt_exports);
let startTime;
function st() {
  startTime = performance.now();
}
function up() {
  const i = Math.floor((performance.now() - startTime) / 1e3);
  let s = (i % 60).toString().padStart(2, "0");
  let m = (Math.floor(i / 60) % 60).toString().padStart(2, "0");
  let h = Math.floor(Math.floor(i / 60) / 60).toString().padStart(2, "0");
  let upt = { h, m, s, strt: "*" };
  return upt;
}
var strt_default = up;
const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sleep,
  st,
  up
});
//# sourceMappingURL=strt.js.map
