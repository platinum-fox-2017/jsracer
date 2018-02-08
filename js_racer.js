"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length,pos) {
    this.player=players
    this.rute=length
    this.pos=pos
    this.dices=new Dice()
    this.win=''
  }
  print_board() {
    for(let i=0;i<this.player.length;i++){
      this.print_line(this.player[i],this.pos[i])
    }
  }

  print_line(player,pos) {
    var board=[]
    for(let i=0;i<this.rute;i++){
      board.push(' ')
    }
    board[pos]=player
    board=board.join('|')
    console.log(board)
  }

  sleep() {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > 1000) {
        break;
      }
    }
  }
  move(player) {
    var hasil=0
    while(hasil<this.rute-1){
      this.reset_board()
      for(let i=0;i<player.length;i++){
        hasil=this.pos[i]+this.dices.roll()
        if(hasil>=this.rute-1){
          this.pos[i]=this.rute-1
          this.win=player[i]
          break;
        }else{
          this.pos[i]=hasil
        }
      }
      this.print_board()
      console.log()
      this.sleep()
    }
  }

  finished() {

  }
  winner() {
    console.log(`selamat ${this.win} menang`)
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
