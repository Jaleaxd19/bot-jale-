let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Anuncioban.mp3', '', 'xd', m)
}
handler.customPrefix = /^(ban)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
