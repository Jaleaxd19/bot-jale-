let handler = async (m, { conn, command, text }) => {

  if (!text) throw `Siapa yang *${command.replace('how', '').toUpperCase()}*`

  conn.reply(m.chat, `

${command} *${text}*

*${text}* es *${Math.floor(Math.random() * 101)}*% ${command.replace('how', '').toUpperCase()}

`.trim(), m, m.mentionedJid ? {

    contextInfo: {

      mentionedJid: m.mentionedJid

    }

  } : {})

}

handler.help = ['gay', 'grilla', 'inteligente', 'guapo', 'bulgar', 'presumido', 'lesbiana', 'estresado', 'puerco', 'llorona', 'chicotriste'].map(v => 'how' + v + ' @nombre')

handler.tags = ['kerang']

handler.command = /^how(gay|grilla|inteligente|guapo|bulgar|presumido|lesbiana|estresado?|puerco|llorona|chicotriste)/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = true

handler.botAdmin = false

handler.fail = null

module.exports = handler
