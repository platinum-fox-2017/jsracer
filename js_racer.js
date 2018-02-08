"use strict"

const Dice = require('./dice');

class JSRacer {
  
  constructor(players, length) {      
    this.players      = players;
    this.length       = length;
    this.arrPlayer    = [];
    this.arrTrap      = [];
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

  generateTrap() {
      var indexTrap = Math.floor(Math.random() * this.length-1) + 1;
      while(indexTrap == 0 || indexTrap == this.length-1) {
        indexTrap = Math.floor(Math.random() * this.length-1) + 1;
      }
      this.arrTrap.push(indexTrap);
  }

  print_board() {
    for (let i = 0; i < this.arrPlayer.length; i++) {
      console.log(this.print_line(this.arrPlayer[i].nama, this.arrPlayer[i].position));
      this.movePlayer(this.arrPlayer[i]);
    }
  }

  print_line(playerName, pos) {
    var track = [];
    var idxTrap = 0;
    for (let i = 0; i < this.length; i++) {
      if(i == pos) {
        track.push(playerName);  
      } else if (i == this.arrTrap[idxTrap] ) {
        track.push('x');
        if (idxTrap < this.arrTrap.length) {
          idxTrap = idxTrap + 1;
        }
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
      if (player.position == this.arrTrap[0]) {
        player.position = 0;
        console.log(player.nama + " kena jebakan !");
      }
    }
  }

  finished() {
    return this.winner();
  }

  getPlayer() {
    return this.arrPlayer;
  }

  winner() {
    for(let i = 0; i < this.arrPlayer.length; i++) {
      if ((this.arrPlayer[i].position+1) == this.length) {
        console.log("Player " + this.arrPlayer[i].nama + " win !");
        return true;
      }
    }
    return false;
  }

  reset_board() {
    console.log("\x1B[2J")
  }

}

module.exports = JSRacer;