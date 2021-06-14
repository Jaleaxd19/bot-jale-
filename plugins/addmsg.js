let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Mensaje de respuesta!'
    if (!text) throw `Usar *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' se ha registrado en la lista de mensajes`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`Mensaje agregado exitosamente en la lista de mensajes como '${text}'
    
Accede con ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' *texto*')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/

module.exports = handler