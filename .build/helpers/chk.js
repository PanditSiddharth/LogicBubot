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
var chk_exports = {};
__export(chk_exports, {
  default: () => Chk
});
module.exports = __toCommonJS(chk_exports);
var import_telegram = require("telegram");
var import_strt = require("../strt");
var fs = __toESM(require("fs"));
var import_users = require("telegram/client/users");
var import_big_integer = __toESM(require("big-integer"));
let uptt;
class Chk {
  constructor(client, e) {
    this.innit = async () => {
      var _a;
      try {
        this.edit("Initializing....", { d: false });
        let a = await this.client.getParticipants(await this.chat(), { limit: 1e4 });
        this.edit("initialized participants now initializing messages..", { d: false });
        let lim;
        const matches = ((_a = this.m) == null ? void 0 : _a.message).match(new RegExp(/init [0-9]{1,2}/));
        if (matches) {
          let matchs = matches[0].match(new RegExp(/[0-9]{1,2}/));
          lim = parseInt(matchs[0]) | 1;
        }
        await this.runWithTimeout(1e5, lim).then(() => console.log("Program completed successfully within time limit")).catch((error) => console.error(error.message));
        this.edit("Initialized !!");
        return a;
      } catch (err) {
        console.log(err);
        this.edit(err.message);
      }
    };
    this.send = async (message, mid = void 0) => {
      try {
        let idd = mid || void 0;
        return await this.client.sendMessage(await this.chat(), { message, replyTo: idd });
      } catch (error) {
        console.log(error.message);
      }
    };
    this.edit = async (msg, { id = false, d = true, rid = false, e = false } = {}) => {
      var _a, _b, _c;
      try {
        let idd = id || ((_a = this.m) == null ? void 0 : _a.id);
        let rmsg;
        if (((_b = this.m) == null ? void 0 : _b.out) == true || id) {
          rmsg = await this.client.editMessage(await this.chat(), { message: idd, text: msg });
        } else {
          if (rid) {
            rmsg = await this.send(msg, rid);
          } else {
            await ((_c = this.m) == null ? void 0 : _c.delete());
            rmsg = await this.send(msg);
          }
        }
        if (d)
          this.del(rmsg);
        return rmsg;
      } catch (error) {
        console.log(error.message);
      }
    };
    this.chat = async () => {
      var _a, _b, _c;
      if ((_a = this.m) == null ? void 0 : _a.isPrivate) {
        return await ((_b = this.m) == null ? void 0 : _b.getInputChat());
      } else {
        return (_c = this.m) == null ? void 0 : _c.peerId;
      }
    };
    this.isAdmin = async (m) => {
      var _a, _b;
      try {
        if ((_a = this.m) == null ? void 0 : _a.isChannel) {
          let user = (m == null ? void 0 : m.fromId) || (0, import_users._selfId)(this.client);
          let lt = await this.client.invoke(
            new import_telegram.Api.channels.GetParticipant({
              channel: (_b = this.m) == null ? void 0 : _b.peerId,
              participant: user
            })
          );
          if (lt.participant.className == "ChannelParticipantCreator" || lt.participant.className == "ChannelParticipantAdmin") {
            return void 0;
          }
        } else {
          this.edit("This command is group/channels specific");
          return void 0;
        }
      } catch {
        this.edit("Error in isAdmin: Chk");
        return void 0;
      }
    };
    this.v = {
      id: void 0,
      all: void 0,
      d: void 0,
      mt: void 0
    };
    this.gpchk = async ({ id, all, d, mt, umt, bn, ubn, pmt } = {}) => {
      var _a, _b;
      try {
        if (!((_a = this.m) == null ? void 0 : _a.isChannel)) {
          this.edit("This command is group/channels specific");
          return false;
        }
        let user = id || (0, import_users._selfId)(this.client);
        let lt = await this.client.invoke(
          new import_telegram.Api.channels.GetParticipant({
            channel: (_b = this.m) == null ? void 0 : _b.peerId,
            participant: user
          })
        );
        if (!lt) {
          return "ngp";
        }
        if (lt.participant.className == "ChannelParticipantCreator" || lt.participant.className == "ChannelParticipantAdmin") {
          await this.edit("User is admin");
          return false;
        }
        if (lt.participant) {
          let o = lt.participant;
          let r = o.bannedRights;
          if (r.sendMessages == true && mt) {
            this.edit("User is Muted already");
            return false;
          } else if (umt) {
            return true;
          } else if (ubn) {
            return true;
          }
          console.log(lt);
          return true;
        } else if (umt) {
          this.edit("User is unmuted already");
          return false;
        } else if (ubn) {
          this.edit("User is unbanned already");
          return false;
        }
        return true;
      } catch (err) {
        console.log(err.message);
        this.edit("Error in gpchk: Chk");
        return void 0;
      }
    };
    this.gperr = async (msg) => {
      if (msg.includes("USER_ADMIN_INVALID"))
        return await this.edit(`User is admin`);
      if (msg.includes("MSG_ID_INVALID"))
        return await this.edit(`Invalid message ID provided`);
      if (msg.includes("INPUT_USER_DEACTIVATED"))
        return await this.edit(`The specified user was deleted`);
      if (msg.includes("CHAT_ADMIN_REQUIRED"))
        return await this.edit(`You must be an admin with ban permission to do this`);
      if (msg.includes("PEER_ID_INVALID"))
        return await this.edit(`The provided peer id is invalid`);
      if (msg.includes("USER_ID_INVALID"))
        return await this.edit(`The provided user ID is invalid`);
      if (msg.includes("CHANNEL_PRIVATE"))
        return await this.edit(`You haven't joined this channel/supergroup`);
      if (msg.includes("CHANNEL_INVALID"))
        return await this.edit(`The provided channel is invalid`);
      if (msg.includes("CHAT_WRITE_FORBIDDEN"))
        return await this.edit(`You can't write in this chat`);
      if (msg.includes("PARTICIPANT_ID_INVALID"))
        return await this.edit(`Error: Seems you are doing it to self`);
      return void 0;
    };
    this.chk = async () => {
      var _a, _b, _c, _d, _e;
      try {
        let cmd, user;
        if ((0, import_strt.up)().strt == "/") {
          cmd = 1;
        } else {
          cmd = 0;
        }
        const matches = ((_a = this.m) == null ? void 0 : _a.message).match(new RegExp(/[0-9]{9,11}/));
        if (matches) {
          try {
            user = (0, import_big_integer.default)(matches[0]);
            console.log(await (0, import_users.getInputEntity)(this.client, user));
          } catch (error) {
            await this.innit();
            console.log(error);
          }
        } else if ((_b = this.m) == null ? void 0 : _b.entities) {
          const me = this.m.entities;
          if (me[cmd].className == "MessageEntityMentionName")
            user = me[cmd].userId;
          else if (me[cmd].className == "MessageEntityMention") {
            let metch = ((_c = this.m) == null ? void 0 : _c.message).match(new RegExp(/@[A-Za-z1-9_]+/));
            user = metch[0];
          } else {
            this.edit("Please enter correct id");
          }
        } else if (((_d = this.m) == null ? void 0 : _d.replyTo) != null) {
          try {
            const replied = await ((_e = this.m) == null ? void 0 : _e.getReplyMessage());
            user = replied.fromId.userId;
          } catch (err) {
            console.log("mention: " + err.message);
            return void 0;
          }
        } else {
          this.edit("Please give any user preference");
        }
        return user;
      } catch (error) {
        console.log("CHK: " + error.message);
      }
    };
    this.dtm = async () => {
      var _a;
      let tm;
      const matcd = ((_a = this.m) == null ? void 0 : _a.message).match(new RegExp(/[ ]\d{1,3}[ ]{0,1}[mMdsShHyYwW]/));
      if (matcd) {
        let num = matcd[0].match(new RegExp(/[0-9]{1,3}/));
        let tm1 = matcd[0].match(new RegExp(/[mMdsShHyYwW]/));
        let nm = parseInt(num[0]);
        let tmm = tm1[0];
        if (tmm == "s" || tmm == "S") {
          tm = nm;
        } else if (tmm == "m")
          tm = nm * 60;
        else if (tmm == "h" || tmm == "H")
          tm = nm * 60 * 60;
        else if (tmm == "d")
          tm = nm * 60 * 60 * 12;
        else if (tmm == "D")
          tm = nm * 60 * 60 * 24;
        else if (tmm == "w" || tmm == "W")
          tm = nm * 60 * 60 * 24 * 7;
        else if (tmm == "M")
          tm = nm * 60 * 60 * 24 * 30;
        else if (tmm == "y" || tmm == "Y")
          tm = nm * 60 * 60 * 24 * 365;
        console.log(matcd);
        return tm;
      }
    };
    this.setdel = async () => {
      var _a;
      const dt = await this.dtm();
      if (dt) {
        const dataString = JSON.stringify({ t: dt }, null, 2);
        fs.writeFileSync("./helpers/setdel.txt", dataString);
        const matcd = ((_a = this.m) == null ? void 0 : _a.message).match(new RegExp(/[ ]\d{1,3}[ ]{0,1}[mMdsShHyYwW]/));
        this.edit("deleting message time has been set to:" + matcd[0]);
      } else {
        this.edit("deleting message time has not set");
      }
    };
    this.del = (res = -1) => {
      var _a;
      let s;
      if (res == -1)
        s = (_a = this.m) == null ? void 0 : _a.id;
      else
        s = res.id;
      const fileData = fs.readFileSync("./helpers/setdel.txt", "utf-8");
      const me = JSON.parse(fileData);
      (0, import_strt.sleep)(1e3 * me.t).then(() => {
        var _a2;
        const chatId = (_a2 = this.m) == null ? void 0 : _a2.chatId;
        this.client.deleteMessages(chatId, [s], {});
      });
    };
    this.client = client;
    this.e = e;
    this.m = e.message;
  }
  async runProgram(lim) {
    var _a, _b;
    try {
      console.log("Program started");
      await ((_a = this.client) == null ? void 0 : _a.getMessages(await this.chat(), { limit: 100 }));
      await this.edit("Initialzed messages: " + 1 * 100);
      if (lim > 10)
        lim = 10;
      else if (lim < 1) {
        lim = 1;
      }
      console.log(lim);
      for (let i = 1; i < lim; i++) {
        await ((_b = this.client) == null ? void 0 : _b.getMessages(await this.chat(), { addOffset: 100 * i, limit: 100 * (i + 1) }));
        await this.edit("Initialzed messages: " + (i + 1) * 100);
        await (0, import_strt.sleep)(3e3);
      }
      this.edit("Initialzation completed Now do actions");
      console.log("Program ended");
    } catch (error) {
      this.edit(error.message);
    }
  }
  async runWithTimeout(duration, lim) {
    return Promise.race([
      this.runProgram(lim),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Program exceeded time limit and was terminated"));
        }, duration);
      })
    ]);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=chk.js.map
