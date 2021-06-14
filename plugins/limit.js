let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`${global.DATABASE.data.users[who].limit} Limite`)
}
handler.help = ['limite [@user]']
handler.tags = ['xp']
handler.command = /^(limite)$/i
module.exports = handler