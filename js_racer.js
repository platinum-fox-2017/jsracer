"use strict"

const Dice = require('./dice');
class JSRacer {
  constructor(players, length, dice) {
    this.runner= this.playersToken(players) || this.playersToken(3)
    this.length= length || 20
    this.position= this.firstPos(players) || this.firstPos(3)
    this.bomb= this.obstaclePlacment(players,length) || this.obstaclePlacment(3)
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
  
  obstaclePlacment(bomb,length) {
    var arrBomb=[];
    for(var b=0; b<bomb; b++) {
      arrBomb.push(1+Math.floor(Math.random()*(length-2)))
    }
    return arrBomb;
  }

  print_board() {
    this.reset_board();
    for(var i=0; i<this.runner.length; i++) {
      this.print_line(i,this.position[i]);
    }
  }

  print_line(player, pos) {
    var line=[]
    for(var j=0; j<this.length; j++) {
      line.push(' ');
    }
    if(typeof this.bomb[player]==='number') {line.splice(this.bomb[player],1,'X');}
    line.splice(pos,1,this.runner[player]);
    console.log(line.join('|'));
  }

  advanced_player(playerIndex) {
    let dice=new Dice();
    this.position[playerIndex]+=dice.roll()
    if(this.position[playerIndex]>this.length-1) {
      this.position[playerIndex]=Number(this.length-1);
    }
    if(this.position[playerIndex]===this.bomb[playerIndex]) {
      this.position[playerIndex]-=2;
      if(this.position[playerIndex]<0)this.position[playerIndex]=0;
      this.bomb.splice(playerIndex,1,'')
    }
  }

  winner(playerIndex) {
    console.log(`Congratulations ${this.runner[playerIndex]} win`);
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
