let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Helado.aac', '', 'xd', m)
}
handler.help = ['ela']
handler.tags = ['premium']
handler.command = /^(ela)$/i
handler.group = true
handler.register = true

module.exports = handler