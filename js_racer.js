"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    let listPlayer = 'ABCDEFGHI'
    this.players = []
    this.distance = length
    this.board = []
    this.isFinished = false
    this.win;
    for(let i = 0 ; i < players ; i++){
      let obj = {}
      obj.name = listPlayer[i]
      obj.position = 0
      this.players.push(obj)
    }
  }
  print_board() {
    this.board = []
    for(let i = 0 ; i < this.players.length ; i++){
      this.advanced_player(this.players[i])
      this.finished(this.players[i].name,this.players[i].position)
      this.board.push(this.print_line(this.players[i]))
    }
    console.log(`=-=-`.repeat(this.distance))
    console.log(this.board.join('\n'))
    console.log(`=-=-`.repeat(this.distance))
    console.log('')
    if(this.win){
      this.winner()
    }
  }

  print_line(player){
    let line = []
    for(let i = 0 ; i < this.distance ; i ++){
      if(player.position == i){
        line.push(player.name + ' | ' )
      }else{
        line.push('  | ')
      }
    }
    return line.join('')
  }

  advanced_player(player) {
    let dice = new Dice(2)
    if(this.isFinished === false){
      player.position += dice.roll()
    }

  }

  finished(player,position) {
    if(position >= this.distance-1){
      this.isFinished = true
      position = this.distance-1
      this.win = player
    }

  }
  winner() {
    console.log(`SELAMAT PLAYER JUARA BALAPAN INI ADALAH ${this.win}`)

  }
  reset_board() {
    // console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
