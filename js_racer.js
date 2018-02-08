"use strict"

const Dice = require('./dice');

class JSRacer {
  
  constructor(players, length) {      
    this.players      = players;
    this.length       = length;
    this.arrPlayer    = [];
  }

  generateGame() {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for(let i = 0; i < this.players; i++) {
      var playersObj = {
        indexPlayer: i,
        nama: alphabet[i],
        position: 0
      }
      this.arrPlayer.push(playersObj);
    }
  }

  print_board() {
    for (let i = 0; i < this.arrPlayer.length; i++) {
      console.log(this.print_line(this.arrPlayer[i].nama, this.arrPlayer[i].position));
      this.movePlayer(this.arrPlayer[i]);
    }
  }

  print_line(playerName, pos) {
    var track = [];
    for (let i = 0; i < this.length; i++) {
      if(i == pos) {
        track.push(playerName);  
      } else {
        track.push('_');        
      }
    }
    return track.join('|');
  }

  movePlayer(player) {
    let dice          = new Dice();
    let diceResult    = dice.roll();
    let numberOfMove  = diceResult + player.position;

    if (numberOfMove > this.length-1) {
      player.position = this.length-1;
    } else {
      player.position = numberOfMove;
    }
  }

  finished() {
    for(let i = 0; i < this.arrPlayer.length; i++) {
      if ((this.arrPlayer[i].position+1) == this.length) {
        return this.winner();
      }
    }
    return false;
  }

  getPlayer() {
    return this.arrPlayer;
  }

  winner() {
    for(let i = 0; i < this.arrPlayer.length; i++) {
      if ((this.arrPlayer[i].position+1) == this.length) {
        console.log("Player " + this.arrPlayer[i].nama + " win !");
      }
    }
  }

  reset_board() {
    console.log("\x1B[2J")
  }

}

module.exports = JSRacer;
