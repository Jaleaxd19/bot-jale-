let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/vs.m4a', '', 'xd', m)
}
handler.help = ['vs']
handler.tags = ['premium']
handler.command = /^(vs)$/i
handler.group = true
handler.register = true

module.exports = handler
