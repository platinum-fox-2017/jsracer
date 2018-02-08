"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = this.createPlayers(players)
    this.length = length < 15 ? 15 : length
    // random number from 1 to 6
    this.dice = new Dice()
  }

  createPlayers(player) {
    const total = player < 2 ? 2 : player
    let arrPlayer = []
    let charName = 'abcdefghijklmnopqrtuvwxyz'
    for (let i = 0; i < total; i++) {
      arrPlayer[i] = {
        name: charName.charAt(i),
        position: 0
      }
    }
    // return [{name: 'a', position: 0},{....}]
    return arrPlayer
  }

  print_board() {
    return this.players.map(player => {
      return this.print_line(player)
    }).join('\n')
  }

  print_line(player) {
    // return player
    let track = ''

    console.log(this.advanced_player(player))

    for (let i = 0; i < this.length; i++) {
      if (player.position === i) {
        track += `${player.name}|`
      } else {
        track += ' |'
      }
    }
    return track
  }

  advanced_player(player) {
    player.position += this.dice.roll()
    return player
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
