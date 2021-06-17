let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Beso.mp3', m)

}

handler.help = ['be']

handler.tags = ['premium']

handler.command = /^(be)$/i

handler.group = true

handler.register = true

module.exports = handler
