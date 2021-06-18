let handler = m => m.reply('*agan caso al Jefe de Jefes* , *El es el mi bello patron* https://wa.me/593960841123')

handler.customPrefix = /JEFE|Lider del clan|El lider del clan/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
