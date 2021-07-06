let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Beso.mp3', '', 'Xd', m)

}

handler.help = ['bienvenida']

handler.tags = ['premium']

handler.command = /^(Que)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = true

handler.botAdmin = true

handler.fail = null

handler.limit = false

handler.exp = 100

module.exports = handler
