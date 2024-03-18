import fs from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const dirr = join(dirname(fileURLToPath(import.meta.url)), "file")
const dbName = "database.json"
const file = {
  config: join(dirr, "config." + dbName),
  mess: join(dirr, "mess." + dbName),
  group: join(dirr, "group." + dbName),
  user: join(dirr, "user." + dbName),
  menfes: join(dirr, "menfes." + dbName),
  store: {
    produk: join(dirr, "produk.json")
  },
  antilink: {
    group: join(dirr, "/feature/antilink_group.json"),
    wame: join(dirr, "/feature/antilink_wame.json") 
  }
}
fs.accessSync(file.config);
fs.accessSync(file.mess);
fs.accessSync(file.group);
fs.accessSync(file.user);
fs.accessSync(file.menfes);
fs.accessSync(file.store.produk)

const set = {
  config: JSON.parse(fs.readFileSync(file.config)),
  mess: JSON.parse(fs.readFileSync(file.mess)),
  group: JSON.parse(fs.readFileSync(file.group)),
  user: JSON.parse(fs.readFileSync(file.user)),
  menfes: JSON.parse(fs.readFileSync(file.menfes)),
  store: {
    produk: JSON.parse(fs.readFileSync(file.store.produk))
  },
  antilink: {
    group: JSON.parse(fs.readFileSync(file.antilink.group)),
    wame: JSON.parse(fs.readFileSync(file.antilink.wame))
  }
}
export default set

setInterval(async() => {
  fs.writeFileSync(file.config, JSON.stringify(set.config, null, 2));
  fs.writeFileSync(file.mess, JSON.stringify(set.mess, null, 2));
  fs.writeFileSync(file.group, JSON.stringify(set.group, null, 2));
  fs.writeFileSync(file.user, JSON.stringify(set.user, null, 2));
  fs.writeFileSync(file.menfes, JSON.stringify(set.menfes, null, 2));
  fs.writeFileSync(file.store.produk, JSON.stringify(set.store.produk, null, 2));
}, 990);