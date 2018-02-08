"use strict"

const JSRacer = require('./js_racer')

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

let argv = process.argv.slice(2)
let help =`==================== JS RACER ======================

  Untuk memulai permainan ini,
  ketik angka pada titik ini <node runner.js ... ...>

$ angka pertama menentukan jumlah pemain (minimal 2)
$ angka kedua menentukan panjang lintasan (minimal 15)

====================================================`
if(argv[0] >= 3 && argv[1] > 15){
  let racer = new JSRacer(argv[0],argv[1])
  console.log(`===== permainan di mulai ======`)
  while(!racer.isFinished){
    racer.print_board()
    sleep(1000)
    racer.reset_board()
  }
}else if (argv[0] < 3){
  console.log('Yah gk seru banget tambah lagi donk pemainnya')
}else if (argv[1] <= 15 ){
  console.log('balap karung bang ??')
}else if(argv[0] === 'help' || argv.length > 4){
  console.log(help)
}else{
  console.log(help)
}
