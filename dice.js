"use strict"

class Dice {
  constructor() {

  }
  roll() {
    let dice = Math.floor(Math.random()*3)
    return dice

  }
}

module.exports = Dice;
