let handler = async (m, { conn }) => {

m.reply(`*تابع 𝙈𝙄𝘿𝙊علي واتس:*\n
https://whatsapp.com/channel/0029Vaich7vLdQeUgMMBPc13
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
