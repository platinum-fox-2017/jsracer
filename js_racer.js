"use strict"

const Dice = require('./dice');
var dice=new Dice()
class JSRacer {
  constructor(players, length, dice) {
    this.runner= this.playersToken(players) || this.playersToken(3)
    this.length= length || 20
    this.position= this.firstPos(players) || this.firstPos(3)
  }

  playersToken(players) {
    var arrPlayer=[];
    for(var p=0; p<players; p++) {
      arrPlayer.push(String.fromCharCode(97+p));
    }
    return arrPlayer;
  }

  firstPos(pos) {
    var arrLoc=[];
    for(var loc=0; loc<pos; loc++) {
      arrLoc.push(0)
    }
    return arrLoc;
  }

  print_board() {
    this.reset_board();
    for(var i=0; i<this.runner.length; i++) {
      this.print_line(this.runner[i],this.position[i]);
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

  advanced_player(playerIndex) {
    this.position[playerIndex]+=dice.roll()
    if(this.position[playerIndex]>this.length-1) {
      this.position[playerIndex]=Number(this.length-1);
    }
  }

  roll() {
    return dice.roll()
  }

  winner(playerIndex) {
    console.log(`Congratulations ${this.runner[playerIndex]} win`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
