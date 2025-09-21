/* 

 No Enc ? Buy Ke Tele > https://t.me/Xskycode

*/

const chalk = require("chalk");
const fs = require("fs");

global.owner = "6282346841421"
global.packname = 'FyzzOffcial'
global.botname = 'Vantaxz'
global.namaOwner = "Xskycode"
global.mode_public = true

global.linkChannel = "https://whatsapp.com/channel/"
global.idChannel = "12036341902409389@newsletter"
global.linkGrup = "https://chat.whatsapp.com/?mode=ac_t"
global.thumbnail = "https://files.catbox.moe/u67oy2.jpg"

global.dana = "0856242937893"
global.ovo = "Tidak tersedia"
global.gopay = "Tidak tersedia"
global.qris = "https://files.catbox.moe/wri0uz.jpg"

global.JedaPushkontak = 20000
global.JedaJpm = 5000

global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://server.ricotasya.my.id"
global.apikey = "ptla_xZZxSITraBdGqPT0Ge4nRb3HxLOZW9yX0oDM82J3" // Isi api ptla
global.capikey = "ptlc_TroIQEI72IEJRtMD2ZomZ1CV7Oeoi0ufEyWSWedle" // Isi api ptlc


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})