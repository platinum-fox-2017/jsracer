"use strict"
const Dice = require('./dice');

class JSRacer {
  constructor(players, trackLength) {
    this.players = players
    this.trackLength = trackLength
    this.objPlayer = this.generate_player()
    this.dice = new Dice()
    this.isWinner = false
 
  }
  print_board() {
    // this method represents the whole board with the whole character
    for (let i = 0; i < this.players; i++){
      this.print_line(this.objPlayer[i].player, this.objPlayer[i].totalPos)
    }
  }
  print_line(players, pos) {
    // this method represents the tracklength used for each character
    let board = [];
    
    for (let i = 0; i < this.trackLength; i++){
      board.push(' ')
    }
    board[pos] = players
    board = board.join('|')
    console.log(board)
  }
  generate_player(){
    // this method generates all the players in the game represented by the amount of players inputted
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let playerInGame = [];

    for (let i = 0; i < this.players; i++){
      let obj = {};
      obj.player = alphabet[i];
      obj.totalPos = 0;
      playerInGame.push(obj)
    }
    return playerInGame
  }

  advanced_player(players) {
    for (let i = 0; i < this.players; i++){
      this.objPlayer[i].totalPos += this.dice.roll()

      if (this.objPlayer[i].totalPos >= this.trackLength-1){
        this.objPlayer[i].totalPos = this.trackLength-1
        this.isWinner = true
        this.print_board()
        return this.winner(this.objPlayer[i].player)
      }
    }
    this.print_board()
    this.reset_board()
  }

  winner(player) {
    console.log("\n")
    console.log(`Congratulations ${player} have won the race!`)
  }
  reset_board() {
    console.log("\n")
  }
}

module.exports = JSRacer;
