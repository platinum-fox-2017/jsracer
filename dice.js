"use strict"

class Dice {
  constructor() {

  }
  roll() {
    return Math.floor(Math.random() * (7 - 1) + 1)
  }
}

module.exports = Dice;
