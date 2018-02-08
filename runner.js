"use strict"

const JSRacer = require('./js_racer')

function sleep(milliseconds) {
  var start = new Date().getTime()
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}


let players = process.argv[2]
let length = process.argv[3]

let obstacle = {
  name : Math.floor(Math.random()*players),
  position : Math.floor(Math.random()*length)
}

let race = new JSRacer(players,length,obstacle)

while(!race.finish){
  race.reset_board();
  console.log(race.print_board());
  sleep(500);
}
