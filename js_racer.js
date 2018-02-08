"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    let listPlayer = 'ABCDEFGHI'
    this.count = 0
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
    for(let i = 0 ; i < this.players.length ; i++){
      console.log(this.print_line(this.players[i]))
    }
    if(this.count === 0 ){
      this.advanced_player(this.players[this.count])
      this.count++
    }else if (this.count == 1){
      this.advanced_player(this.players[this.count])
      this.count++
    }else{
      this.advanced_player(this.players[this.count])
      this.count = 0
    }
      this.finished(this.players[this.count].name,this.players[this.count].position)
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
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
