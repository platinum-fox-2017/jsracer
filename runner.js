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

let player = process.argv[2]
let length = process.argv[3]

// Your code here...
let newRace = new JSRacer(player, length)

if (player < 2 || length < 10) {
    console.log('JANGAN BALAPAN SENDIRIAN/JALUR PENDEK, MEMBAHAYAKAN ORANG LAIN')
} else {
    while (!newRace.finished()) {
        newRace.reset_board();
        newRace.advanced_player();
        console.log(newRace.print_board());
        sleep(800);
    }
    newRace.winner()
}
