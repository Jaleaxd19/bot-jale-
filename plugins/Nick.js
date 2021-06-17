let handler = m => m.reply('*Hola que tal soy bot sexy ten las iniciales* , *ABDNICK*')

handler.customPrefix = /iniciales|nick|Iniciales/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
