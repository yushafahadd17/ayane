const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

const teksMenu = (prefix) => {
return (`
*-i* ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ɪɴғᴏʀᴍᴀsɪ ғᴇᴀᴛᴜʀᴇ
ᴄᴏɴᴛᴏʜ : ${prefix}ᴀɪ -i
`+ readmore +`
┏━━ *MAIN*
│◦ ${prefix}ᴀɪ
│◦ ${prefix}ʙᴀʀᴅ
│◦ ${prefix}ᴀғᴋ <ᴀʟᴀsᴀɴ>
│◦ ${prefix}ᴊᴀᴅɪʙᴏᴛ -sᴛᴀʀᴛ
│◦ ${prefix}ᴊᴀᴅɪʙᴏᴛ -sᴛᴏᴘ
│◦ ${prefix}ᴊᴀᴅɪʙᴏᴛ -ᴅᴇʟᴇᴛᴇ
│◦ ${prefix}ᴊᴀᴅɪʙᴏᴛ -ʟɪsᴛ
│◦ ${prefix}ᴊᴀᴅɪʙᴏᴛ -ɪ
│◦ ${prefix}ᴍᴇɴғᴇs <ɴᴏᴍᴏʀ|ɴᴀᴍᴀ|ᴘᴇsᴀɴ>
│◦ ${prefix}ʙᴀʟᴀsᴍᴇɴғᴇs <ᴘᴇsᴀɴ>
│◦ ${prefix}ᴛᴏʟᴀᴋᴍᴇɴғᴇs 
│◦ ${prefix}sᴛᴏᴘᴍᴇɴғᴇs
┗━━━━━━━━━━━

┏━━ *OWNER*
│◦ ${prefix}ᴏɴ ᴘᴜʙʟɪᴄ <ᴏᴡɴᴇʀ>
│◦ ${prefix}ᴏғғ ᴘᴜʙʟɪᴄ <ᴏᴡɴᴇʀ>
│◦ ${prefix}ʀᴇsᴛᴀʀᴛ <ᴏᴡɴᴇʀ>
│◦ ${prefix}sᴇᴛᴘᴘʙᴏᴛ <ᴏᴡɴᴇʀ>
│◦ ${prefix}sʜᴜᴛᴅᴏᴡɴ <ᴏᴡɴᴇʀ>
│◦ ${prefix}ᴜʙᴀʜʀᴇᴘʟʏ <ᴏᴡɴᴇʀ>
│◦ ${prefix}ᴄʟᴇᴀʀsᴇsɪ <ᴏᴡɴᴇʀ>
│◦ ${prefix}ᴄʟᴇᴀʀᴛᴍᴘ <ᴏᴡɴᴇʀ>
│◦ ${prefix}ᴄʀᴇᴀᴛᴇɢᴄ <ᴏᴡɴᴇʀ>
│◦ ${prefix}ʟᴇᴀᴠᴇɢᴄ <ᴏᴡɴᴇʀ>
┗━━━━━━━━━━━

┏━━ *MAKER*
│◦ ${prefix}sᴛɪᴄᴋᴇʀ
│◦ ${prefix}sᴡᴍ <ᴛᴇxᴛ1|ᴛᴇxᴛ2>
┗━━━━━━━━━━━

┏━━ *DOWNLOADER*
│◦ ${prefix}ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>
│◦ ${prefix}ᴛɪᴋᴛᴏᴋᴍᴘ4 <ᴜʀʟ>
│◦ ${prefix}ᴛɪᴋᴛᴏᴋᴍᴘ3 <ᴜʀʟ>
│◦ ${prefix}ʏᴛᴍᴘ3 <ᴜʀʟ>
│◦ ${prefix}ʏᴛᴍᴘ4 <ᴜʀʟ>
│◦ ${prefix}ʏᴛᴘʟᴀʏ <ǫᴜᴇʀʏ>
│◦ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ <ᴜʀʟ|ǫᴜᴇʀʏ>
┗━━━━━━━━━━━

┏━━ *GROUP*
│◦ ${prefix}sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>
│◦ ${prefix}sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>
│◦ ${prefix}sᴇᴛɴᴀᴍᴇɢᴄ <ᴛᴇxᴛ>
│◦ ${prefix}sᴇᴛᴅᴇsᴄ <ᴛᴇxᴛ>
│◦ ${prefix}sᴇᴛᴘᴘɢʀᴏᴜᴘ <ɪᴍᴀɢᴇ>
│◦ ${prefix}ᴄʜᴀɴɢᴇᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>
│◦ ${prefix}ᴄʜᴀɴɢᴇɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>
│◦ ${prefix}ᴀɴᴛɪʟɪɴᴋ ɢʀᴏᴜᴘ <ᴏɴ|ᴏғғ>
│◦ ${prefix}ᴀɴᴛɪʟɪɴᴋ ᴡᴀᴍᴇ <ᴏɴ|ᴏғғ>
│◦ ${prefix}ᴏғғ ᴡᴇʟᴄᴏᴍᴇ <ᴀᴅᴍɪɴ>
│◦ ${prefix}ᴏғғ ʟᴇғᴛ <ᴀᴅᴍɪɴ>
│◦ ${prefix}ᴏɴ ᴡᴇʟᴄᴏᴍᴇ <ᴀᴅᴍɪɴ>
│◦ ${prefix}ᴏɴ ʟᴇғᴛ <ᴀᴅᴍɪɴ>
│◦ ${prefix}ᴀᴅᴅ <ʀᴇᴘʟʏ>
│◦ ${prefix}ᴋɪᴄᴋ <ʀᴇᴘʟʏ|ᴛᴀɢ>
│◦ ${prefix}ᴘʀᴏᴍᴏᴛᴇ <ʀᴇᴘʟʏ|ᴛᴀɢ>
│◦ ${prefix}ᴅᴇᴍᴏᴛᴇ <ʀᴇᴘʟʏ|ᴛᴀɢ>
│◦ ${prefix}ɢʀᴏᴜᴘ <ᴏᴘᴇɴ|ᴄʟᴏsᴇ>
│◦ ${prefix}ᴛᴀɢᴀʟʟ <ᴛᴇxᴛ>
┗━━━━━━━━━━━

┏━━ *STORE*
│◦ ${prefix}ᴀᴅᴅᴘʀᴏᴅᴜᴋ <ɪᴅ|ɴᴀᴍᴀ|ʜᴀʀɢᴀ|ᴅᴇsᴄ>
│◦ ${prefix}ᴅᴇʟᴇᴛᴇᴘʀᴏᴅᴜᴋ <ɪᴅ>
│◦ ${prefix}ʟɪʜᴀᴛᴘʀᴏᴅᴜᴋ <ɪᴅ>
│◦ ${prefix}ʟɪsᴛᴘʀᴏᴅᴜᴋ <ɪᴅ>
│◦ ${prefix}ᴘᴀʏᴍᴇɴᴛ
│◦ ${prefix}ʟɪsᴛʜᴀʀɢᴀ
│◦ ${prefix}ᴀᴅᴅᴛᴇsᴛɪ
│◦ ${prefix}ᴅᴇʟᴛᴇsᴛɪ
│◦ ${prefix}ᴛᴇsᴛɪ
┗━━━━━━━━━━━

┏━━ *BUG MENU*
│◦ ${prefix}❤️ <ᴊᴜᴍʟᴀʜ>
│◦ ${prefix}😁 <ᴊᴜᴍʟᴀʜ>
│◦ ${prefix}😱 <ᴊᴜᴍʟᴀʜ>
│◦ ${prefix}🤣 <ᴊᴜᴍʟᴀʜ>
│◦ ${prefix}😂 <ᴊᴜᴍʟᴀʜ>
│◦ ${prefix}😘 <ᴊᴜᴍʟᴀʜ>
│◦ ${prefix}💔 <ᴊᴜᴍʟᴀʜ>
│◦ ${prefix}👊 <ᴊᴜᴍʟᴀʜ>
│◦ ${prefix}🌷 <628xxxx>
│◦ ${prefix}🐵 <628xxxx>
│◦ ${prefix}🙈 <628xxxx>
│◦ ${prefix}🙉 <628xxxx>
│◦ ${prefix}🙊 <628xxxx>
│◦ ${prefix}🐒 <628xxxx>
│◦ ${prefix}ꜱᴇɴᴅɢᴀꜱꜰᴜʟʟ <628xxxx> 
│◦ ${prefix}ꜱᴇɴᴅᴜɴʟɪᴛʀᴏʟɪ <628xxxx> 
│◦ ${prefix}ꜱᴇɴᴅᴜɴʟɪᴅᴏᴄᴜ <628xxxx> 
│◦ ${prefix}ꜱᴇɴᴅᴜɴʟɪᴄᴜʏ <628xxxx> 
│◦ ${prefix}ꜱᴇɴᴅᴜɴʟɪʙᴏᴍ <628xxxx> 
│◦ ${prefix}ꜱᴇɴᴅᴜɴʟɪʟᴀɢ <628xxxx> 
│◦ ${prefix}ꜱᴇɴᴅᴜɴʟɪᴅᴇʟᴀʏ <628xxxx> 
│◦ ${prefix}sᴇɴᴅɪɴᴠɪᴛᴇ <𝟼𝟸𝚇𝚇𝚇𝚇𝚇𝚇> 
│◦ ${prefix}sᴇɴᴅɪɴᴠɪᴛᴇ2 <𝟼𝟸𝚇𝚇𝚇𝚇> 
│◦ ${prefix}sᴇɴᴅɪɴᴠɪᴛᴇ3 <𝟼𝟸𝚇𝚇𝚇𝚇> 
┗━━━━━━━━━━━
`)
}

export default { teksMenu }