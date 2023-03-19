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
var vc_exports = {};
__export(vc_exports, {
  call: () => call,
  default: () => vc_default,
  endvc: () => endvc,
  joinvc: () => joinvc
});
module.exports = __toCommonJS(vc_exports);
var import_telegram = require("telegram");
var import_chk = __toESM(require("../helpers/chk"));
let call;
let y;
const vc = async (client2, e) => {
  let y2 = new import_chk.default(client2, e);
  try {
    const result = await client2.invoke(
      new import_telegram.Api.phone.CreateGroupCall({
        peer: "@ignou_bca_group",
        randomId: e.message.id,
        title: "My very normal title",
        scheduleDate: 0
      })
    );
    call = result.updates[0].call;
  } catch (err) {
    console.log(await y2.chat());
    console.log(err.message);
  }
};
var vc_default = vc;
const joinvc = async (client2, e) => {
  const ssrc = Math.floor(Math.random() * 4294967296);
  let y2 = new import_chk.default(client2, e);
  try {
    const reslt = await client2.invoke(
      new import_telegram.Api.channels.GetFullChannel({
        channel: await y2.chat()
      })
    );
    console.log(reslt.fullChat.call);
    let cll = reslt.fullChat.call;
    const dt = await client2.invoke(new import_telegram.Api.phone.GetCallConfig());
    console.log(dt);
    const result = await client2.invoke(
      new import_telegram.Api.phone.JoinGroupCall({
        call: new import_telegram.Api.InputGroupCall({
          id: cll.id,
          accessHash: cll.accessHash
        }),
        joinAs: "@panditSiddharth0",
        params: new import_telegram.Api.DataJSON({
          data: dt.data
        }),
        muted: true,
        videoStopped: true
      })
    );
    console.log(result);
  } catch (e2) {
    console.log(e2.message);
    y2.edit("in Join Call error: " + e2.message);
  }
};
const endvc = async (client2, e) => {
  let y2 = new import_chk.default(client2, e);
  try {
    const reslt = await client2.invoke(
      new import_telegram.Api.channels.GetFullChannel({
        channel: await y2.chat()
      })
    );
    console.log(reslt.fullChat.call);
    let cll = reslt.fullChat.call;
    const result = await client2.invoke(
      new import_telegram.Api.phone.DiscardGroupCall({
        call: new import_telegram.Api.InputGroupCall({
          id: cll.id,
          accessHash: cll.accessHash
        })
      })
    );
    console.log(result);
  } catch (e2) {
    console.log(e2.message);
    y2.edit("in Join Call error: " + e2.message);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  call,
  endvc,
  joinvc
});
//# sourceMappingURL=vc.js.map
