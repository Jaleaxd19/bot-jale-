let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw 'Qué estás buscando?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* 
(${v.url})
Duración: ${v.timestamp}
Subido: ${v.ago}
${v.views} vistas
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = ['yts *buscar*']
handler.tags = ['tools']
handler.command = /^(yts)?$/i
module.register = true
module.group = true

module.exports = handler
