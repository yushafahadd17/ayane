export default class calls {
  constructor(m, conn, dc) {
    this.m = m;
    this.conn = conn;
    this.db = dc;
  }
  start () {
    if(this.db.config?.antiCall) {
      if(this.m.status == "offer") {
        this.conn.rejectCall(this.m.id, this.m.from);
      };
    };
  }
}