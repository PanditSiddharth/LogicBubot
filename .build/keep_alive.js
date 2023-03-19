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
var keep_alive_exports = {};
__export(keep_alive_exports, {
  default: () => keep_alive_default
});
module.exports = __toCommonJS(keep_alive_exports);
const express = require("express");
const keep_alive = () => {
  const app = express();
  const port = 3e3;
  app.get("/", (req, res) => {
    res.status(200).send("bot running..");
  });
  app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));
};
var keep_alive_default = keep_alive;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=keep_alive.js.map
