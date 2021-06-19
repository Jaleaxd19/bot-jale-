let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, '.mp3', m)
}
handler.help = ['sai']
handler.tags = ['premium']
handler.command = /^(sai)$/i
handler.group = true
handler.register = true

module.exports = handler
