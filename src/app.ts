import { Telegraf } from "telegraf"

const bot = new Telegraf("5456109251:AAFub0hhQzLuf-OU2yLOOfZBXlUYSeunVyM")
bot.start((ctx) => ctx.reply('HEllo bro2!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('PTIVET!'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))