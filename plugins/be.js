let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Beso.mp3', m)

}

handler.help = ['Que']

handler.tags = ['premium']

handler.command = /^(Que)$/i

handler.group = true

handler.register = true

module.exports = handler
