let handler = m => m.reply('*Buen dia.*👋☺️😘,✨_Te deseo un excelente inicio de dia_✨')

handler.customPrefix = /Buenos días|buenos dias/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
