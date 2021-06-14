let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Usar *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE._data.msgs
    if (!text in msgs) throw `'${text}' no incluido en la lista de mensajes`
    delete msgs[text]
    m.reply(`Mensajes eliminados con éxito en la lista de mensajes con nombre '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|sticker)$/

module.exports = handler