let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/paj.mp3', '', 'xd', m)
}
handler.help = ['pa']
handler.tags = ['premium']
handler.command = /^(pa)$/i
handler.group = true
handler.register = true

module.exports = handler
