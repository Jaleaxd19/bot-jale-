let fetch = require('node-fetch')
let handler = async (m, { conn, text, participants, usedPrefix }) => {
  let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  conn.groupAdd(m.chat, users)

	if(isNaN(text) && !text.match(/@/g)){}
  else if(isNaN(text)) {
		var number = text.split`@`[1]}
  else if(!isNaN(text)) {
		var number = text}
	if(!text && !m.quoted) return conn.reply(m.chat, `*USO APROPIADO*\n\n┯┷\n┠≽ ${usedPrefix}oadd *593xxx*\n┠≽ ${usedPrefix}oadd *etiquetar*\n┷┯`, m)
	if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*Ingrese el número correcto !*`, m)

  try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
	let response = await conn.groupAdd(m.chat, users)
	let pp = await conn.getProfilePicture(m.chat).catch(_ => false)
	let jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
	for (let user of response.participants.filter(user => Object.values(user)[0].code == 403)) {
	  let [[jid, {
		invite_code,
		invite_code_exp
	  }]] = Object.entries(user)
	  let teks = `*Número privado* @${jid.split('@')[0]}\n\n_Enviando invitación..._`
	  m.reply(teks, null, {
		contextInfo: {
		  mentionedJid: conn.parseMention(teks)
		}
	  })
	  await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, false, 'Invitación para unirse a mi grupo de WhatsApp', jpegThumbnail ? {
		jpegThumbnail
	  } : {})
	}
} catch (e) {
		} finally {
			conn.groupAdd(m.chat, [user]).catch(console.log)
	}	
}
handler.help = ['add', '+'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(oadd|o\+)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
