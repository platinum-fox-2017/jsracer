"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
  }
  print_board() {
    for (var i = 0; i < this.players.length; i++) {
      this.print_line(this.players[i].name, this.players[i].position);
    }
  }
  print_line(player, pos) {
    var board = [];
    for (var j = 0; j < this.length; j++) {
      if (pos == j) board.push(player);
      else board.push(' ');

      board.push('|');
    }
    console.log(board.join(''));
  }
  move(player) {
    let dice = new Dice().roll();

    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].name == player) {
        if (this.players[i].position + dice > this.length - 1) {
          this.players[i].position = this.length - 1;
        } else this.players[i].position += dice;
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
