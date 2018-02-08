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
let argv = process.argv;
let racing = new JSRacer(argv[2],argv[3]);
while(racing.finished() == false){
  racing.print_board();
  sleep(200);
  if(racing.finished()){
    console.log(racing.winner());  
    break;
  }
  racing.reset_board();
}

