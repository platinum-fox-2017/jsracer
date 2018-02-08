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

var argv = process.argv.slice(2)

let tutorial = `==================== JS RACER ====================
cara mengggunakan argv pada node runner.js
- angka pertama setelah node runner.js menentukan jumlah pemain (minimal 2)
- angka kedua setelah node runner.js menentukan panjang lintasan (minimal 15)

Ayo taklukan lintasan dan menangkan hadiahnya!
==================================================
`

if(argv[0] == 'help' || argv.length > 4){
  console.log(tutorial);
} else if(argv[0] < 2){
  console.log('pemainnya kurang');
} else if(argv[1] < 15){
  console.log(`panjang lintasan minimal 15`);
} else if(argv[0] >= 2 && argv[1] >= 15){
  let jsRace = new JSRacer(argv[0],argv[1])
  console.log('==== GAME START ====');
  while(!jsRace.isFinished){
    jsRace.print_board()
    sleep(1000)
    jsRace.reset_board()
  }
  jsRace.print_board()
} else {
  console.log(tutorial);
}
