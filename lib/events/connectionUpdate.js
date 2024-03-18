import chalk from 'chalk'

export default class connection {
  constructor(update, WAConnection) {
    this.up = update;
    this.WAConnection = WAConnection;
    const { connection } = this.up
    switch (connection) {
      case 'close': {
        console.info(`Connection info: ` + chalk.red(`Reconnecting . . .`));
        new this.WAConnection().run();
      }
      break
      case 'open': {
        console.warn(`Connection info: ` + chalk.blue(`Connected . . .`));
      }
      break 
    }
  }
}