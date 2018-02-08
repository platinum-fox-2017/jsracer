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
if(!players && !length) {
  console.log(`put number of players and length of track`)
} else if(players < 2) {
  if(length < 15) {
    console.log(`rules: the minimum number of players are 2, the minimum length of track is 15`)
  } else {
    console.log(`number of players must be greater than or equal to 2`)
  }
} else if(length < 15) {
  console.log(`the minimum length of track is 15`)
} else {
  let play = new JSRacer(players, length);
  play.new_player(players, length);

  while (!play.finished()) {
    play.reset_board();
    play.finished();
    for (let i = 0; i < play.players.length; i++) {
      play.advanced_player(play.players[i]);
      if (play.finished()) break;
    }
    console.log(play.print_board());
    sleep(1000);
  }
  play.winner();
}