let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*Nombre:* ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nAbout: ' + about : ''}
*Número:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
_Link:_  https://wa.me/${who.split`@`[0]}${registered ? '\n*Edad:* ' + age : ''}
*XP:* ${exp} (${exp - min} / ${xp}) [${max - exp} próximo nivel]
*Nivel:* ${level}
*Limite:* ${limit}
*Registrado:* ${registered ? 'Si (' + new Date(regTime) + ')': 'No'}${lastclaim > 0 ? '\n*Último reclamo:* ' + new Date(lastclaim) : ''}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['perfil *@usuario*']
handler.tags = ['tools']
handler.command = /^perfil$/i
module.exports = handler

