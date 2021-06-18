let handler = m => m.reply('*Aqui te dejo el link del discord* , *https://discord.gg/Zen6DQeVT6*')

handler.customPrefix = /Discord|discord|Discord /i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
