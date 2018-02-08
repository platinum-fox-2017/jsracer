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

const RunsJs = new JSRacer(3, 20)

// var myProses = process.argv
// console.log(myProses);

// const RunsJs = new JSRacer(3, 20)

RunsJs.print_board();

RunsJs.savePlayer();

RunsJs.moveOn();

console.log('Finish==================');
RunsJs.finished();
