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
var inputARGV = process.argv
var jsRunner = new JSRacer(inputARGV[2], inputARGV[3]);

while (jsRunner.finished()) {
  sleep(800);
  jsRunner.reset_board()
  jsRunner.print_board(3, 20)
}
