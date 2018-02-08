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
let player = process.argv[2]
let lintasan = process.argv[3]
let startGame = new JSRacer(player,lintasan)

while(!startGame.finished()){
  startGame.reset_board()
  console.log('Race is on!!')
  startGame.advanced_player()
  console.log(startGame.print_board())
  sleep(1000)
}