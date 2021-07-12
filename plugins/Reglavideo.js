let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Reglas.mp4', '', '👹♨️', m)

}

handler.help = ['reglas']

handler.tags = ['premium']

handler.command = /^(reglas)$/i

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
