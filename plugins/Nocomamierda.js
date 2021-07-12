let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Nocomamierda.opus', '', 'xd', m)

}

handler.help = ['no']

handler.tags = ['premium']

handler.command = /^(no)$/i

handler.group = true

handler.register = true

module.exports = handler
