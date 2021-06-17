let handler = m => m.reply('*Hola * , *de nada espero aya sido de mucha ayuda*')

handler.customPrefix = /gracias|Gracias|graciass/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
