let handler = m => m.reply('*Si... si estoy aqui.*👺 , *¿En que te puedo ayudar? Escribe_ *.?* o *.menu* _para que puedas ver mis funciones._*')
conn.senFile(m.chat......, m)

handler.customPrefix = /^(bot)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
