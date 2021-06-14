//jangan ubah om plisss
//om jangan ambil
//yah om
let fs = require ('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let handler = async m => m.reply(`
LISTA APK

➨ 𝗔𝗹𝗶𝗴𝗵𝘁 𝗠𝗼𝘁𝗶𝗼𝗻 𝗺𝗼𝗱
➢ https://apkdone.com/alight-motion/

➨ 𝗞𝗶𝗻𝗲𝗺𝗮𝘀𝘁𝗲𝗿
➢ https://apkdone.com/kinemaster-apk-mods/

➨ 𝗜𝗻𝘀𝗵𝗼𝘁
➢ https://apkdone.com/inshot/

➨ 𝗙𝗶𝗹𝗺𝗼𝗿𝗮𝗚𝗼
➢ https://apkdone.com/filmorago/

➨ 𝗟𝗶𝗴𝗵𝘁𝗿𝗼𝗼𝗺
➢ https://apkdone.com/adobe-lightroom/

➨ 𝗣𝗶𝗰𝘀𝗮𝗿𝘁
➢ https://apkdone.com/picsart-apk-mods/
`.trim())
handler.help = ['apkmod']
handler.tags = ['tools']
handler.command = /^apkmod|aplikasimod$/i
handler.register = true

module.exports = handler
