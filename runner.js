"use strict"

const JSRacer = require('./js_racer')
const userInput = process.argv;
const players = userInput[2];
const length = userInput[3];

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
var jsRacer = new JSRacer(players, length);
if (players < 2)
  return console.log("\n\n[WARNING]  Player must be more than 2!\n\n");
if (length < 15)
  return console.log("\n\n[WARNING]  Length must be more than 15!\n\n");

jsRacer.reset_board();
jsRacer.print_board(0,false);
sleep(700);

while (!jsRacer.gameEnd) {
  for (let i = 0; i < players; i++) {
    jsRacer.reset_board();
    jsRacer.run_player(i);
    jsRacer.print_board(i);
    if (jsRacer.gameEnd) {
      jsRacer.winner(i);
      return 0;
    }
    sleep(500);
  }
}
