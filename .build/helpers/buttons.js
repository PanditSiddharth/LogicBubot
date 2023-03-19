"use strict";
const { Button } = require("telegram/tl/custom/button");
const seth = async (client, e, upt) => {
  const markup = client.buildReplyMarkup(Button.inline("Hello!"));
  const m = e.message;
  const chatId = m.chatId;
  await client.sendMessage(chatId, {
    message: "click me!",
    buttons: markup
  });
};
//# sourceMappingURL=buttons.js.map
