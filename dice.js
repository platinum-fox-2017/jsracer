"use strict"

class Dice {
  constructor() {

  }

  roll() {
    return Math.floor(Math.random() * 6) + 1 
  }
}

module.exports = Dice;