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
let objObstacle = {
  name : Math.floor(Math.random()*players),
  position : Math.floor(Math.random()*length)
}
let objpowerUp = {
  name : Math.floor(Math.random()*players),
  position : Math.floor(Math.random()*length)
}
let runJsRacer = new JSRacer(players, length, objObstacle, objpowerUp)

while(!runJsRacer.isFinish){
  runJsRacer.reset_board()
  console.log(runJsRacer.print_board())
 // runJsRacer.advanced_player();
  sleep(1500)
}