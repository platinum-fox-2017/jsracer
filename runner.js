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

var myArgv=process.argv

var racer=new JSRacer(myArgv[2],myArgv[3]);
// racer.advanced_player(2)

// racer.print_board();
// console.log(racer.position);
// for(var i=0; i<6; i++) {
//   racer.advanced_player(i%myArgv[2]);
// }
// racer.print_board();
var turn =-1;
racer.print_board();
do{
  sleep(1000);
  turn++;
  racer.advanced_player(turn%(racer.runner.length));
  racer.print_board();
}while(racer.position[turn%racer.runner.length]!==racer.length-1)
racer.winner(turn%racer.runner.length)
// console.log(racer.roll())