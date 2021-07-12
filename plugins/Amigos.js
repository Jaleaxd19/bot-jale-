let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Amigos.mp4', '', 'Xd', m)

}

handler.help = ['ami']

handler.tags = ['premium']

handler.command = /^(ami)$/i

handler.owner = true

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
