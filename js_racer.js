"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players
    this.length = length
    this.arrPlayers = this.add_player()
  }
  add_player(){
    let result = [];
    let dict = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<this.players; i++){
      let obj = {
        name: dict[i],
        position: 0,
        obstacle: Math.ceil(Math.random()*this.length-2),
        up: Math.ceil(Math.random()*this.length-2)
      }
      result.push(obj)
    }
    return result
  }
  print_board() {
    let board = []
    for(let i=0; i<this.players; i++){
      let row = []
      for(let j=0; j<this.length; j++){
        row.push(' ')
      }
      board.push(row)
    }
    return board
  }
  print_line() {
    let board = this.print_board()
    for(let i=0; i<this.players; i++){
      let player = this.arrPlayers[i].name
      board[i][this.arrPlayers[i].position] = player
      board[i][this.arrPlayers[i].obstacle] = '#'
      this.obstacle()
      board[i][this.arrPlayers[i].up] = '>'
      this.up()
    }
    return board.join('\n').split(',').join('|')
  }
  advanced_player() {
    let dice = new Dice
    for(let i=0; i<this.players; i++){
      this.arrPlayers[i].position += dice.roll()
    }
    return
  }
  finished() {
    for(let i=0; i<this.players; i++){
      if(this.arrPlayers[i].position > this.length){
        console.log('Pemenangnya adalah '+this.arrPlayers[i].name+'!!!');
        return false;
      }
    }
    return true;
  }
  obstacle(){
    for(let i=0; i<this.players; i++){
      if(this.arrPlayers[i].position === this.arrPlayers[i].obstacle){
        this.arrPlayers[i].position = 0
        console.log('Player '+this.arrPlayers[i].name+' kena jebakan!');
      }
    }
  }
  up(){
    for(let i=0; i<this.players; i++){
      if(this.arrPlayers[i].position === this.arrPlayers[i].up){
        this.arrPlayers[i].position += 3
        console.log('Player '+this.arrPlayers[i].name+' dapat power up!');
      }
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
