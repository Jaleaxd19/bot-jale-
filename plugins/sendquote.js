async function handler(m) {
    if (!m.quoted) throw 'mensaje de respuesta!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'el mensaje que respondió no contiene una respuesta!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i
module.exports = handler