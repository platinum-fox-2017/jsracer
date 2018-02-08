"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length, obstacle, powerUp) {
    this.players = this.create_player(players)
    this.length = length
    this.isFinish = false
    this.obstacle = obstacle
    this.powerUp = powerUp

  }
  print_board() {
    let arrBoard=[];
    for(let i=0; i<this.players.length; i++){
     arrBoard.push(this.print_line(this.players[i].name, this.players[i].position))
     this.advanced_player(this.players[i])
     this.finished(this.players[i].position, this.players[i].name)
    }
    return arrBoard.join('\n')
  }
  create_player(players){
    let arrPlayers = []
    let alpha = 'abcdefghij'
    for(let i = 0; i<players; i++){
      let objPlayers = {
        name : alpha[i],
        position : 0
      }
      arrPlayers.push(objPlayers)
    }
    return arrPlayers
  }
  print_line(player, pos) {
   // console.log(pos, this.length)
    let arrLine=[]
    for(let i =0; i<this.length; i++){
      if(pos === i){
        arrLine.push(`|${player}`)
      }else if(i===this.obstacle.position ){
        arrLine.push(`|~`)
      }else if(i===this.powerUp.position ){
        arrLine.push(`|*`)
      }else{
        arrLine.push(`| `)
      }
    }
    return arrLine.join('')
  }
  advanced_player(player) {
    let dice = new Dice()
    player.position += dice.roll()
    if(player.position === this.obstacle.position){
      player.position-=2
    }else if(player.position === this.powerUp.position){
      player.position+=2
    }
      
  }
  finished(position,name) {
    if(position >= this.length-1){
      this.isFinish = true
      this.winner(name)
    }
  }
  winner(name) {
    console.log (`HORAIII ${name} is the winner`)
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
