"use strict"

const Dice = require('./dice');
var diceRoll = new Dice();
class JSRacer {
  constructor(players, length) {
    this.player = players
    this.trackLength = length
    this.players = this.generatePlayers()
    this.playersPos = this.playerPosLoop()
    this.trapsIndex = this.rngTraps()
  }

  generatePlayers() {
    let numPlayers = [];
    for (let i = 0; i < this.player; i++) {
      numPlayers.push(String.fromCharCode(65+i));
    }
    return numPlayers;
  }

  print_line(player, pos, current_player) {
    let array = [];
    for (let i = 0; i <= this.trackLength; i++) {
      // console.log(this.trapsIndex[current_player]);
      if (this.trapsIndex[current_player] === i) {
        // console.log(this.trapsIndex);
        this.print_obstacle(array);
      } else {
        array.push('_');
      }

    }
    if (pos >= this.trackLength) {
      array.splice((this.trackLength), 1, player);
      return (array.join('|'));
    } else {
      array.splice(pos, 1, player);
      return (array.join('|'));
    }
  }

  rngTraps(){
    let traps = [];
    for (let i = 0; i < this.player; i++) {
      let rng = Math.round(Math.random()*(this.trackLength-2))+1;
      traps.push(rng);
    }
    return traps;
  }

  print_obstacle(array){
    array.push('#');
  }

  playerPosLoop(){
    let position = []
    for (var i = 0; i < this.players.length; i++) {
      position.push(0);
    }
    return position;
  }

  print_board() {
    for (var playerLoop = 0; playerLoop < this.players.length ; playerLoop++) {
      var currPlayer = this.players[playerLoop];
      if (this.trapsIndex[playerLoop] === this.playersPos[playerLoop]) {
        // console.log('trap set');
        this.playersPos[playerLoop] -= 2;
      }
      console.log(this.print_line(currPlayer, this.playersPos[playerLoop], playerLoop));
      if(this.playersPos[playerLoop] >= this.trackLength){
        if (!this.hasOwnProperty('winnerPlayer')) {
          this.winnerPlayer = currPlayer;
        }
      } else {
        this.playersPos[playerLoop] += this.advance_player();
      }
    }
    if (this.winner()) {
      playerLoop += this.players.length;
    }
  }

  advance_player() {
    return diceRoll.roll();
  }
  finished() {
    if (this.winnerPlayer) {
      return false;
    } else {
      return true;
    }
  }
  winner() {
    if(this.hasOwnProperty('winnerPlayer')) {
      console.log(`${this.winnerPlayer} won!`);
      return true;
    } else {
      return false
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
