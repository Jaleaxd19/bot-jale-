let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Mclovin.mp4', '', 'Xd', m)
}
handler.help = ['clovin']
handler.tags = ['premium']
handler.command = /^(clovin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler