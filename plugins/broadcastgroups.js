let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '*「 Transmisiones a todos los grupos 」*')
  for (let id of groups) conn.copyNForward(id, content, true)
  conn.reply(m.chat, `_Enviar mensajes de difusión a ${groups.length} grupos_`, m)
}
handler.help = ['transmitirgrupo','tmgc'].map(v => v + ' *texto*')
handler.tags = ['owner']
handler.command = /^(transmitir|tm)(grupo|grupo|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

