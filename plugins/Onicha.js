let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Onicha.m4a', '', 'xd', m)

}

handler.help = ['on']

handler.tags = ['premium']

handler.command = /^(on)$/i

handler.group = true

handler.register = true

module.exports = handler

