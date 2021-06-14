let fetch = require('node-fetch')
//plugin by Cristian

let handler  = async (m, { conn, text }) => {
//let text = args.join` `
let [to, samu] = text.split`|`
if (!to) throw `Formato incorrecto`
if (!samu) throw `Ejemplo *.pubg Sexy|25*`

if (!text) return conn.reply(m.chat, 'No hay texto para crear logo', m)
let url = 'https://videfikri.com/api/textmaker/pubgmlogo/?text1=' + `${to}` + '&text2=' + `${samu}`

conn.sendFile(m.chat, url, '', '✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨', m)

}
handler.help = ['pubg']
handler.tags = ['images']
handler.command = /^pubg?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
