let levelling = require('../lib/levelling')

let handler = async (m, { usedPrefix }) => {
  let user = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Nivel *${user.level} (${user.exp - min}/${xp})*
Menos *${max - user.exp}* próximo nivel!
`.trim()
  }
  user.level++
  m.reply(`
  Felicidades, has subido de nivel!
*${user.level - 1}* -> *${user.level}*
  
  Usar *${usedPrefix}perfil* para verificar
  `.trim())
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i
handler.register = true

module.exports = handler