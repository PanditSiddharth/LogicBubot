/*                                         imports                                                    */
/* ************************************************************************************************** */
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
const input = require('input');
import keep_alive from './keep_alive';
import start from './start';
import dotenv from "dotenv";
import { st } from './strt';
dotenv.config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf("5918588428:AAEKZjk5LSBTrRo-XSowkpxbp1ajZ7fKfmI");
const season = process.env.SEASON
const stringSession = new StringSession(season);
const client = new TelegramClient(stringSession, 22199045, '39263ccc0fa63f4076e3b6948206ca7f', { connectionRetries: 5 });
keep_alive();

//                                         Client
/* ************************************************************************************************** */

(async () => {
  st()
  await client.start({ botAuthToken: "" });
  console.log("You should now be connected.");

  await start(client, bot)
  try {

    function keepAlive() {
      setTimeout(keepAlive, 500);
    }
    setTimeout(keepAlive, 500);

  } catch (err) {
    console.log(err);
  }
})();

/* ************************************************************************************************** */

(async () => {
  bot.launch();
  console.log("bot is working now");
})()
