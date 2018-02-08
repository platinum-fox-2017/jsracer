"use strict"

class Dice {
  constructor(num) {
    this.number = num
  }
  roll() {
    let random = Math.ceil(Math.random()*this.number)
    return random
  }
}

module.exports = Dice;
