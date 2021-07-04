let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Wenas.mp3', '', 'xd', m)

}

handler.help = ['we']

handler.tags = ['premium']

handler.command = /^(wenas)$/i

handler.group = true

handler.register = true

module.exports = handler
