let fetch = require('node-fetch')
//plugin by Cristian

let handler  = async (m, { conn, usedPrefix, text }) => {
//let text = args.join` `
if (!text) return conn.reply(m.chat, `Ejemplo *${usedPrefix}crossfire* Sexy`, m)
let url = 'https://videfikri.com/api/textmaker/crossfirelogo/?text=' + encodeURIComponent(text)

conn.sendFile(m.chat, url, '', '✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨', m)

}
handler.help = ['crossfire _texto_']
handler.tags = ['images']
handler.command = /^crossfire?$/i
handler.owner = false
handler.mods = false
handler.group = true
handler.private = false
handler.register = true
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
