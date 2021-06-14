let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/returbio.opus', '', 'xd', m)
}
handler.help = ['re']
handler.tags = ['premium']
handler.command = /^(re)$/i
handler.group = true
handler.register = true

module.exports = handler
