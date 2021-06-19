let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Mariguana.mp3', '', 'xd', m)

}

handler.help = ['ma']

handler.tags = ['premium']

handler.command = /^(ma)$/i

handler.group = true

handler.register = true

module.exports = handler

