let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'gay.png', 'Quiero ser gay, alguien de aqui quiere violarme y llenarme de leche?', m)
}

handler.customPrefix = /gay|gey|gai/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
