let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Placas1.mp4', '', 'Agan placas orden del líder del clan', m)
}
handler.help = ['placas']
handler.tags = ['premium']
handler.command = /^(placas)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler