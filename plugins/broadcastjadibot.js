let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
    let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
    let teks = text ? text : cc.text
    let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '*「 Transmisión a todos Jadibot 」*')
    for (let id of users) conn.copyNForward(id, content, true)
    conn.reply(m.chat, `_Transmisión enviada con éxito a ${users.length} número que son jadi bot_
${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g,'') + '?text=.menu').join('\n')}`.trim(), m)
  } else conn.reply(m.chat, 'Esta función es solo para hosts de bots',  m)
}
handler.help = ['transmitirjadibot','tmbot'].map(v => v + ' *texto*')
handler.tags = ['host']
handler.command = /^(transmitir|tm)(jadi)?bot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

