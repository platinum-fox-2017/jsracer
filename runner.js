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
let totalPlayer = process.argv[2]
let lengthArena = process.argv[3]
// console.log(totalPlayer)
let jsracer = new JSRacer(parseInt(totalPlayer), parseInt(lengthArena))
// console.log(jsracer.finished())
while (jsracer.finished() !== true) {
  console.log(jsracer.print_board())
  // sleep(3000)
  // jsracer.reset_board()
}

// for (let i = 0; i < 5; i++) {
//   console.log(jsracer.print_board())
// }
