"use strict"

class Dice {
  constructor(dice) {
    this.dice = dice
  }
  roll() {
    return Math.ceil(Math.floor(Math.random() * 4));
  }
}


module.exports = Dice;
