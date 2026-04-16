const TelegramBot = require('node-telegram-bot-api');

const token = "8518407612:AAGz_HnAT9pawjdVKc71Kv0C1TCaYcw_dXU";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "Hello 👋 Welcome to my bot!");
});
