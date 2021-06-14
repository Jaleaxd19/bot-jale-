let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/buenos dias.mp3', m)
}
handler.help = ['bu']
handler.tags = ['premium']
handler.command = /^(bu)$/i
handler.group = true
handler.register = true

module.exports = handler
