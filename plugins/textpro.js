let fetch = require('node-fetch')
let split = '|'
if(!split) throw 'effect not found'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/textpro')))).json()
  if (!effect) throw '*Lista de Effectos*\n\n' + effects.sort((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efecto *${effect}* extraviado`
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/textpro/' + effect, { text, text2 }, 'APIKEY')
  if(!text) throw 'Ingresa el texto\n\nEjemplo: *.textpro jokerlogo Sexy*\n            *.textpro ninjalogo Sexy|bot*'
  await conn.sendFile(m.chat, url, 'textpro.jpg', `*TEXTPRO*\n*Effecto:* ${effect}`, m)
}
handler.help = ['textpro'].map(v => v + ' *effect* _texto|[texto2]_')
handler.tags = ['tools']
handler.command = /^(textpro)$/i
handler.register = true
handler.group = true
handler.premium = false
handler.limit = true

module.exports = handler

