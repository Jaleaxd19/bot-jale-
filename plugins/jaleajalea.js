let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/simsimi2', { kata: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw json
}
handler.help = ['jalea', 'jaleaa', 'jaleaa'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((jalea)?jalea|jalea)$/i

module.exports = handler