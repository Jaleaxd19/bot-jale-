let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*Respuesta:* ${pickRandom(['Sí', 'Quizás sí', 'Quizás', 'Quizás no', 'No', 'De ninguna manera'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['que *texto*?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^que$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

