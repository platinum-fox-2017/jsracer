"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.player = players
    this.length = length
  }
  print_board() {
    var board = ''
    var listPlayer = ['a','b','c','d','e','f','g','h','i','j']
    var playerGo = ''
    for(let i=0; i<this.player; i++){
      playerGo = listPlayer[i]
      board += this.print_line(playerGo,0) + '\n'
    }
    return board
  }
  print_line(player, pos) {
    var lineLen = []
    for(let j=0; j<this.length; j++){
      lineLen.push(' ')
      if(pos === j){
        lineLen.push(player)
      }
    }
    return lineLen.join('|')
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

const argv_race = process.argv
var js_racing = new JSRacer(argv_race[2],argv_race[3])
console.log(js_racing.print_board())

module.exports = JSRacer;
