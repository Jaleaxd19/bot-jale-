let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Team.mp3', '', 'xd', m)
}
handler.help = ['uf']
handler.tags = ['premium']
handler.command = /^(uf)$/i
handler.group = true
handler.register = true

module.exports = handler