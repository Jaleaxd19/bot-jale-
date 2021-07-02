let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Eltio(0).mp4', '', 'El tio ', m)

}

handler.help = ['tio']

handler.tags = ['premium']

handler.command = /^(tio)$/i

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

