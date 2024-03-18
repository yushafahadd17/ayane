import dc from '../index.js'

export class Users {
  constructor(m, args) {
    this.m = m;
    this.args = args
    this.sender = this.m.sender;
  }
  Simple() {
    if(!this.m) return;
    let c = this.m.sender, user = dc.user[c];
    if(!user) dc.user[c] = {}
    if(user) {
      if(!isNumber(user.afkTime)) user.afkTime = -1
      if(!('afkReason' in user)) user.afkReason = ''
    } else {
      dc.user[c] = {
        afkTime: -1,
        afkReason: ''
      }
    }
  }
}

