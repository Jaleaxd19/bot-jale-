const xpperlimit = 350 
let handler = async (m, { conn, usedPrefix, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE._data.users[m.sender].exp >= xpperlimit * count) {
    global.DATABASE._data.users[m.sender].exp -= xpperlimit * count
    global.DATABASE._data.users[m.sender].limit += count
    conn.reply(m.chat, `-${xpperlimit * count} XP\n+ ${count} Límite`, m)
  } else conn.reply(m.chat, `XP no es suficiente para comprar ${count} límite\n1 límite = 350 XP\n\n_NOTA: Gane XP interactuando en el chat, use_ *${usedPrefix}math*`, m)
}
handler.help = ['buy', 'buy *cantidad*', 'buyall']
handler.tags = ['xp']
handler.command = /^buy([0-9]+)|buy|buyall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

