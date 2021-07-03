let handler = async (m, { conn, text, isROwner, isOwner }) => {

  if (text) {

    if (isROwner) global.conn.welcome = text

    else if (isOwner) conn.welcome = text

    global.DATABASE._data.chats[m.chat].sWelcome = text

    m.reply('La bienvenida se configuró correctamente\n@user (Mention)\n@subject (Título del grupo)')

  } else throw 'Donde esta el texto?'

}

handler.help = ['setwelcome <texto>']

handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i

module.exports = handler
