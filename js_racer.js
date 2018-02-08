"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length, position) {
    this.runner= players || 3;
    this.length= length || 20;
    this.position= position || 0;
  }

  print_board() {
    var token='';
    for(var i=0; i<this.runner; i++) {
      token=String.fromCharCode(97+(i%this.runner))
      this.print_line(token,this.position);
    }
  }
  print_line(player, pos) {
    var line=[]
    for(var j=0; j<this.length; j++) {
      line.push(' ');
    }
    line.splice(pos,1,player)
    console.log(line.join('|'));
  }

  advanced_player(player) {
    
  }

  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
