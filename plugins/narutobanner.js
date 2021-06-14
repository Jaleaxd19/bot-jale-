let fetch = require('node-fetch')
//plugin by Cristian

let handler  = async (m, { conn, usedPrefix, text }) => {
//let text = args.join` `
if (!text) return conn.reply(m.chat, `Ejemplo: *${usedPrefix}narutobanner* Sexy`, m)
let url = 'https://videfikri.com/api/textmaker/narutobanner/?text=' + encodeURIComponent(text)

conn.sendFile(m.chat, url, '', '✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨', m)

}
handler.help = ['narutobanner _texto_']
handler.tags = ['images']
handler.command = /^narutobanner?$/i
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
