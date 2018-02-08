"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.player = this.create_player(players)
    this.lintasan = length
    this.dice = new Dice ()
    this.obstacle = Math.floor(Math.random()*20)
    this.powerUp = Math.floor(Math.random()*15)
  }

  create_player(jumlahPlayer){
    const pemain = 'ABCDEFGHIJ'
    let arrayPemain = []
    for(let i=0;i<jumlahPlayer;i++){
      let objPemain = {
        name : pemain[i],
        position : 0
      }
      arrayPemain.push(objPemain)
    }
    return arrayPemain
  }

  print_board() {
    let board = []
    for(let i =0;i<this.player.length;i++){
      board.push(this.print_line(this.player[i].name,this.player[i].position))
    }
    return board.join('\n')
  }

  print_line(player,position) {
    let array = []
    for(let i =0;i<this.lintasan;i++){
      if(position === i){
        array.push(player)
      }
      else if(i === this.obstacle){
        array.push('*')
        this.addObstacle()
      }
      else if(i === this.powerUp){
        array.push('$')
        this.addSuperPower()
      }
      else{
        array.push(' ')
      }  
    }
    return array.join('|')
  }

  advanced_player() {
    for(let i=0;i<this.player.length;i++){
      let roll = this.dice.roll()
      this.player[i].position +=roll
    }
    
    return this.print_board()
  }

  addObstacle(){
    for(let i =0;i<this.player.length;i++){
      if(this.player[i].position === this.obstacle){
        console.log(this.player[i].name,'get obstacle')
        this.player[i].position -= 4
        
      }
    }
  }

  addSuperPower(){
    for(let i =0;i<this.player.length;i++){
      if(this.player[i].position === this.powerUp){
        console.log(this.player[i].name,'get powerUp!!!')
        this.player[i].position += 10
        
      }
    }

  }

  finished() {
    for(let i =0;i<this.player.length;i++){
      if(this.player[i].position >= this.lintasan){
        this.winner(this.player[i].name)
        return true
      }
    }
    return false  
  }

  winner(player) {
    console.log(`Hooooo the race is end, The winner is ${player}`)
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

let play = new JSRacer(3,20)
// console.log(play)
// console.log(play.addObstacle())

module.exports = JSRacer;
