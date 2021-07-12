let handler = m => m.reply('')

conn.senFile(m.chat......, m)

handler.customPrefix = /bot|botsito|bott/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
