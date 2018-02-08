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


let player = process.argv[2];
let length = process.argv[3];
let race = new JSRacer(player, length);

if(player <2 || length <15){
  console.log('player/length kurang')
}
else{
  while(race.finished()){
    race.reset_board();
    console.log(race.print_board());
    sleep(500);
  }
}


// console.log(race.create_player());
// console.log(race.position());
