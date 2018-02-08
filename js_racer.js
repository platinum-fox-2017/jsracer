"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
  }
  print_board() {
    for (var i = 0; i < this.players.length; i++) {
      this.print_line(this.players[i]);
    }
  }
  print_line(players) {
    var board = [];

    for (var j = 0; j < this.length; j++) {
      if (players.position == j) board.push(players.name);
      else if (players.powerUp == j) board.push('$');
      else if (players.obstacle == j) board.push('#');
      else board.push(' ');
    }
    console.log(board.join('|'));
  }
  move(player) {
    let dice = new Dice().roll();

    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].name == player) {
        let newPos = this.players[i].position + dice;
        if (newPos > this.length - 1) this.players[i].position = this.length - 1;
        else {
          if (newPos == this.players[i].powerUp) {

            if (newPos + dice > this.length - 1) this.players[i].position = this.length - 1;
            else this.players[i].position = newPos + dice;

          } else if (newPos == this.players[i].obstacle) {

            if (newPos - (dice * 2) < 0) this.players[i].position = 0;
            else this.players[i].position = newPos - (dice * 2);
            
          } else this.players[i].position += dice;
        }
      }
    }
  }
  finished() {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].position == this.length - 1) return true;
    }

    return false;
  }
  winner() {
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].position == this.length - 1) {
        console.log(`Player '${this.players[i].name}' is the winner`);
        break;
      }
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
