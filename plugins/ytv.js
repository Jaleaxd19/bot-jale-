let limit = 30
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... donde esta el link?'
  let server = (args[1] || 'id4').toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Título:* ${title}
*Tamaño:* ${filesizeF}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
`.trim(), m, false, _thumb || {})
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ' <url> [server: id4, en60]')
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.owner = false
handler.mods = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

