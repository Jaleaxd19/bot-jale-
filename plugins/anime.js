
let fetch = require('node-fetch')

let handler = async(m, { conn, args, command, usedPrefix }) => {
  fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt').then(res => res.text()).then(body => {
    let randomnime = body.split('\n')
    let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
    conn.sendFile(m.chat, randomnimex, '', '✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨', m)
  }).catch(() => {
    conn.reply(m.chat, ` !`, m)
  })
}

handler.help = ['anime']
handler.tags = ['downloader']
handler.command = /^(anime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
