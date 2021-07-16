let handler = async (m, { conn, text }) => {

  let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
{m.reply('*Agregado con exito✅*')}
  conn.groupAdd(m.chat, users)
}
handler.help = ['agregar', '+'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(agregar|o\+)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler