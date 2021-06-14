let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/hl.opus', '', 'xd', m)
}
handler.help = ['hl']
handler.tags = ['premium']
handler.command = /^(hl)$/i
handler.group = true
handler.register = true

module.exports = handler
