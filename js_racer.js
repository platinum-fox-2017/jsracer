"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players = 2, length = 15) {
    this.players = players < 2 ? this.createPlayers(2) : this.createPlayers(players)
    this.length = length || 15
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
    return arrPlayer
  }

  print_board() {
    for (let i = 0; i < this.players.length; i++) {
      console.log(this.print_line(this.players[i]))
      this.advanced_player(this.players[i])
    }
    return ''
  }

  print_line(player) {
    let track = ''
    for (let i = 0; i <= this.length; i++) {
      if (player.position === i) {
        track += `${player.name}|`
      } else {
        track += ' |'
      }
    }
    return track
  }

  advanced_player(player) {
    if (player.position > this.length) {
      player.position = this.length
    } else {
      player.position += this.dice.roll()
      if (player.position > this.length) {
        player.position = this.length
      }
    }
    // this.finished()
    // return player
  }


  finished() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].position >= this.length) {
        console.log(this.print_board())
        console.log(this.winner(this.players[i].name))
        return true
      }
    }
  }

  winner(player) {
    // console.log(this.print_board())
    return `pemenangnya ` + player
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
