let handler = m => m.reply('*Hola👋 soy 𝒃𝒐𝒕-𝒋𝒂𝒍𝒆𝒂 🌚??* , *En que te puedo ayudar¿?*_Escribe_ *#help* o *#Menú* _para que puedas ver mis funciones_ .*')

handler.customPrefix = /^(Hola)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
