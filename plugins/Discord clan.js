let handler = async m => m.reply(`
Aqui te dejo el link del discord 
del clan disfrutar :3...
https://discord.gg/Zen6DQeVT6.trim())

handler.customPrefix = /Discord|discord|discorrd|discordd/i
handler.command = new RegExp
handler.group = true

module.exports = handler
