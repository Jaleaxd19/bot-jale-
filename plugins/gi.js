let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/gi.opus', '', 'xd', m)
}
handler.help = ['gi']
handler.tags = ['premium']
handler.command = /^(gi)$/i
handler.group = true
handler.register = true

module.exports = handler
