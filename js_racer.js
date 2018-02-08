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
      obj.obstacle = Math.floor(Math.random()*this.distance-2)
      obj.up = Math.ceil(Math.random()*this.distance-2)
      this.players.push(obj)
    }
  }

  print_board() {
    for(let i = 0 ; i < this.players.length ; i++){
      console.log(this.print_line(this.players[i]))
    }
    if(this.count === 0 ){
      this.advanced_player(this.players[this.count])
      this.obstacle()
      this.up()
      this.count++
    }else if (this.count == 1){
      this.advanced_player(this.players[this.count])
      this.obstacle()
      this.up()
      this.count++
    }else{
      this.advanced_player(this.players[this.count])
      this.obstacle()
      this.up()
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
        line.push(player.name + '| ' )
      }else if(player.obstacle === i){
        line.push(`#` + '| ')
      }else if(player.up === i){
        line.push(`>` + '| ')
      }else{
        line.push(' | ')
      }
    }
    return line.join('')
  }

  advanced_player(player) {
    let dice = new Dice(4)
    if(this.isFinished === false){
      player.position += dice.roll()
    }
  }

  up(){
    for(let i = 0 ; i < this.players.length; i++){
      if(this.players[i].position === this.players[i].up){
        this.players[i].position +=3
        console.log('Player '+this.players[i].name+' dapat power up!')
      }
    }
  }

  obstacle(){
    for(let i=0; i<this.players.length; i++){
      if(this.players[i].position === this.players[i].obstacle){
        this.players[i].position = 0
        console.log('Player '+this.players[i].name+' kena jebakan!');
      }
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
