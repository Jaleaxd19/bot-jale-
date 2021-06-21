let handler = m => m.reply('*Hola👋que tal soy bot sexy🌚 ten las iniciales* ,    *ABDㅤNICK*')

handler.customPrefix = /^(nick)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
