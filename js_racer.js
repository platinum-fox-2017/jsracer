"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = this.new_player(players, length)
    this.length = length
  }
  // test() {
  //   console.log(this.players)
  // }
  new_player(players, length) {
    let listofplayers = []
    let names = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i < players; i++) {
      let playerinfo = {
        player: names[i],
        position: 0
      }
      listofplayers.push(playerinfo)
    }

    return listofplayers
  }
  print_board() {
    let board = []
    for (let i = 0; i < this.players.length; i++) {
      board.push(this.print_line(this.players[i].player, this.players[i].position))
    }

    return board.join(`\n`)
  }
  print_line(player, pos) {
    let line = [];
    for(let j = 0; j <= this.length; j++) {
      if(pos === j) {
        line.push(`${player}|`)
      } else {
        line.push(` |`);
      }
    }

    return line.join('');
  }
  advanced_player(player) {
    this.dice = new Dice().roll()
    player.position += this.dice
  }
  finished() {
    for(let i = 0; i < this.players.length; i++) {
      if(this.players[i].position >= this.length-1) {
        this.firstplace = this.players[i].player
        return true
      }
    }
    return false
  }
  winner() {
    console.log(`Congratulations ${this.firstplace}, You Just Won The Game!!!!`)
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}


module.exports = JSRacer;