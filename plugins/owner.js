import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/249128749239
*instagram:*\ninstagram.com/mido

*youtube:*\nyoutube.com/@mido

*facebook page:*\https://www.facebook.com/MOHAMMEDADEL0128

*script bot :* github.com/𝙈𝙄𝘿𝙊

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
