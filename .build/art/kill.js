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
var kill_exports = {};
__export(kill_exports, {
  default: () => kill_default
});
module.exports = __toCommonJS(kill_exports);
var import_strt = require("../strt");
var import_chk = __toESM(require("../helpers/chk"));
const kill = async (client, e, upt) => {
  const m = e.message;
  try {
    const y = new import_chk.default(client, e);
    let id = await y.chk();
    let space = "\u3164";
    let arrow = `>---->`;
    let len = 5;
    let gun = `(\u3000-_\uFF65) \uFE3B\u30C7\u2550\u4E00`;
    let per = `(/\u275Bo\u275B)/ `;
    let gn = `\uFE3B\u30C7\u2550\u4E00`;
    let yo;
    let first;
    try {
      yo = await client.getEntity(id);
      first = yo.firstName;
    } catch (error) {
      first = "Lol";
    }
    let mm = await y.edit(`
${gun + arrow + space + space + space + per}

  Killing to ${first}
`, { d: false });
    await (0, import_strt.sleep)(1e3);
    mm = await y.edit(`
${gn + space + space + arrow + space + space + per}

  Killing to ${first}
`, { id: mm.id });
    await (0, import_strt.sleep)(1e3);
    mm = await y.edit(`
${gn + space + space + space + arrow + space + space + per}

  Killing to ${first}
`, { id: mm.id });
    await (0, import_strt.sleep)(1e3);
    mm = await y.edit(`
${gn + space + space + space + space + arrow + space + per}

  Killing to ${first}
`, { id: mm.id });
    await (0, import_strt.sleep)(1e3);
    mm = await y.edit(`
${gn + space + space + space + space + space + arrow + per}

  Killed Lol ${first == "Lol" ? "" : first} \u2694\uFE0F
`, { id: mm.id });
  } catch (err) {
    console.log(err);
  }
};
var kill_default = kill;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=kill.js.map
