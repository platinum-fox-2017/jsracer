"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.player = players;
    this.length = length;
    this.playerInfo = this.infoRacers();
    this.result = this.print_board();
    this.finish = false;
    this.win = '';
  }

  print_board() {
    for(let s=0; s<this.player; s++){
      if(this.playerInfo[s].position >= this.length-1){
        this.print_line(this.playerInfo[s].name, this.length-1);
        this.finish = true;
      } else {
        this.print_line(this.playerInfo[s].name, this.playerInfo[s].position);
        var random = this.advanced_player();
        this.playerInfo[s].position += random;
      }
    }
  }

  infoRacers(){
    let abjad = 'abcdefghijklmnopqrstuvqxyz'
    var racers = []
    for(let j=0; j<this.player; j++){
      let racer = {
        name: abjad[j],
        position: 0
      }
      racers.push(racer);
    }
    return racers;
  }

  print_line(player, pos) {
    let line = [];
    for(let i=0; i<this.length; i++){
      if(i===pos){
        line.push(player);
      } else {
        line.push(' ');
      }
    }
    console.log(line.join('|'));
  }

  advanced_player(player) {
    let random = Math.floor((Math.random()*6)+1);
    return random;
  }

  finished() {
    for(let c=0; c<this.player; c++){
      if(this.playerInfo[c].position===this.length-1){
        this.win = this.playerInfo[c].name;
        this.winner();
        this.finish = true;
      }
    }
  }

  winner() {
    console.log('The winner is player '+ this.win);
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}


module.exports = JSRacer;
