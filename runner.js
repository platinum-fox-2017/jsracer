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

const argv = process.argv;

var race = new JSRacer(argv[2], argv[3])
race.print_board()
console.log("\n")
while(!race.isWinner) {
  race.advanced_player()
  sleep(1000)
}
console.log("\n")
