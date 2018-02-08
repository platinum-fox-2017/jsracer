"use strict"

class Dice {
  constructor(maxNumber) {
    this.maxNumber = maxNumber
  }
  roll() {
    return Math.ceil(Math.random()*this.maxNumber)
  }
}

module.exports = Dice;
