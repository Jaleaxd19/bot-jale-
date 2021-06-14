let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiquete a uno'
    if (global.prems.includes(who.split`@`[0])) throw 'Sudah premium!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `*PREMIUM AGREGADO* ✅\n\nHola, @${who.split`@`[0]}. Ya eres premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addprem *@uuario*']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i
handler.rowner = true
module.exports = handler