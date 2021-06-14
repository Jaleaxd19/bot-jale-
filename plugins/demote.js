let handler = async (m, { conn,usedPrefix, text }) => {
	if(isNaN(text) && !text.match(/@/g)){
	
	}else if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `*USO APROPIADO*\n\n┯┷\n┠≽ ${usedPrefix}quitar @usuario\n┠≽ ${usedPrefix}quitar -> responder chat\n┠≽ ${usedPrefix}quitar 593xxx\n┷┯`, m)
	if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*Ingrese el número correcto !*`, m)
	
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
			conn.groupDemoteAdmin(m.chat, [user]).catch(console.log)
			conn.reply(m.chat, `*ÓRDENES RECIBIDAS*`, m)
	}	
}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'demote ' + v)
handler.tags = ['group']
handler.command = /^(demote)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler
