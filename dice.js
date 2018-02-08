"use strict"

class Dice {
  constructor() {
    this.diceSize = 6
  }
  roll() {
    return Math.round(Math.random()*(this.diceSize-1)) + 1;
  }

}


module.exports = Dice;
