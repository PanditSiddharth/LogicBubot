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
  default: () => help_default,
  hlp: () => hlp
});
module.exports = __toCommonJS(help_exports);
var import_telegraf = require("telegraf");
var import_telegram = require("telegram");
var import_chk = __toESM(require("../helpers/chk"));
const { Button } = require("../node_modules/telegram/tl/custom/button");
const helpb = (bot) => {
  const inlineKeyboard = import_telegraf.Markup.inlineKeyboard([[{ text: "text", callback_data: "1" }]]);
  bot.on("inline_query", async (ctx) => {
    const query = ctx.inlineQuery.query;
    if (!query) {
      return;
    }
    try {
      const results = [
        {
          type: "article",
          id: "1",
          title: "Help",
          description: "Help commands of Logic.B userbot",
          input_message_content: {
            message_text: "This is help buttons of Logic.B userbot for more You can see to contact dev option"
          },
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Admin Commands", callback_data: "adm" },
                { text: "Tools", callback_data: "too" }
              ],
              [
                { text: "Arts", callback_data: "art" },
                { text: "helpers", callback_data: "hel" }
              ],
              [
                { text: "Contact Developer", callback_data: "dev" }
              ]
            ]
          }
        }
      ];
      bot.on("callback_query", (ctx2) => {
        const data = ctx2.callbackQuery.data;
        const newMenu = {
          inline_keyboard: [
            [{ text: "Back", callback_data: "back" }],
            [{ text: "Close", callback_data: "close" }]
          ]
        };
        if (data === "adm") {
          try {
            ctx2.editMessageText(`\u{1D406}\u{1D42B}\u{1D428}\u{1D42E}\u{1D429} \u{1D400}\u{1D41D}\u{1D426}\u{1D422}\u{1D427} \u{1D41C}\u{1D428}\u{1D426}\u{1D426}\u{1D41A}\u{1D427}\u{1D41D}\u{1D42C}: 

*\u{1D41B}\u{1D41A}\u{1D427} to ban users
*\u{1D426}\u{1D42E}\u{1D42D}\u{1D41E} to mute users
*\u{1D42E}\u{1D427}\u{1D426}\u{1D42E}\u{1D42D}\u{1D41E} to unmute users
*\u{1D42E}\u{1D427}\u{1D41B}\u{1D41A}\u{1D427} to unban users
*\u{1D424}\u{1D422}\u{1D41C}\u{1D424} to kick users`, {
              reply_markup: newMenu
            });
          } catch (error) {
            console.log(error.message);
          }
        } else if (data === "close") {
          try {
            ctx2.answerCbQuery("it is not implemented now");
          } catch (error) {
            console.log(error.message);
          }
        } else if (data === "too") {
          try {
            ctx2.editMessageText(`\u{1D407}\u{1D41E}\u{1D425}\u{1D429}: \u{1D402}\u{1D428}\u{1D426}\u{1D426}\u{1D41A}\u{1D427}\u{1D41D}\u{1D42C} \u{1D422}\u{1D427} \u{1D414}\u{1D42C}\u{1D41E}\u{1D42B}\u{1D41B}\u{1D428}\u{1D42D}

*\u{1D421}\u{1D41E}\u{1D425}\u{1D429} to see help
*\u{1D429}\u{1D422}\u{1D427}\u{1D420} to see uptime(status)
*\u{1D424}\u{1D422}\u{1D425}\u{1D425} to make animation text
*\u{1D422}\u{1D427}\u{1D422}\u{1D42D} to initialize useridies
*\u{1D42C}\u{1D41E}\u{1D42D}\u{1D41D}\u{1D41E}\u{1D425} to set auto deletion time
*\u{1D41C}\u{1D425}\u{1D428}\u{1D427}\u{1D41E} to clone users profile
    *\u{1D41C}\u{1D425}\u{1D428}\u{1D427}\u{1D41E} \u{1D42C} to save current profile
    *\u{1D41C}\u{1D425}\u{1D428}\u{1D427}\u{1D41E} \u{1D42B} to retrive saved`, {
              reply_markup: newMenu
            });
          } catch (error) {
            console.log(error.message);
          }
        } else if (data === "art") {
          try {
            ctx2.editMessageText(`
Art commands: 

*ping uptime
*kill killing animation
                `, {
              reply_markup: newMenu
            });
          } catch (error) {
            console.log(error.message);
          }
        } else if (data === "hel") {
          try {
            ctx2.editMessageText(`
\u{1D414}\u{1D42C}\u{1D41E} \u{1D42D}\u{1D422}\u{1D426}\u{1D41E}\u{1D42C} \u{1D422}\u{1D427} \u{1D41C}\u{1D428}\u{1D426}\u{1D426}\u{1D41A}\u{1D427}\u{1D41D}\u{1D42C}:

second:s or S  minute:m  
Hour: h or H
12hour: d  24hour: D
weak: w or W
month: M   Year: y or Y
`, {
              reply_markup: newMenu
            });
          } catch (error) {
            console.log(error.message);
          }
        } else if (data === "dev") {
          try {
            ctx2.editMessageText(`

@Dev Developer: @PanditSiddharth
@Con Contact @LogicB_Support
                `, {
              reply_markup: newMenu
            });
          } catch (error) {
            console.log(error.message);
          }
        } else if (data === "back") {
          try {
            ctx2.editMessageText(`
This is help buttons of Logic.B userbot for more You can see to contact dev option
                `, {
              reply_markup: {
                inline_keyboard: [
                  [
                    { text: "Admin Commands", callback_data: "adm" },
                    { text: "Tools", callback_data: "too" }
                  ],
                  [
                    { text: "Arts", callback_data: "art" },
                    { text: "helpers", callback_data: "hel" }
                  ],
                  [
                    { text: "Contact Developer", callback_data: "dev" }
                  ]
                ]
              }
            });
          } catch (error) {
            console.log(error.message);
          }
        } else {
          ctx2.reply("You selected Lol option");
        }
      });
      ctx.answerInlineQuery(results);
    } catch (error) {
    }
  });
};
var help_default = helpb;
const hlp = async (client, e) => {
  try {
    const m = e.message;
    let y = new import_chk.default(client, e);
    const resut = await client.invoke(
      new import_telegram.Api.messages.GetInlineBotResults({
        bot: "@node231bot",
        peer: await y.chat(),
        query: "help",
        offset: "@node231bot ",
        geoPoint: new import_telegram.Api.InputGeoPoint({
          lat: 8.24,
          long: 8.24,
          accuracyRadius: 5
        })
      })
    );
    const result2 = await client.invoke(
      new import_telegram.Api.messages.SendInlineBotResult({
        peer: await y.chat(),
        queryId: resut.queryId,
        id: resut.results[0].id,
        hideVia: true,
        scheduleDate: 0
      })
    );
  } catch (error) {
    console.log("hlp: " + error.message);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hlp
});
//# sourceMappingURL=help.js.map
