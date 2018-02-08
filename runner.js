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

let no_of_players = process.argv[2];
let length_of_board = process.argv[3];
let new_race = new JSRacer(no_of_players,length_of_board);
while(!new_race.finished()){
  new_race.print_board();
  sleep(1000);
}
new_race.winner();

// Your code here...
