"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.player = this.create_player(players)
    this.lintasan = length
    this.dice = new Dice ()
  }

  create_player(jumlahPlayer){
    const pemain = 'ABCDEFGHIJ'
    let arrayPemain = []
    for(let i=0;i<jumlahPlayer;i++){
      let objPemain = {
        name : pemain[i],
        position : 0,
        obstacle : Math.ceil(Math.random()*20),
        powerUp : Math.ceil(Math.random()*15)
      }
      arrayPemain.push(objPemain)
    }
    return arrayPemain
  }

  print_board() {
    let board = []
    for(let i =0;i<this.player.length;i++){
      board.push(this.print_line(this.player[i].name,this.player[i].position))
      board[i][this.player[i].obstacle] = '^'
      this.addObstacle()
      board[i][this.player[i].powerUp] = '$'
      this.addSuperPower()
    }
    return board.join('\n').split(',').join('|')
  }

  print_line(player,position) {
    let insideArr = []
    for(let i =0;i<this.lintasan;i++){
      if(position === i){
        insideArr.push(player)
      }
      else{
        insideArr.push(' ')
      }  
    }
    return insideArr
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
      if(this.player[i].position === this.player[i].obstacle){
        console.log(`Oooops.... ${this.player[i].name} gets obstacle T_T, have to move back`)
        this.player[i].position -= 4
      }
    }
  }

  addSuperPower(){
    for(let i =0;i<this.player.length;i++){
      if(this.player[i].position === this.player[i].powerUp){
        console.log(`Wooohoo.... ${this.player[i].name} gets powerUp!!! welcome winner!!!`)
        this.player[i].position += 5
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
    console.log(`~~~~~~~Hooooo the race is end~~~~~~~`)
    console.log(`************The winner is ${player}*********`)
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

let play = new JSRacer(3,20)
console.log(play.print_board())

module.exports = JSRacer;
