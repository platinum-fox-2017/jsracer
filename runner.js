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
var start_race = process.argv
var start = true;
console.log(start_race);

if (!start_race[2] && !start_race[3]) {
  start = false;
  console.log('Jangan lupa mengisi jumlah racer dan jumlah lintasan ! Silahkan input ulang !');
} else if (start_race[2] < 2) {
  start = false;
  console.log('Jumlah minimum racer adalah 2. Silahkan input ulang !');
} else if (start_race[3] < 15) {
  start = false;
  console.log('Jumlah minimum lintasan adalah 15. Silahkan input ulang !')
}


// CREATE DATA PLAYER
var listPemain = 'abcdefghijklmnopqrstuvwxyz';
var dataPemain = [];

for (var i = 0; i < start_race[2]; i++) {
  if (start) {
    var data = {};
    data.nama = listPemain[i];
    data.position = 0;
    data.status = false;
  }
  dataPemain.push(data);
}
  
// console.log(dataPemain);
/*
[ { nama: 'a', position: 0, status: false },
  { nama: 'b', position: 0, status: false },
  { nama: 'c', position: 0, status: false } ]
*/
// console.log(dataPemain[0].position); // 0

var racer = new JSRacer(dataPemain,start_race[3]);
// console.log(racer);

// console.log(racer.player[0]);

sleep(500);
racer.reset_board();
racer.print_board();
while (racer.finished() == false && start) {
  // console.log('===1', racer);
  // console.log('===2', racer.finished())
  for (var i = 0; i < dataPemain.length; i++) {
    if (racer.finished() == true) {
      start = false;
    } else {
      racer.move_player(dataPemain[i].nama);
    }
    
  }
  sleep(500);
  racer.reset_board();
  racer.print_board();
}

// console.log(racer);
racer.winner();
