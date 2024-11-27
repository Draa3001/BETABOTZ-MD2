global.owner = ['6285603256172']  
global.mods = ['6285603256172'] 
global.prems = ['6285603256172']
global.nameowner = 'Kingg'
global.numberowner = '6285603256172'
global.mail = 'epepbooyah1a@gmail.com' 
global.gc = 'https://chat.whatsapp.com/FuLN9mW1pbgCxgCMllBgZA'
global.instagram = '-'
global.wm = '© Sepp'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'King'
global.maxwarn = '5' // Peringatan maksimum
global.antiporn = true // Auto delete pesan porno (bot harus admin)

//INI WAJIB DI ISI!//
global.lann = 'nL2BoG36' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'U8HPVtIJ'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'nL2BoG36', 
  'https://api.botcahx.eu.org': 'U8HPVtIJ'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
