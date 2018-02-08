"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = this.create_pemain(players);
    this.length = length;
    this.winner;
  }
  create_pemain(jumlahPemain) {
    let arr_pemain = [];
    let abjad = ['a', 'b', 'c', 'd', 'e'];
    for (let c = 0; c < jumlahPemain; c++) {
      var obj = {
        pemain: abjad[c],
        pos: 0
      }
      arr_pemain.push(obj)
    }
    // console.log(obj.pemain)//nama pemain
    // console.log(obj.pos)//posisi pemain
    return arr_pemain
  }
  print_board() {
    let boardArr = [];
    for (let a = 0; a < this.players.length; a++) {
      boardArr.push(this.print_line(this.players[a].pemain, this.players[a].pos))
    }
    return boardArr;
  }
  print_line(player, pos) {
    let isiArr = [];
    for (let b = 0; b < this.length; b++) {
      if (b === pos) {
        isiArr.push(player)
      } else {
        isiArr.push(' ')
      }
    }
    return isiArr.join(' |')
  }
  advanced_player(player) {
    let rollDice = new Dice();
    for (let a = 0; a < this.players.length; a++) {
      this.players[a].pos += rollDice.roll();
      if (this.players[a].pos === this.obstacle) {
        this.players[a].pos -= 1
      }
      if (this.players[a].pos === this.booster) {
        this.players[a].pos += 2
      }
      if (this.players[a].pos >= this.length - 1) {
        this.players[a].pos = this.length - 1
        this.winner = this.players[a].pemain
        break;
      }
    }
    console.log(this.print_board())
  }
  finished() {

  }
  winners() {
    return this.winner
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;