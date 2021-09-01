let handler = m => m.reply('*Hola👋que tal soy 𝒃𝒐𝒕-𝒋𝒂𝒍𝒆𝒂🌚 ten las iniciales* ,    *ᴮᴷ︱*')

handler.customPrefix = /^(nick0)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
