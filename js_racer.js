"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.listPlayer = players
    this.length = length
  }

  print_board() {
    for(let i=0; i<this.listPlayer.length; i++) {
      this.print_line(this.listPlayer[i].name, this.listPlayer[i].position)
    }
  }

  print_line(player, pos) {
    let arrLine = []
    for(let i=0; i<this.length; i++) {
      if(pos == i) {
        arrLine.push(player)
      }
      arrLine.push(' ')
    }
    console.log(arrLine.join('|'));
  }

  move(player) {
    let diceResult = new Dice().roll()

    for(let i=0; i<this.listPlayer.length; i++) {
      if(player == this.listPlayer[i].name) {

        let newPos = this.listPlayer[i].position + diceResult
        if(newPos >= this.length-1) {
          this.listPlayer[i].position = this.length-1
        } else {
          this.listPlayer[i].position += diceResult
        }
      }
    }
  }

  finished() {
    for(let i=0; i<this.listPlayer.length; i++) {
      if(this.listPlayer[i].position == this.length-1) {
        return true
      }
    }
    return false
  }

  winner() {
    for(let i=0; i<this.listPlayer.length; i++) {
      if(this.listPlayer[i].position >= this.length-1) {
        console.log(`Selamat, ${this.listPlayer[i].name} menang!`);
      }
    }
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
