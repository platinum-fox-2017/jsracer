"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = this.createPlayers(players)
    this.length = length < 15 ? 15 : length
  }

  createPlayers(player) {
    let arrPlayer = []
    let charName = 'abcdefghijklmnopqrtuvwxyz'
    for (let i = 0; i < player; i++) {
      arrPlayer[i] = {
        name: charName.charAt(i),
        position: 0
      }
    }
    // return [{name: 'a', position: 0},{....}]
    console.log(arrPlayer)
    return arrPlayer
  }

  print_board() {

  }
  print_line(player, pos) {

  }
  advanced_player(player) {

  }
  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
