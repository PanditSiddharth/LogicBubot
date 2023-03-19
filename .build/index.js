"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_telegram = require("telegram");
var import_sessions = require("telegram/sessions");
var import_keep_alive = __toESM(require("./keep_alive"));
var import_start = __toESM(require("./start"));
var import_dotenv = __toESM(require("dotenv"));
var import_strt = require("./strt");
const input = require("input");
import_dotenv.default.config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf("5918588428:AAEKZjk5LSBTrRo-XSowkpxbp1ajZ7fKfmI");
const season = process.env.SEASON;
const stringSession = new import_sessions.StringSession(season);
const client = new import_telegram.TelegramClient(stringSession, 22199045, "39263ccc0fa63f4076e3b6948206ca7f", { connectionRetries: 5 });
(0, import_keep_alive.default)();
(async () => {
  (0, import_strt.st)();
  await client.start({ botAuthToken: "" });
  console.log("You should now be connected.");
  await (0, import_start.default)(client, bot);
  try {
    let keepAlive2 = function() {
      setTimeout(keepAlive2, 500);
    };
    var keepAlive = keepAlive2;
    setTimeout(keepAlive2, 500);
  } catch (err) {
    console.log(err);
  }
})();
(async () => {
  bot.launch();
  console.log("bot is working now");
})();
//# sourceMappingURL=index.js.map
