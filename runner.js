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
let players = process.argv[2]
let length = process.argv[3]
const jsracer = new JSRacer(players, length);

if(jsracer.players < 2 || jsracer.length < 15){
  console.log('Maaf, player atau panjang lintasan kurang!');
  console.log('Note: minimal jumlah player adalah 2 dan panjang linatasan adalah 15');
} else {
  while (jsracer.finished()) {
    jsracer.reset_board();
    console.log(jsracer.print_line());
    jsracer.advanced_player();
    sleep(300)
  }
}
