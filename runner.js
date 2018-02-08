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
let length = process.argv[3]

let start = new JSRacer(player, length)


while (true) {
  if (start.winner !== undefined) {
    console.log('winners: ' + start.winners())
    break;
  }

  start.advanced_player();
  sleep(1000)
}