let fetch = require('node-fetch')
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/photooxy')))).json()
  if(!effect) throw 'effect not found'
  effect = effect.toLowerCase()
  if (!effect) throw `Efecto *${effect}* extraviado`
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/photooxy/' + effect, { text, text2 }, 'APIKEY')
  if(!text) throw 'Ingresa el texto\n\nEjemplo: *.photooxy wolfmetal Sexy*\n            *.photooxy battlefield Sexy|bot*'
  await conn.sendFile(m.chat, url, 'photooxy.jpg', `*PHOTOOXY*\n*Efecto:* ${effect}`, m)
}
handler.help = ['photooxy'].map(v => v + ' *efecto* _texto|[texto2]_')
handler.tags = ['tools']
handler.command = /^(photooxy)$/i
handler.register = true
handler.group = true
handler.premium = false
handler.limit = true

module.exports = handler
