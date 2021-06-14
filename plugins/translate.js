// ariffb - http:/wa.me/6283128734012
const translate = require('translate-google-api')
let handler = async (m, { text, usedPrefix }) => {
    goblok = `Ejemplo: \n${usedPrefix}tr codigo de idioma|texto\n${usedPrefix}tr es|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/language`
    if (!text) throw goblok

    let [to, trans] = text.split`|`

    if (!to) throw `Por favor ingrese el código de idioma\n\nEjemplo: \n${usedPrefix}tr es|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/language`
    if (!trans) throw `Por favor ingrese la frase que desea traducir.\n\nEjemplo: \n${usedPrefix}tr es|thankyou`

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(`${result[0]}`)
        console.log(result[0])
    } catch (e) {
        throw goblok
    }

}
handler.help = ['translate'].map(v => v + ' <to>|<teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 500

module.exports = handler

