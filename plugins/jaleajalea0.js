let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler  = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) return conn.sendFile(m.chat, '', '', '', m)
	let text = args.join` `
	fetch("https://api.simsimi.net/v1/?text=" + encodeURIComponent(text) + "&lang=es")
  .then(res => res.json())
  .then(batch => {
    conn.updatePresence(m.chat, Presence.composing)
  conn.reply(m.chat, `${batch.success}`, m)
  }) .catch(() => { conn.reply(m.chat, `_¡La función jalea está desabilitada!_`, m) })
}
handler.help = ['jalea'].map(v => v + ' *texto*')
handler.tags = ['fun']
handler.command = /^(jalea)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 750
module.exports = handler