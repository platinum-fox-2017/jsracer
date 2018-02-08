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

var myArgv = process.argv;
var play = new JSRacer(myArgv[2], myArgv[3]);
play.generate_player_data();

while(!play.finish){
  sleep(1000);
  play.reset_board();
  play.finished();
  play.print_board();
}