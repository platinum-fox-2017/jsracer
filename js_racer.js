"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = this.createPlayer(players)
    this.length = length
    this.dice = new Dice()
    this.board = []
    this.obstacle = Math.floor(Math.random() * this.length)
    this.powerUp = Math.floor(Math.random() * this.length)
  }

  createPlayer(player) {
    let arrPlayers = []
    let namePlayer = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < player; i++) {
        let objPlayer = {
          name: namePlayer[i],
          pos: 0
        }
      arrPlayers.push(objPlayer)
    }
    return arrPlayers
  }

  print_board() {
    let boardArr = [];
    // console.log(rintangan)
    for (let i = 0; i < this.players.length; i++) {
      boardArr.push(this.print_line(this.players[i].name, this.players[i].pos, this.obstacle, this.powerUp))
    }
    return boardArr
  }

  print_line(player, pos, obstacle, powerUp) {
    if (this.players < 2) {
      return 'Pemain harus lebih dari 1 orang!'
    } else {
      if (this.length < 15) {
        return 'Lintasan kurang dari 15 track!'
      } else {
        let line = [];
        let temp = [];
        for (let j = 0; j < this.length; j++) {
          if (j === pos) {
            temp.push(player)
          } else {
            temp.push(' ')
          }
        }
        // temp[obstacle] = 'X';
        temp[powerUp] = '@';

        
        line.push(temp.join('|'))
        return line
      }
    }
  }

  advanced_player(player) {
   
    for (let i = 0; i < this.players.length; i++) {
      let randomPos = this.dice.roll()
      this.players[i].pos += randomPos;
      if(this.players[i].pos === this.obstacle) {
        this.players[i].pos -= -1;
        console.log(`${this.players[i].name} terkena obstacle`)
      }
      // console.log(`ini pos obs ${this.obstacle}`);
    }
    console.log(this.print_board());

  }

  finished() {
    for(let i = 0; i < this.players.length; i++) {
      if (this.players[i].pos >= this.length - 1) {
        console.log(`${this.players[i].name} menjadi pemenang`)
        return false
      }
    }
    return true
  }

  winner() {

  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
