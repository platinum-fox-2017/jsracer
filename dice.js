"use strict"

class Dice {
  constructor() {

  }
  roll() {
    return Math.ceil(Math.random()*3)
  }
}

module.exports = Dice;
