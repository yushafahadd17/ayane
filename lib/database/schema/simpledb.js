import fs from 'fs'
import dc from '../index.js'

export class simpledb {
  constructor(m, isCmd, isCreator, makeid) {
    this.m = m;
    this.isCmd = isCmd;
    this.isCreator = isCreator;
    this.user = global.db.data.users[this.m.sender]
    this.limitUser = isCreator ? 'Infinity' : 15;
    this.money = isCreator ? 1000000 : 10000;
    let isNumber = x => typeof x === 'number' && !isNaN(x)
    if(this.isCmd || this.isCreator) {
      if(this.user) {
        if (typeof this.user !== 'object') global.db.data.users[this.m.sender] = {}
        if(!('Name' in this.user)) this.user.name = this.m.pushName
        if(!isNumber(this.user.limit)) this.user.limit = this.limitUser
        if(!isNumber(this.user.balance)) this.user.balance = this.money
        if(!isNumber(this.user.afkTime)) this.user.afkTime = -1
        if(!('afkReason' in this.user)) this.user.afkReason = ''
        if(!('registered' in this.user)) this.user.registered = false
        
        if(this.user.registered) {
          if (!('name' in this.user)) this.user.name = this.m.pushName
          if (!('serial' in this.user)) this.user.serial = makeid(10).toUpperCase()
        }
      } else {
        global.db.data.users[this.m.sender] = {
          name: this.m.pushName,
          limit: this.limitUser,
          balance: this.money,
          registered: false,
          serial: makeid(10).toUpperCase(),
          afkTime: -1,
          afkReason: ''
        }
      }
    }
  }
}
