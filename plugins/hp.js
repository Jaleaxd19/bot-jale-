let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {
m.reply('*ESPERA*⏳')
//let text = args.join` `
if (!text) return conn.reply(m.chat, 'No hay texto para crear logo', m)
let url = 'https://videfikri.com/api/textmaker/hpotter/?text=' + encodeURIComponent(text)

conn.sendFile(m.chat, url, '', '✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨', m)

}
handler.help = ['hp']
handler.tags = ['images']
handler.command = /^hp?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
