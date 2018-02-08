"use strict"

class Dice {
  constructor() {
    this.dice = 6
  }
  roll() {
      return random = Math.round(Math.random() * this.dice)
  }
}

module.exports = Dice;