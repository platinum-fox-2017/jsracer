"use strict"

class Dice {
  constructor() {
    this.dice = [1, 2, 3, 4, 5, 6]
  }
  roll() {
    let random = Math.round(Math.random()*5)
    let diceResult = this.dice[random]
    return diceResult
  }
}

module.exports = Dice;