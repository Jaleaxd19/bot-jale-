let handler = m => m.reply('*Holaπ soy πππ-πππππ π??* , *En que te puedo ayudarΒΏ?*_Escribe_ *#help* o *#MenΓΊ* _para que puedas ver mis funciones_ .*')

handler.customPrefix = /^(Hola)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
