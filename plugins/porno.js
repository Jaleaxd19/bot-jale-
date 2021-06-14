const axios = require('axios')
let handler = async(m, { conn }) => {
  m.reply('*ESPERA*⏳')
let porn = await axios.get('https://meme-api.herokuapp.com/gimme/porn')
           conn.sendFile(m.chat, `${porn.data.url}`, '', `${porn.data.title}`, m)
  }
handler.help = ['xxx']
handler.tags = ['adultos']
handler.command = /^(xxx)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.register = true
handler.private = true
handler.premium = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
