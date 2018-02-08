"use strict"

class Dice {
  constructor() {
    this.dice = 6
  }
  roll() {
    let random = 0
    while (random === 0) {
      random = Math.round(Math.random() * this.dice)
    }
    return random
  }
}

module.exports = Dice;