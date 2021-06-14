let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let content = conn.cMod(m.chat, cc, /tc|broadcast/i.test(text) ? text : text + '\n' + readMore + '「 Transmisión a todos los chats 」')
  for (let id of chats) conn.copyNForward(id, content, true)
  conn.reply(m.chat, `_Enviando mensaje de difusión a ${chats.length} chats_`, m)
}
handler.help = ['broadcast','bc'].map(v => v + ' *texto*')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
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

