let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media / Beso.mp3', '', 'Xd', m)
}
handler.help = ['Que']
handler.tags = ['premium']
handler.command = /^(Que)$/i
handler.botAdmin = true

module.exports = handler