let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/putada.mp3', '', 'xd', m)
}
handler.help = ['pu']
handler.tags = ['premium']
handler.command = /^(pu)$/i
handler.group = true
handler.register = true

module.exports = handler
