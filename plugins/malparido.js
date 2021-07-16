let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Malparidobogota.mp3', '', 'xd', m)
}
handler.help = ['mal']
handler.tags = ['premium']
handler.command = /^(mal)$/i
handler.group = true
handler.register = true

module.exports = handler