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
var clone_exports = {};
__export(clone_exports, {
  default: () => clone_default
});
module.exports = __toCommonJS(clone_exports);
var import_big_integer = __toESM(require("big-integer"));
var import_telegram = require("telegram");
var import_uploads = require("telegram/client/uploads");
var fs = __toESM(require("fs"));
var import_strt = require("../strt");
var import_chk = __toESM(require("../helpers/chk"));
const clone = async (client, e, upt) => {
  let y = new import_chk.default(client, e);
  try {
    const m = e.message;
    const chatId = m.chatId;
    if (m.message.includes("s") || m.message.includes("save")) {
      const msgg = m;
      const uidd = m.fromId;
      const id = uidd.userId;
      const msg = await client.getEntity(uidd.userId);
      const name = msg.firstName + (msg.lastName != null ? " " + msg.lastName : "");
      const username = msg.username;
      const me2 = {
        name,
        username,
        fromId: { userId: id },
        id,
        firstName: msg.firstName,
        lastName: msg.lastName
      };
      try {
        let rid = await y.edit("Saving user data.....");
        const buf2 = await client.downloadProfilePhoto(id);
        const dataString = JSON.stringify(me2, null, 2);
        fs.writeFileSync("data.txt", dataString);
        if (buf2.length > 11) {
          fs.writeFileSync("./m.png", buf2);
        } else {
          fs.unlinkSync("./m.png");
        }
        return y.edit("Your current state has been stored and previous save deleted", { id: rid.id });
      } catch (error) {
        console.error(error);
      }
      return;
    }
    if (m.message.includes("r") || m.message.includes("retrieve")) {
      try {
        const fileData = fs.readFileSync("./data.txt", "utf-8");
        const me2 = JSON.parse(fileData);
        let rid = await y.edit("Retriving previous state of name: " + me2.firstName, { d: false });
        await (0, import_strt.sleep)(100);
        await y.edit("Updating info.....", { id: rid.id, d: false });
        const relt2 = await client.invoke(
          new import_telegram.Api.account.UpdateProfile({
            firstName: me2.firstName,
            lastName: me2.lastName ? me2.lastName : "",
            about: me2.firstName + (me2.lastName ? " " + me2.lastName : "")
          })
        );
        if (me2.username != null) {
          try {
            await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: me2.username + "0" }));
          } catch (error) {
            try {
              await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: me2.username + "1" }));
            } catch (r) {
              try {
                await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: me2.username + "456" }));
              } catch (err) {
                try {
                  await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: "" }));
                } catch (eor) {
                  console.log(eor);
                }
              }
            }
          }
        } else {
          try {
            await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: "" }));
          } catch (eor) {
            console.log(eor);
          }
        }
        await (0, import_strt.sleep)(500);
        await y.edit("Removing old pic.....", { id: rid.id, d: false });
        const result2 = await client.invoke(
          new import_telegram.Api.photos.UpdateProfilePhoto({
            id: new import_telegram.Api.InputPhoto({
              id: (0, import_big_integer.default)(),
              accessHash: (0, import_big_integer.default)(),
              fileReference: Buffer.from("arbitrary data here")
            })
          })
        );
        try {
          await (0, import_strt.sleep)(200);
          await y.edit("Uploading new pic.....", { id: rid.id, d: false });
          const toUpload = new import_uploads.CustomFile("m.png", fs.statSync("./m.png").size, "./m.png");
          const res = await client.invoke(
            new import_telegram.Api.photos.UploadProfilePhoto({
              file: await client.uploadFile({
                file: toUpload,
                workers: 1
              })
            })
          );
          await (0, import_strt.sleep)(200);
          y.edit("Retrieve profile successfull: User " + me2.firstName + "\nLogic.B Userbot", { id: rid.id });
        } catch (err) {
        }
      } catch (error) {
        console.error("r: " + error);
      }
      return;
    }
    if (m.replyTo == null) {
      let msr = m.fromId;
      return y.edit("Please reply to user");
    }
    const replied = await m.getReplyMessage();
    const me = await client.getEntity(replied.fromId.userId);
    let t = await y.edit("Clonning user: " + (me.username != null ? "@" + me.username : me.firstName), { d: false });
    const reult = await client.invoke(
      new import_telegram.Api.messages.SetTyping({
        peer: chatId,
        action: new import_telegram.Api.SendMessageTypingAction(),
        topMsgId: 43
      })
    );
    await y.edit("Checking user pic.....", { d: false, id: t.id });
    const buf = await client.downloadProfilePhoto(replied.fromId.userId);
    await (0, import_strt.sleep)(1e3);
    await y.edit("Updating info.....", { d: false, id: t.id });
    const relt = await client.invoke(
      new import_telegram.Api.account.UpdateProfile({
        firstName: me.firstName,
        lastName: me.lastName ? me.lastName : "",
        about: me.firstName + (me.lastName ? " " + me.lastName : "")
      })
    );
    console.log(typeof me.username);
    if (me.username != null) {
      let usrr = me.username + "0";
      console.log(typeof (me.username + "1"));
      console.log(typeof (me.username + "456"));
      try {
        await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: me.username + "0" }));
      } catch (error) {
        try {
          await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: me.username + "1" }));
        } catch (r) {
          try {
            await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: me.username + "456" }));
          } catch (err) {
            try {
              await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: "" }));
            } catch (eor) {
              console.log(eor);
            }
          }
        }
      }
    } else {
      try {
        await client.invoke(new import_telegram.Api.account.UpdateUsername({ username: "" }));
      } catch (eor) {
        console.log(eor);
      }
    }
    await (0, import_strt.sleep)(500);
    await y.edit("Removing old pic.....", { d: false, id: t.id });
    const result = await client.invoke(
      new import_telegram.Api.photos.UpdateProfilePhoto({ id: new import_telegram.Api.InputPhoto({ id: (0, import_big_integer.default)(), accessHash: (0, import_big_integer.default)(), fileReference: Buffer.from("arbitrary data here") }) })
    );
    if (buf.length > 11) {
      await (0, import_strt.sleep)(200);
      await y.edit("Uploading new pic.....", { d: false, id: t.id });
      fs.writeFileSync("./r.png", buf);
      const toUpload = new import_uploads.CustomFile("r.png", fs.statSync("./r.png").size, "./r.png");
      const res = await client.invoke(
        new import_telegram.Api.photos.UploadProfilePhoto({
          file: await client.uploadFile({
            file: toUpload,
            workers: 1
          })
        })
      );
    }
    await (0, import_strt.sleep)(200);
    await y.edit("Clonning successfull: User " + me.firstName + "\nLogic.B Userbot", { id: t.id });
    await client.deleteMessages(chatId, [454], { revoke: false });
  } catch (error) {
    console.log("clone: " + error.message);
  }
};
var clone_default = clone;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=clone.js.map
