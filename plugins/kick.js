let handler = async (m, { conn,text,usedPrefix, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])

  if(!text && !m.quoted) return conn.reply(m.chat, `*USO APROPIADO*\n\n┯┷\n┠≽ ${usedPrefix}kick *@usuario*\n┠≽ ${usedPrefix}kick *etiquetar*\n┷┯`, m)

  try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
} catch (e) {
		} finally {
			conn.groupRemove(m.chat, [user]).catch(console.log)
			conn.reply(m.chat, `*ÓRDENES RECIBIDAS*`, m)
	}	
}
handler.help = ['kick', '-'].map(v => v + ' @usuario')
handler.tags = ['group']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
