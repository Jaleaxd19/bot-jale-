let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Grito.mp3', '', 'xd', m)

}

handler.help = ['grito']

handler.tags = ['premium']

handler.command = /^(grito)$/i

handler.group = true

handler.register = true

module.exports = handler
