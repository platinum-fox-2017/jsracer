
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

// Your code here...
let startGame = process.argv
let start = true;
console.log(startGame);

//aturan main
if(!startGame[2] && !startGame[3]) console.log('Jangan lupa isi jumlah pemain dan panjang lintasan');
else if(startGame[2]<2 && startGame[3]<15) {
  start = false
  console.log('Jumlah pemain minimal 2');
  console.log('Panjang lintasan minimal 15');
}else if(startGame[2]<2) {
  start = false
  console.log('Jumlah pemain minimal 2');
} else if(startGame[3]<15) {
  start = false
  console.log('Panjang lintasan minimal 15');
} else {
  //menambah player dan length menggunakan argv
  let listNamePlayer = 'abcdefghijklmnopqrstuvwxyz'
  let dataPlayer = []
  if(start) {
    for(let i=0; i<startGame[2]; i++) {
      let data = {}
      data.name = listNamePlayer[i]
      data.position = 0
      // data.status = false
      dataPlayer.push(data)
    }
  }

  let jsRacer = new JSRacer(dataPlayer, startGame[3]);
  // console.log(jsRacer);

  //print line saat start
  // jsRacer.print_board()

  //print saat lomba
  while (!jsRacer.finished()) {
    jsRacer.reset_board()
    for(let i=0; i<jsRacer.listPlayer.length; i++) {
      jsRacer.move(dataPlayer[i].name)
      if(jsRacer.finished()) break;
    }
    jsRacer.print_board()
    // console.log(jsRacer);
    sleep(1000);
  }
  jsRacer.winner()
}

// console.log(jsRacer);
// console.log(dataPlayer[0].name);
