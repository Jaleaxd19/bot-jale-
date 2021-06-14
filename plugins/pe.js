let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/perico.mp3', '', 'xd', m)
}
handler.help = ['ico']
handler.tags = ['premium']
handler.command = /^(ico)$/i
handler.group = true
handler.register = true

module.exports = handler
