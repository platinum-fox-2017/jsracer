"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(numberOfPlayers, length) {
    this.numberOfPlayers = numberOfPlayers;
    this.length = length;
    this.players = [];
    this.dice = new Dice();
    this.finish = false;
    this.playerWin = '';
  }

  generate_player_data(){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i=0; i<this.length; i++){
      this.players.push({playerName: alphabet[i], position: 0})
    }
  }

  print_board(players) {
    for(let i=0; i<this.numberOfPlayers; i++){
      if(this.players[i].position >= this.length-1){
        this.print_line(this.players[i].playerName, this.players[i].position);
        this.finish = true;
      }else{
        this.print_line(this.players[i].playerName, this.players[i].position);
        this.move_point(this.players[i]);
      }
    }
  }

  print_line(player, pos) {
    let track = [];
    for(let j=0; j<(this.length);j++){
      if(j===pos){
        track.push(player)
      }else{
        track.push(' ')
      }
    }
    console.log(track.join('|'));
  }

  move_point(player) {
    let position = player.position + this.dice.roll();
    
    if(position > this.length-1){
      player.position = this.length-1;
    }else{
      player.position = position;
    }
  }

  finished() {
    for(let i=0; i<this.numberOfPlayers; i++){
      if(this.players[i].position === this.length-1){
        this.playerWin = this.players[i].playerName;
        this.winner();
        this.finish = true;
      }
    }
  }

  winner() {
    console.log('The winner is player '+ this.playerWin)
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;