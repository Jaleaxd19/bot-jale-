let handler = function (m) {
  // this.sendContact(m.chat, '1 360 559 7043', 'Nita', m)
  this.sendContact(m.chat, '13605597043', 'Nita', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
