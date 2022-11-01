const TelegramApi = require("node-telegram-bot-api");

const token = "5711236502:AAEFQ3nTtL_M0Hzje6XuwL7WoQroVu6r0Wc";

const bot = new TelegramApi(token, {polling: true})


bot.on("message", async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;
  await  bot.sendMessage(chatId, "Спасибо, что вы с Цветтучино🤗\n" +
    "\n" +
    "Дарим обещанный мастер-класс по созданию композиции из сухоцветов от Ксении Филатовой ✨ ⤵️\n" +
    "\n" +
    "https://disk.yandex.ru/d/UNALswSRj8iIgg")
  console.log(msg);
})
