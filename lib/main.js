import "./messages/ayane.js"
import FauziConnect, {
  useMultiFileAuthState,
  makeInMemoryStore,
  PHONENUMBER_MCC,
  makeCacheableSignalKeyStore,
  jidNormalizedUser  
} from '@whiskeysockets/baileys';

import readline from 'readline';
import pino from 'pino'
import fs from 'fs'
import chalk from 'chalk'
import connectionUpdate from './events/connectionUpdate.js'
import groupUpdate from './events/groupUpdate.js'
import Serialize from './utils/serialize.js'
import Anticall from './events/call.js'
import FauzidevMsg from './messages/ayane.js'
import dc from './database/index.js'
const { state, saveCreds } = await useMultiFileAuthState("./lib/database/session")

class WAConnection {
  constructor() {
    this.phoneNumber = dc.config.pairingNumber;
    this.pairingCode = !!this.phoneNumber || process.argv.includes("--code");
    this.rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    this.question = (text) => new Promise((resolve) => this.rl.question(text, resolve));
    this.conn = FauziConnect.default({
      logger: pino({ level : "silent" }),
      printQRInTerminal: !this.pairingCode,
      browser: ['Chrome (Linux)', '', ''],
      auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),  
      }
    });
  }
  async run () {
    this.store?.bind(this.conn.ev)
    await (await import("./utils/database.js")).default()
    await this.pairingCodeAccess()
    this.conn.ev.process(async (events) => {
      if(events['messages.upsert']) {
        const chatUpdate = events['messages.upsert']
        if (global.db.data) await global.db.write() 
        if (!chatUpdate.messages) return;
        let m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
        if (!m.message) return
        if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
        m = await Serialize(this.conn, m, this.store) 
        FauzidevMsg(this.conn, m, chatUpdate, this.store)
      }
      if(events["creds.update"]) {
        await saveCreds()
      }
      if(events["call"]) {
        const m = events["call"][0];
        console.log(m)
        const p = new Anticall(this.conn, m, dc)
        p.start();
      };
      if(events["connection.update"]) {
        const update = events["connection.update"];
        const { connection } = update;
        new connectionUpdate(update, WAConnection)
        const peler = dc.config.jadibotList 
        for(let i of peler) {
          dc.config.jadibotList.splice(i)
        }
      }
      if(events['group-participants.update']) {
        const anu = events['group-participants.update']
        if (global.db.data == null) await loadDatabase()
        try {
          console.log(anu)
          const f = new groupUpdate(this.conn, anu, dc)
          f.run()
        } catch (err) {
          console.log(err)
        }
      }
    }) 
  }
  async pairingCodeAccess () {
    if(this.pairingCode && !this.conn.authState.creds.registered) {
      if(!!this.phoneNumber) {
        this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '')
          if(!Object.keys(PHONENUMBER_MCC).some(v => this.phoneNumber.startsWith(v))) {
          console.log(`Start with country code of your WhatsApp Number, example:` + chalk.blue(` +628xxx : `));
          process.exit(0);
        };
      } else {
        this.phoneNumber = await this.question(`Please type your WhatsApp number \nFor example:` + chalk.blue(` +628xxx : `) );
        this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '');
        if(!Object.keys(PHONENUMBER_MCC).some(v => this.phoneNumber.startsWith(v))) {
          console.log(`Start with country code of your WhatsApp Number, example:` + chalk.blue(` +628xxx : `));
          this.phoneNumber = await this.question(`Please type your WhatsApp number \nFor example:` + chalk.blue(` +628xxx : `));
          this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '');
          this.rl.close();
        };
      }; 
      setTimeout(async () => {
        let code = await this.conn.requestPairingCode(this.phoneNumber);
        code = code?.match(/.{1,4}/g)?.join("-") || code;
        console.log("Your Pairing Code : " + chalk.blue(code))
      }, 3000);
    } 
  }
}
new WAConnection().run()