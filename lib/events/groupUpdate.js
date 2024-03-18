import moment from 'moment-timezone'
import { getBuffer } from '../messages/myfunc.js'
export default class memberUpdate {
  constructor(conn, anu, dc) {
    this.conn = conn;
    this.anu = anu;
    this.db = dc;
    this.id = this.anu.id;
  }
  async run() {
    this.metadata = await this.conn.groupMetadata(this.anu.id);
    this.participants = this.anu.participants
    const { action } = this.anu
    this.date = `${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
    this.time = `${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB`
    for (const num of this.participants) {
    let ppuser
    try {
       ppuser = await this.conn.profilePictureUrl(num, "image")
    } catch {
       ppuser = `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60`
    }
    let nameUser = `@${num.split("@")[0]}`
      switch (action) {
        case 'add': {
          let teks = `Hi @${num.split("@")[0]} Welcome To ${this.metadata.subject}`
          let teksWelcome = (this.db.group[this.anu.id].sWelcome || teks).replace('@user', `@${num.split("@")[0]}`).replace('@groupName', `${this.metadata.subject}` || '')
          if(this.db.group[this.id]?.welcome) {
            return this.conn.sendMessage(this.anu.id, { text: `${teksWelcome}`, contextInfo: { mentionedJid: [num], externalAdReply: {title: `𝚆 𝙴 𝙻 𝙲 𝙾 𝙼 𝙴`, body: `${this.date} || ${this.time}`, thumbnailUrl: ppuser, renderLargerThumbnail: true, mediaType: 1, sourceUrl: this.db.config.myweb }}})
          }
        }
        break
        case 'remove': {
          let teks = `Goodbye @${num.split("@")[0]} I hope you don't come back`
          let teksLeft = (this.db.group[this.anu.id].sGoodbye || teks).replace('@user', `@${num.split("@")[0]}`).replace('@groupName', `${this.metadata.subject}` || '')
          if(this.db.group[this.id]?.goodbye) {
            return this.conn.sendMessage(this.anu.id, { text: `${teksLeft}`, contextInfo: { mentionedJid: [num], externalAdReply: {title: `𝙶 𝙾 𝙾 𝙳 𝙱 𝚈 𝙴`, body: `${this.date} || ${this.time}`, thumbnailUrl: ppuser, renderLargerThumbnail: true, mediaType: 1, sourceUrl: this.db.config.myweb } }})
          }
        }
        break
        case 'promote': {
          this.conn.sendMessage(this.anu.id, { text: `@${num.split("@")[0]} Congratulations, Now you are a Group Admin`, mentions: [num]})
        }
        break
        case 'demote': {
          this.conn.sendMessage(this.anu.id, { text: `@${num.split("@")[0]} Hahaha You are in demote`, mentions: [num]})
        }
        break
      }
    }
  }
}
