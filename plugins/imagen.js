let fetch = require('node-fetch')
//plugin by Cristian

let handler  = async (m, { conn, text }) => {
    m.reply('*ESPERA*⏳')
if (!text) return conn.reply(m.chat, 'No hay texto para buscar imagen', m)
let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let cristian = await url.json()
let erest = cristian[Math.floor(Math.random() * cristian.length)]
            await conn.sendFile(m.chat, erest, '', 'FUERON DEMACIADAS IMAGENES DE *' + encodeURIComponent(text) + '* ESPERO TE GUSTE ESTA!!🥰', m)


}
handler.help = ['imagen']
handler.tags = ['images']
handler.command = /^imagen?$/i
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
