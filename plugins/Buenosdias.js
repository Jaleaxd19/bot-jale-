let handler = m => m.reply('_*Buen dia👋😘.*_
_✨Te deseo un excelente inicio de dia✨_')

handler.customPrefix = /Buenos días|buenos dias/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
