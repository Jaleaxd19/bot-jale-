let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Mevalevg.mp4', '', 'Me vale verga', m)

}

handler.help = ['mevale']

handler.tags = ['premium']

handler.command = /^(mevale)$/i

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
