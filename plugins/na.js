let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/na.mp3', '', 'xd', m)
}
handler.help = ['na']
handler.tags = ['premium']
handler.command = /^(na)$/i
handler.group = true
handler.register = true

module.exports = handler
