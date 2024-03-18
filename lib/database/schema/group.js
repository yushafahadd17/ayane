import dc from '../index.js'

export class Groups {
  constructor(m, groupMetadata) {
    this.m = m;
    this.groupMetadata = groupMetadata;
    this.groupName = this.groupMetadata.subject
  }
  Simple() {
    if(!this.m) return;
    if(!this.m.isGroup) return;
    let c = this.m.chat, chat = dc.group[c];
    if(!chat) dc.group[c] = {};
    if(chat) {
      if(!('name' in chat)) chat.name = this.groupName
      if(!('welcome' in chat)) chat.welcome = true
      if(!('goodbye' in chat)) chat.goodbye = true
      if(!('sWelcome' in chat)) chat.sWelcome = ""
      if(!('sGoodbye' in chat)) chat.sGoodbye = ""
      if(!('antilinkGc' in chat)) chat.antilinkGc = false
    } else {
      dc.group[c] = {
        name: this.groupName,
        welcome: true,
        goodbye: true,
        sWelcome: "",
        sGoodbye: "",
        antilinkGc: false
      }
    }
  }
}

