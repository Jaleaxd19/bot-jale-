let fetch = require('node-fetch')
let split = '|'
let handler = async (m, { conn, usedPrefix, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/photooxy')))).json()
  if(!effect) throw `efecto no encontrado`
  effect = effect.toLowerCase()
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/photooxy/' + effect, { text, text2 }, 'APIKEY')
  if(!text) throw `Formato Incorrecto\n\nEjemplo:\n*${usedPrefix}wolfmetal sexy*\n*${usedPrefix}battlefield sexy|bot*`
  conn.fakeReply(m.chat, '*ESPERA ⏳*', '0@s.whatsapp.net', '✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨')
  await conn.sendFile(m.chat, url, 'photooxy.jpg', `✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨\n\n*Efecto:* ${effect}`, m)
  .catch(() => { conn.reply(m.chat, `_Error! Formato incorrecto o inténtalo más tarde_`, m) })
}
handler.help = ['photooxy'].map(v => v + ' *(efecto)* *texto|texto2*')
handler.tags = ['tools']
handler.command = /^(photooxy)$/i
handler.register = true
handler.group = true
handler.premium = false
handler.limit = true

module.exports = handler
