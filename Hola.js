let handler = m => m.reply('*Hola que tal como va tu dia ??* , *Que tengas un exelente dia,tarde o noche... y si vas a dormir descansa mañana es un nuevo inicio*')

handler.customPrefix = /hola|Hola|holaa/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
