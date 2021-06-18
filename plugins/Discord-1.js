let handler = async m => m.reply(`
╭───❲ *✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨* ❳───╮
├┉↯❏ https://discord.gg/Zen6DQeVT6
╰───❲ *Discord ➣CLAN:嵐-ABDHILL-嵐* ❳──╯
`.trim())

handler.customPrefix = New RegExp
handler.command = /^(pasa discord)$/i
handler.group = true

module.exports = handler
