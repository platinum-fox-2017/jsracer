"use strict"

const Dice = require('./dice');

let dice = new Dice()

class JSRacer {
  constructor(users,length){
    this.board = []
    this.userss = ['A','B','C','D','E','F']
    this.engine = 3
    this.pemain = []
    this.progress = 0
    this.progressPlayer;
    this.lengthBoard = length
    this.winner = []
    this.isFinished = false
    this.users = users
  }

  createBoard(){
      for(let i = 0; i < this.users; i++){
        let user = this.userss[i]
        let line = this.printLine(user,this.lengthBoard)
        this.board.push(line)
      }
      return this
  }

  printBoard(){
    this.checkKordinat()
    if(this.progress >= this.lengthBoard-1){
        for(let x = 0; x < this.board.length; x++){
            for(let [index,value] of this.board[x].entries()){
                if(index >= this.lengthBoard-1 && value.length !== 0){
                    this.winner.push(value)
                }
            }
        }
        return this.isFinished = true
    }else{
      this.advance_player()
    } 
    this.printBoard()
    return this
  }

  trapAndBooster(){
    let trap = dice.trap(this.lengthBoard - 2)
    let booster = dice.booster(this.lengthBoard - 2)
    let pack = []
    if(trap < booster){
      
      trap + 1
    }
    
    pack.push(trap)
    pack.push(booster)
    return pack
  }

  printLine (user,length){
    let tmp = []
    let pack = this.trapAndBooster()

      for(let j = 0; j < length;j++){
          if(j === 0){
              tmp.push(user)
              this.pemain.push(user)
          }else if(j === pack[0]){
            tmp.push("*")
          }else if(j === pack[1]){
            tmp.push("+")
          }
          else{
              tmp.push([])
          }
      }
    return tmp
  }

  checkKordinat(){
      for(let i = 0; i < this.board.length; i++){
          for(let [index,value] of this.board[i].entries()){
              if(value.length !== 0 && index > this.progress){
                  this.progress = index
                  this.progressPlayer = value
              }
          }
      }
  }

  advance_player(){
    for(let i = 0; i < this.pemain.length;i++){
      let tmp;
      let newPosition;
      let random = dice.roll(this.engine)
      let count = 0;
      let pemain = this.pemain[i]
      
      for(let j = 0; j < this.board[i].length; j++){
        
          if(this.board[i][j] === pemain && count === 0){
              console.log(this.board)
              this.sleep(1000)
              this.reset_board()
        
              tmp = this.board[i][j]
              this.board[i].splice(j,1,[])
              newPosition = j + random
              if(this.board[i][newPosition] === "*"){
                newPosition -= 3
              }

              if(this.board[i][newPosition] === "+"){
                newPosition+= 5
              }

              this.board[i].splice(newPosition,1,tmp)
              count++
          }
      }
    }
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  findWinner(){        
    
    console.log(this.winner)
  }
 
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
