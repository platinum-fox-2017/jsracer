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

if (myArgv[2] < 2 || myArgv[3] < 15) {
  console.log("Jumlah player harus lebih dari 2 DAN panjang lintasan harus lebih dari 15 !!");
} else {
  var theGame = new JSRacer(myArgv[2], myArgv[3]);  
  theGame.generateGame();

  var listPlayer = theGame.getPlayer();

  var finish = theGame.finished();

  while(finish == false) {
    sleep();
    theGame.reset_board();
    finish = theGame.finished();
    theGame.print_board();
  } 

}